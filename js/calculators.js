/**
 * FitBliss - Health & Fitness Calculators (js/calculators.js)
 * 
 * Pure JavaScript calculation functions and DOM controller for calculators.html.
 * Formulas:
 * - BMI = weight / (height in m)^2
 * - BMR (Mifflin-St Jeor):
 *     Men = 10*weight + 6.25*height - 5*age + 5
 *     Women = 10*weight + 6.25*height - 5*age - 161
 * - TDEE = BMR * Activity Multiplier
 * - Calorie target:
 *     weight loss = TDEE - 500
 *     maintenance = TDEE
 *     muscle gain = TDEE + 300
 * - Macro split:
 *     weight loss: 30% P / 40% C / 30% F
 *     maintenance: 25% P / 50% C / 25% F
 *     muscle gain: 30% P / 45% C / 25% F
 */

import { saveCalculatorResults, getCalculatorResults, saveUserProfile, getUserProfile } from './storage.js';
import { validateCalculatorForm } from './validation.js';

/**
 * Activity level multipliers
 */
export const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2,       // Sedentary (office job, little exercise)
  light: 1.375,         // Lightly active (light exercise 1-3 days/week)
  moderate: 1.55,       // Moderately active (moderate exercise 3-5 days/week)
  very: 1.725,          // Very active (heavy exercise 6-7 days/week)
  extra: 1.9,           // Extra active (strenuous physical job / 2x daily training)
};

/**
 * Calorie adjustments relative to TDEE
 */
export const GOAL_CALORIE_ADJUSTMENTS = {
  weight_loss: -500,
  maintenance: 0,
  muscle_gain: 300,
};

/**
 * Macronutrient split percentages by goal
 */
export const GOAL_MACRO_SPLITS = {
  weight_loss: { protein: 0.30, carbs: 0.40, fat: 0.30 },
  maintenance: { protein: 0.25, carbs: 0.50, fat: 0.25 },
  muscle_gain: { protein: 0.30, carbs: 0.45, fat: 0.25 },
};

/**
 * Calculate Body Mass Index (BMI).
 * Formula: weight (kg) / (height in meters)^2
 * @param {number} weightInKg 
 * @param {number} heightInCm 
 */
export function calculateBMI(weightInKg, heightInCm) {
  const heightInMeters = heightInCm / 100;
  const bmiRaw = weightInKg / (heightInMeters * heightInMeters);
  const value = Math.round(bmiRaw * 10) / 10;

  let category = '';
  let classKey = '';
  let description = '';

  if (value < 18.5) {
    category = 'Underweight';
    classKey = 'bmi-underweight';
    description = 'Your BMI indicates you may be underweight. A healthy calorie surplus with progressive strength training can build lean mass.';
  } else if (value <= 24.9) {
    category = 'Normal';
    classKey = 'bmi-normal';
    description = 'Your BMI is in the healthy optimal range. Keep up your balanced physical activity and nutritious whole foods.';
  } else if (value <= 29.9) {
    category = 'Overweight';
    classKey = 'bmi-overweight';
    description = 'Your BMI indicates overweight. A structured moderate deficit coupled with resistance workouts will support fat loss.';
  } else {
    category = 'Obese';
    classKey = 'bmi-obese';
    description = 'Your BMI is in the obese range. We advise consulting a certified healthcare professional for a medically supervised plan.';
  }

  return { value, category, classKey, description };
}

/**
 * Calculate Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation.
 * Men: 10 * weight(kg) + 6.25 * height(cm) - 5 * age + 5
 * Women: 10 * weight(kg) + 6.25 * height(cm) - 5 * age - 161
 */
export function calculateBMR(weightInKg, heightInCm, age, gender) {
  const base = 10 * weightInKg + 6.25 * heightInCm - 5 * age;
  if (gender.toLowerCase() === 'female') {
    return base - 161;
  }
  return base + 5;
}

/**
 * Calculate Total Daily Energy Expenditure (TDEE).
 */
export function calculateTDEE(bmr, activityLevel) {
  const multiplier = ACTIVITY_MULTIPLIERS[activityLevel] || 1.2;
  return bmr * multiplier;
}

/**
 * Calculate Daily Calorie Target based on fitness goal.
 */
export function calculateCalorieTarget(tdee, goal) {
  const adjustment = GOAL_CALORIE_ADJUSTMENTS[goal] || 0;
  const target = tdee + adjustment;
  return Math.max(1200, target);
}

/**
 * Calculate macronutrient breakdown in grams and calories.
 */
export function calculateMacros(calorieTarget, goal) {
  const split = GOAL_MACRO_SPLITS[goal] || GOAL_MACRO_SPLITS.maintenance;

  const proteinCals = calorieTarget * split.protein;
  const carbsCals = calorieTarget * split.carbs;
  const fatCals = calorieTarget * split.fat;

  return {
    protein: {
      grams: Math.round(proteinCals / 4),
      calories: Math.round(proteinCals),
      percent: Math.round(split.protein * 100),
    },
    carbs: {
      grams: Math.round(carbsCals / 4),
      calories: Math.round(carbsCals),
      percent: Math.round(split.carbs * 100),
    },
    fat: {
      grams: Math.round(fatCals / 9),
      calories: Math.round(fatCals),
      percent: Math.round(split.fat * 100),
    },
  };
}

/**
 * Compute all fitness metrics from inputs.
 */
export function computeFitnessProfile(inputs) {
  const age = Number(inputs.age);
  const height = Number(inputs.height);
  const weight = Number(inputs.weight);
  const gender = inputs.gender;
  const activityLevel = inputs.activityLevel;
  const goal = inputs.goal;

  const bmi = calculateBMI(weight, height);
  const bmrExact = calculateBMR(weight, height, age, gender);
  const tdeeExact = calculateTDEE(bmrExact, activityLevel);
  const targetCalsExact = calculateCalorieTarget(tdeeExact, goal);
  const macros = calculateMacros(targetCalsExact, goal);

  return {
    inputs: { age, gender, height, weight, activityLevel, goal },
    bmi,
    bmr: Math.round(bmrExact),
    tdee: Math.round(tdeeExact),
    targetCalories: Math.round(targetCalsExact),
    macros,
    timestamp: new Date().toISOString(),
  };
}

// ==========================================
// DOM Controller for calculators.html
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  const calcForm = document.getElementById('calcForm');
  if (!calcForm) return;

  const resultsPlaceholder = document.getElementById('resultsPlaceholder');
  const resultsContent = document.getElementById('resultsContent');

  // Load saved profile if available
  const savedProfile = getUserProfile();
  if (savedProfile) {
    populateForm(savedProfile);
  }

  // Load saved results if available
  const savedResults = getCalculatorResults();
  if (savedResults) {
    renderResults(savedResults);
  }

  // Handle Form Submission
  calcForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
      age: document.getElementById('calcAge').value.trim(),
      gender: getSelectedRadioValue('calcGender'),
      height: document.getElementById('calcHeight').value.trim(),
      weight: document.getElementById('calcWeight').value.trim(),
      activityLevel: document.getElementById('calcActivity').value,
      goal: document.getElementById('calcGoal').value,
    };

    // Clear previous inline errors
    clearFormErrors();

    // Validate
    const validation = validateCalculatorForm(formData);
    if (!validation.isValid) {
      displayFormErrors(validation.errors);
      return;
    }

    // Compute profile
    const results = computeFitnessProfile(formData);

    // Save to storage.js
    saveUserProfile(formData);
    saveCalculatorResults(results);

    // Render results
    renderResults(results);

    // Scroll smoothly to results on mobile devices
    if (window.innerWidth <= 992 && resultsContent) {
      resultsContent.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Reset button
  const resetBtn = document.getElementById('calcResetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      calcForm.reset();
      clearFormErrors();
      if (resultsPlaceholder && resultsContent) {
        resultsPlaceholder.style.display = 'block';
        resultsContent.style.display = 'none';
      }
    });
  }
});

function getSelectedRadioValue(name) {
  const radio = document.querySelector(`input[name="${name}"]:checked`);
  return radio ? radio.value : '';
}

function clearFormErrors() {
  document.querySelectorAll('.form-error').forEach(el => {
    el.textContent = '';
    el.classList.remove('is-visible');
  });
  document.querySelectorAll('.form-control').forEach(el => {
    el.classList.remove('is-invalid');
  });
}

function displayFormErrors(errors) {
  for (const [field, msg] of Object.entries(errors)) {
    const errorEl = document.getElementById(`error_${field}`);
    const inputEl = document.getElementById(`calc${field.charAt(0).toUpperCase() + field.slice(1)}`);
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.add('is-visible');
    }
    if (inputEl) {
      inputEl.classList.add('is-invalid');
    }
  }
}

function populateForm(profile) {
  if (profile.age) document.getElementById('calcAge').value = profile.age;
  if (profile.height) document.getElementById('calcHeight').value = profile.height;
  if (profile.weight) document.getElementById('calcWeight').value = profile.weight;
  if (profile.activityLevel) document.getElementById('calcActivity').value = profile.activityLevel;
  if (profile.goal) document.getElementById('calcGoal').value = profile.goal;

  if (profile.gender) {
    const genderRadio = document.querySelector(`input[name="calcGender"][value="${profile.gender}"]`);
    if (genderRadio) genderRadio.checked = true;
  }
}

function renderResults(results) {
  const placeholder = document.getElementById('resultsPlaceholder');
  const container = document.getElementById('resultsContent');
  if (!container) return;

  if (placeholder) placeholder.style.display = 'none';
  container.style.display = 'block';

  // Safely insert text with textContent
  const bmiValueEl = document.getElementById('resBmiValue');
  const bmiCategoryEl = document.getElementById('resBmiCategory');
  const bmiDescEl = document.getElementById('resBmiDesc');
  const bmrValueEl = document.getElementById('resBmrValue');
  const tdeeValueEl = document.getElementById('resTdeeValue');
  const targetCalsEl = document.getElementById('resTargetCals');

  const proteinGramsEl = document.getElementById('resProteinGrams');
  const proteinCalsEl = document.getElementById('resProteinCals');
  const proteinBarEl = document.getElementById('resProteinBar');

  const carbsGramsEl = document.getElementById('resCarbsGrams');
  const carbsCalsEl = document.getElementById('resCarbsCals');
  const carbsBarEl = document.getElementById('resCarbsBar');

  const fatGramsEl = document.getElementById('resFatGrams');
  const fatCalsEl = document.getElementById('resFatCals');
  const fatBarEl = document.getElementById('resFatBar');

  if (bmiValueEl) bmiValueEl.textContent = results.bmi.value.toString();
  if (bmiCategoryEl) {
    bmiCategoryEl.textContent = results.bmi.category;
    bmiCategoryEl.className = `badge ${results.bmi.classKey}`;
  }
  if (bmiDescEl) bmiDescEl.textContent = results.bmi.description;
  if (bmrValueEl) bmrValueEl.textContent = results.bmr.toLocaleString();
  if (tdeeValueEl) tdeeValueEl.textContent = results.tdee.toLocaleString();
  if (targetCalsEl) targetCalsEl.textContent = results.targetCalories.toLocaleString();

  // Macros
  if (proteinGramsEl) proteinGramsEl.textContent = `${results.macros.protein.grams} g (${results.macros.protein.percent}%)`;
  if (proteinCalsEl) proteinCalsEl.textContent = `${results.macros.protein.calories} kcal`;
  if (proteinBarEl) proteinBarEl.style.width = `${results.macros.protein.percent}%`;

  if (carbsGramsEl) carbsGramsEl.textContent = `${results.macros.carbs.grams} g (${results.macros.carbs.percent}%)`;
  if (carbsCalsEl) carbsCalsEl.textContent = `${results.macros.carbs.calories} kcal`;
  if (carbsBarEl) carbsBarEl.style.width = `${results.macros.carbs.percent}%`;

  if (fatGramsEl) fatGramsEl.textContent = `${results.macros.fat.grams} g (${results.macros.fat.percent}%)`;
  if (fatCalsEl) fatCalsEl.textContent = `${results.macros.fat.calories} kcal`;
  if (fatBarEl) fatBarEl.style.width = `${results.macros.fat.percent}%`;
}
