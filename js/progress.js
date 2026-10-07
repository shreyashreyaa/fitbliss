/**
 * FitBliss - Progress Tracker & Canvas Chart (js/progress.js)
 * 
 * - Logs daily weight and workout completion
 * - Computes workout streak (consecutive completed workout days)
 * - Renders custom HTML5 Canvas line chart (zero third-party dependencies)
 * - Persists all data safely in localStorage via storage.js
 */

import { getProgressLogs, addProgressLog, deleteProgressLog, getUserProfile, getCalculatorResults } from './storage.js';
import { validateProgressEntry } from './validation.js';

let progressLogs = [];
let targetWeight = null;

document.addEventListener('DOMContentLoaded', () => {
  initProgressTracker();
});

function initProgressTracker() {
  const form = document.getElementById('progressForm');
  const dateInput = document.getElementById('logDate');
  const targetWeightInput = document.getElementById('targetWeightInput');

  // Set today's date as default
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
  }

  // Load target weight from calculator profile if available
  const userProfile = getUserProfile() || getCalculatorResults()?.inputs;
  if (userProfile && userProfile.weight) {
    // If goal is weight loss, estimate a reasonable target or allow user edit
    if (userProfile.goal === 'weight_loss') {
      targetWeight = Math.round(Number(userProfile.weight) * 0.9);
    } else if (userProfile.goal === 'muscle_gain') {
      targetWeight = Math.round(Number(userProfile.weight) * 1.05);
    } else {
      targetWeight = Number(userProfile.weight);
    }
  }

  if (targetWeightInput && targetWeight) {
    targetWeightInput.value = targetWeight;
  }

  if (targetWeightInput) {
    targetWeightInput.addEventListener('change', (e) => {
      const val = Number(e.target.value);
      if (val > 25 && val < 350) {
        targetWeight = val;
        renderProgressView();
      }
    });
  }

  // Load existing logs
  progressLogs = getProgressLogs();

  // If no logs yet, seed with a friendly initial entry if user has calculator profile
  if (progressLogs.length === 0 && userProfile && userProfile.weight) {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    addProgressLog({
      date: sevenDaysAgo.toISOString().split('T')[0],
      weight: Number(userProfile.weight),
      workoutCompleted: true,
      notes: 'Initial starting point from Fitness Calculator.'
    });
    progressLogs = getProgressLogs();
  }

  renderProgressView();

  // Form submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const entry = {
        date: document.getElementById('logDate').value,
        weight: document.getElementById('logWeight').value.trim(),
        workoutCompleted: document.getElementById('logWorkoutCompleted').checked,
        notes: document.getElementById('logNotes').value.trim()
      };

      // Clear errors
      const errorEl = document.getElementById('progressFormError');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.style.display = 'none';
      }

      const validation = validateProgressEntry(entry);
      if (!validation.isValid) {
        if (errorEl) {
          const firstError = Object.values(validation.errors)[0];
          errorEl.textContent = firstError;
          errorEl.style.display = 'block';
        }
        return;
      }

      // Add log
      progressLogs = addProgressLog({
        date: entry.date,
        weight: Number(entry.weight),
        workoutCompleted: Boolean(entry.workoutCompleted),
        notes: entry.notes || '—'
      });

      // Reset form fields (preserve date as today)
      document.getElementById('logWeight').value = '';
      document.getElementById('logWorkoutCompleted').checked = false;
      document.getElementById('logNotes').value = '';

      renderProgressView();
    });
  }

  // Redraw chart on window resize
  window.addEventListener('resize', () => {
    drawWeightChart(progressLogs, targetWeight);
  });
}

/**
 * Updates metrics summary, history table, empty-states, and redraws chart
 */
function renderProgressView() {
  updateMetricsCards();
  renderHistoryTable();
  drawWeightChart(progressLogs, targetWeight);
}

/**
 * Computes streak and updates stat cards
 */
function updateMetricsCards() {
  const currentWeightEl = document.getElementById('statCurrentWeight');
  const targetWeightEl = document.getElementById('statTargetWeight');
  const streakEl = document.getElementById('statWorkoutStreak');
  const totalWorkoutsEl = document.getElementById('statTotalWorkouts');

  if (progressLogs.length > 0) {
    const latestLog = progressLogs[progressLogs.length - 1];
    if (currentWeightEl) currentWeightEl.textContent = `${latestLog.weight} kg`;
  } else {
    if (currentWeightEl) currentWeightEl.textContent = '—';
  }

  if (targetWeightEl) {
    targetWeightEl.textContent = targetWeight ? `${targetWeight} kg` : 'Set Goal';
  }

  // Calculate Streak
  const streak = calculateWorkoutStreak(progressLogs);
  if (streakEl) streakEl.textContent = `${streak} ${streak === 1 ? 'Day' : 'Days'}`;

  // Total Completed Workouts
  const totalWorkouts = progressLogs.filter(item => item.workoutCompleted).length;
  if (totalWorkoutsEl) totalWorkoutsEl.textContent = totalWorkouts.toString();
}

/**
 * Calculates current consecutive workout streak in days
 */
function calculateWorkoutStreak(logs) {
  if (!logs || logs.length === 0) return 0;

  // Filter only completed workouts and get unique sorted dates descending
  const completedDates = Array.from(
    new Set(
      logs
        .filter(l => l.workoutCompleted)
        .map(l => l.date)
    )
  ).sort().reverse();

  if (completedDates.length === 0) return 0;

  const todayStr = new Date().toISOString().split('T')[0];
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  // If latest workout was neither today nor yesterday, streak is broken
  const latestDate = completedDates[0];
  if (latestDate !== todayStr && latestDate !== yesterdayStr) {
    return 0;
  }

  let streak = 1;
  for (let i = 0; i < completedDates.length - 1; i++) {
    const d1 = new Date(completedDates[i]);
    const d2 = new Date(completedDates[i + 1]);
    const diffTime = d1.getTime() - d2.getTime();
    const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

/**
 * Render history log table
 */
function renderHistoryTable() {
  const tbody = document.getElementById('progressTableBody');
  const emptyState = document.getElementById('progressEmptyState');
  const tableContainer = document.getElementById('progressTableContainer');

  if (!tbody) return;

  tbody.replaceChildren();

  if (progressLogs.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (tableContainer) tableContainer.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (tableContainer) tableContainer.style.display = 'block';

  // Render rows descending (newest on top)
  const reversedLogs = [...progressLogs].reverse();

  reversedLogs.forEach((log, index) => {
    const tr = document.createElement('tr');

    // Date
    const tdDate = document.createElement('td');
    tdDate.textContent = formatDate(log.date);

    // Weight
    const tdWeight = document.createElement('td');
    tdWeight.textContent = `${log.weight} kg`;

    // Workout completed badge
    const tdStatus = document.createElement('td');
    const badge = document.createElement('span');
    if (log.workoutCompleted) {
      badge.className = 'badge badge-success';
      badge.textContent = 'Completed';
    } else {
      badge.className = 'badge badge-neutral';
      badge.textContent = 'Rest Day';
    }
    tdStatus.appendChild(badge);

    // Notes
    const tdNotes = document.createElement('td');
    tdNotes.textContent = log.notes || '—';

    // Actions (Delete button)
    const tdAction = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-outline';
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.color = '#ef4444';
    deleteBtn.style.borderColor = '#fca5a5';
    deleteBtn.setAttribute('aria-label', `Delete progress entry for ${log.date}`);

    deleteBtn.addEventListener('click', () => {
      progressLogs = deleteProgressLog(log.id);
      renderProgressView();
    });

    tdAction.appendChild(deleteBtn);

    tr.appendChild(tdDate);
    tr.appendChild(tdWeight);
    tr.appendChild(tdStatus);
    tr.appendChild(tdNotes);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);
  });
}

function formatDate(dateStr) {
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const d = new Date(parts[0], parts[1] - 1, parts[2]);
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
    return dateStr;
  } catch (e) {
    return dateStr;
  }
}

/**
 * Pure HTML5 Canvas line chart for weight over time
 * (No third-party libraries used!)
 */
function drawWeightChart(logs, target) {
  const canvas = document.getElementById('progressChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Handle devicePixelRatio for sharp retina rendering
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const width = rect.width;
  const height = rect.height;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  if (!logs || logs.length < 2) {
    // Show placeholder message if insufficient data points
    ctx.fillStyle = '#64748b';
    ctx.font = '500 14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Log at least 2 entries to display your weight progress trend line.', width / 2, height / 2);
    return;
  }

  const padding = { top: 40, right: 40, bottom: 50, left: 55 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  // Extract weights and bounds
  const weights = logs.map(l => l.weight);
  if (target) weights.push(target);

  let minWeight = Math.min(...weights);
  let maxWeight = Math.max(...weights);

  // Add margin around min/max
  const range = maxWeight - minWeight || 5;
  minWeight = Math.max(0, Math.floor(minWeight - range * 0.15));
  maxWeight = Math.ceil(maxWeight + range * 0.15);

  const getX = (index) => padding.left + (index / (logs.length - 1)) * chartW;
  const getY = (val) => padding.top + chartH - ((val - minWeight) / (maxWeight - minWeight)) * chartH;

  // Draw Horizontal Gridlines & Y-Axis Labels
  const gridSteps = 5;
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#64748b';
  ctx.font = '11px Inter, sans-serif';
  ctx.textAlign = 'right';

  for (let i = 0; i <= gridSteps; i++) {
    const val = minWeight + ((maxWeight - minWeight) / gridSteps) * i;
    const y = getY(val);

    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + chartW, y);
    ctx.stroke();

    ctx.fillText(`${Math.round(val)} kg`, padding.left - 10, y + 4);
  }

  // Draw Target Weight Reference Line (Dashed Orange)
  if (target && target >= minWeight && target <= maxWeight) {
    const targetY = getY(target);
    ctx.save();
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(padding.left, targetY);
    ctx.lineTo(padding.left + chartW, targetY);
    ctx.stroke();

    // Target label
    ctx.fillStyle = '#f97316';
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`Target: ${target} kg`, padding.left + chartW, targetY - 6);
    ctx.restore();
  }

  // Draw Gradient Fill under line
  const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
  gradient.addColorStop(0, 'rgba(13, 148, 136, 0.25)');
  gradient.addColorStop(1, 'rgba(13, 148, 136, 0.01)');

  ctx.beginPath();
  logs.forEach((log, i) => {
    const x = getX(i);
    const y = getY(log.weight);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(padding.left + chartW, padding.top + chartH);
  ctx.lineTo(padding.left, padding.top + chartH);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Draw Main Line (Teal)
  ctx.beginPath();
  logs.forEach((log, i) => {
    const x = getX(i);
    const y = getY(log.weight);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#0d9488';
  ctx.lineWidth = 3;
  ctx.lineJoin = 'round';
  ctx.stroke();

  // Draw Data Points & Value Tooltips
  logs.forEach((log, i) => {
    const x = getX(i);
    const y = getY(log.weight);

    // Outer circle
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#0d9488';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Value badge above point
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${log.weight}`, x, y - 10);

    // X-Axis Date label
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Inter, sans-serif';
    // Format date for label
    const dateParts = log.date.split('-');
    const shortDate = dateParts.length === 3 ? `${dateParts[1]}/${dateParts[2]}` : log.date;
    ctx.fillText(shortDate, x, padding.top + chartH + 20);
  });
}
