/**
 * FitBliss - Workouts & Exercise Library (js/workouts.js)
 * 
 * - Goal-based 7-day weekly plans (Weight Loss, Muscle Gain, General Fitness)
 * - Auto-detects user preference from saved profile
 * - 32+ Exercise Library with instant search and multi-facet filtering
 */

import { WORKOUT_PLANS } from '../data/workoutsData.js';
import { EXERCISE_LIBRARY } from '../data/exercises.js';
import { getUserProfile, getCalculatorResults, saveWorkoutPreference, getWorkoutPreference } from './storage.js';

let currentGoal = 'weight_loss';
let currentLevel = 'beginner';

// Search and filter state
let currentSearch = '';
let currentMuscleFilter = 'all';
let currentEquipmentFilter = 'all';
let currentDifficultyFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initPlanSelectors();
  initExerciseLibrary();
});

/**
 * Initializes goal and level selectors, auto-loading from saved profile
 */
function initPlanSelectors() {
  const goalTabs = document.querySelectorAll('[data-plan-goal]');
  const levelTabs = document.querySelectorAll('[data-plan-level]');
  const autoGoalBadge = document.getElementById('autoGoalBadge');

  // Check saved preferences or calculator profile
  const savedPref = getWorkoutPreference();
  const savedProfile = getUserProfile() || getCalculatorResults()?.inputs;

  if (savedPref?.goal) {
    currentGoal = savedPref.goal;
    currentLevel = savedPref.level || 'beginner';
  } else if (savedProfile?.goal) {
    currentGoal = savedProfile.goal;
    if (autoGoalBadge) {
      autoGoalBadge.style.display = 'inline-flex';
      const goalName = currentGoal.replace('_', ' ').toUpperCase();
      autoGoalBadge.textContent = `Auto-selected for your goal: ${goalName}`;
    }
  }

  // Update active tab buttons
  updateActiveTabUI(goalTabs, 'data-plan-goal', currentGoal);
  updateActiveTabUI(levelTabs, 'data-plan-level', currentLevel);

  // Goal Tab Click Handlers
  goalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      currentGoal = tab.getAttribute('data-plan-goal');
      updateActiveTabUI(goalTabs, 'data-plan-goal', currentGoal);
      saveWorkoutPreference({ goal: currentGoal, level: currentLevel });
      renderWeeklyPlan();
    });
  });

  // Level Tab Click Handlers
  levelTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      currentLevel = tab.getAttribute('data-plan-level');
      updateActiveTabUI(levelTabs, 'data-plan-level', currentLevel);
      saveWorkoutPreference({ goal: currentGoal, level: currentLevel });
      renderWeeklyPlan();
    });
  });

  // Initial render
  renderWeeklyPlan();
}

function updateActiveTabUI(tabElements, attributeName, activeValue) {
  tabElements.forEach(tab => {
    if (tab.getAttribute(attributeName) === activeValue) {
      tab.classList.add('is-active');
    } else {
      tab.classList.remove('is-active');
    }
  });
}

/**
 * Renders the 7-day schedule grid
 */
function renderWeeklyPlan() {
  const planContainer = document.getElementById('weeklyPlanGrid');
  const planTitleEl = document.getElementById('planTitle');
  const planDescEl = document.getElementById('planDescription');

  if (!planContainer) return;

  const planData = WORKOUT_PLANS[currentGoal]?.[currentLevel];
  if (!planData) {
    planContainer.innerHTML = '<p class="empty-state-desc">Plan not found.</p>';
    return;
  }

  if (planTitleEl) planTitleEl.textContent = planData.title;
  if (planDescEl) planDescEl.textContent = planData.description;

  // Clear existing cards
  planContainer.replaceChildren();

  planData.schedule.forEach(day => {
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';

    // Header
    const cardHeader = document.createElement('div');
    cardHeader.className = 'day-card-header';

    const dayTitle = document.createElement('span');
    dayTitle.className = 'day-title';
    dayTitle.textContent = `${day.day} (${day.name})`;

    const durationBadge = document.createElement('span');
    durationBadge.className = 'badge badge-neutral';
    durationBadge.textContent = day.duration;

    cardHeader.appendChild(dayTitle);
    cardHeader.appendChild(durationBadge);

    // Focus
    const focusEl = document.createElement('div');
    focusEl.className = 'day-card-focus';
    focusEl.textContent = `Focus: ${day.focus}`;

    // Exercise list
    const list = document.createElement('ul');
    list.className = 'day-exercise-list';

    day.exercises.forEach(ex => {
      const item = document.createElement('li');
      item.className = 'day-exercise-item';

      const name = document.createElement('div');
      name.className = 'name';
      name.textContent = ex.name;

      const meta = document.createElement('div');
      meta.className = 'meta';

      const setsReps = document.createElement('span');
      setsReps.textContent = ex.setsReps;

      const restTime = document.createElement('span');
      restTime.textContent = ex.rest !== '—' ? `Rest: ${ex.rest}` : '';

      meta.appendChild(setsReps);
      if (ex.rest !== '—') meta.appendChild(restTime);

      item.appendChild(name);
      item.appendChild(meta);
      list.appendChild(item);
    });

    dayCard.appendChild(cardHeader);
    dayCard.appendChild(focusEl);
    dayCard.appendChild(list);

    planContainer.appendChild(dayCard);
  });
}

/**
 * Initializes exercise library search and filter facets
 */
function initExerciseLibrary() {
  const searchInput = document.getElementById('exerciseSearchInput');
  const musclePills = document.querySelectorAll('[data-filter-muscle]');
  const equipmentPills = document.querySelectorAll('[data-filter-equipment]');
  const difficultyPills = document.querySelectorAll('[data-filter-difficulty]');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderExerciseLibrary();
    });
  }

  // Muscle filter
  musclePills.forEach(pill => {
    pill.addEventListener('click', () => {
      currentMuscleFilter = pill.getAttribute('data-filter-muscle');
      updateActiveTabUI(musclePills, 'data-filter-muscle', currentMuscleFilter);
      renderExerciseLibrary();
    });
  });

  // Equipment filter
  equipmentPills.forEach(pill => {
    pill.addEventListener('click', () => {
      currentEquipmentFilter = pill.getAttribute('data-filter-equipment');
      updateActiveTabUI(equipmentPills, 'data-filter-equipment', currentEquipmentFilter);
      renderExerciseLibrary();
    });
  });

  // Difficulty filter
  difficultyPills.forEach(pill => {
    pill.addEventListener('click', () => {
      currentDifficultyFilter = pill.getAttribute('data-filter-difficulty');
      updateActiveTabUI(difficultyPills, 'data-filter-difficulty', currentDifficultyFilter);
      renderExerciseLibrary();
    });
  });

  // Initial render
  renderExerciseLibrary();
}

/**
 * Filter and render exercise cards
 */
function renderExerciseLibrary() {
  const container = document.getElementById('exerciseGridContainer');
  const countEl = document.getElementById('exerciseCountDisplay');
  const emptyStateEl = document.getElementById('exerciseEmptyState');

  if (!container) return;

  const filtered = EXERCISE_LIBRARY.filter(ex => {
    // Search match (name or instructions or category)
    const matchesSearch = !currentSearch ||
      ex.name.toLowerCase().includes(currentSearch) ||
      ex.targetMuscle.toLowerCase().includes(currentSearch) ||
      ex.instructions.toLowerCase().includes(currentSearch);

    // Muscle match
    const matchesMuscle = currentMuscleFilter === 'all' || ex.targetMuscle === currentMuscleFilter;

    // Equipment match
    const matchesEquipment = currentEquipmentFilter === 'all' || ex.equipment === currentEquipmentFilter;

    // Difficulty match
    const matchesDifficulty = currentDifficultyFilter === 'all' || ex.difficulty === currentDifficultyFilter;

    return matchesSearch && matchesMuscle && matchesEquipment && matchesDifficulty;
  });

  // Update counter
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${EXERCISE_LIBRARY.length} exercises`;
  }

  // Clear container
  container.replaceChildren();

  if (filtered.length === 0) {
    if (emptyStateEl) emptyStateEl.style.display = 'block';
    return;
  }

  if (emptyStateEl) emptyStateEl.style.display = 'none';

  filtered.forEach(ex => {
    const card = document.createElement('div');
    card.className = 'exercise-card';

    // Header
    const header = document.createElement('div');
    header.className = 'exercise-card-header';

    const title = document.createElement('h4');
    title.textContent = ex.name;

    const diffBadge = document.createElement('span');
    diffBadge.className = `badge ${getDifficultyBadgeClass(ex.difficulty)}`;
    diffBadge.textContent = ex.difficulty;

    header.appendChild(title);
    header.appendChild(diffBadge);

    // Tags
    const tagsWrapper = document.createElement('div');
    tagsWrapper.className = 'exercise-tags';

    const muscleTag = document.createElement('span');
    muscleTag.className = 'badge badge-teal';
    muscleTag.textContent = capitalize(ex.targetMuscle);

    const equipTag = document.createElement('span');
    equipTag.className = 'badge badge-neutral';
    equipTag.textContent = capitalize(ex.equipment);

    tagsWrapper.appendChild(muscleTag);
    tagsWrapper.appendChild(equipTag);

    // Instructions
    const instructions = document.createElement('p');
    instructions.className = 'exercise-instructions';
    instructions.textContent = ex.instructions;

    // Pro tip
    const tip = document.createElement('div');
    tip.className = 'exercise-tip';
    tip.textContent = `Coach Tip: ${ex.tips}`;

    card.appendChild(header);
    card.appendChild(tagsWrapper);
    card.appendChild(instructions);
    card.appendChild(tip);

    container.appendChild(card);
  });
}

function getDifficultyBadgeClass(difficulty) {
  switch (difficulty) {
    case 'beginner': return 'badge-success';
    case 'intermediate': return 'badge-warning';
    case 'advanced': return 'badge-danger';
    default: return 'badge-neutral';
  }
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
