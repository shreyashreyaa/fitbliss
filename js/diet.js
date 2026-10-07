/**
 * FitBliss - Diet & Nutrition Module (js/diet.js)
 * 
 * - Indian meal plans (1500, 1800, 2100, 2400 kcal)
 * - Auto-matches nearest tier to user's calculated target calories
 * - Renders 4 structured meals per day with calories, protein, and full macro totals
 */

import { DIET_PLANS, findNearestCalorieTier } from '../data/diets.js';
import { getCalculatorResults } from './storage.js';

let currentTier = 1800;
let currentDietType = 'vegetarian';

document.addEventListener('DOMContentLoaded', () => {
  initDietPreferences();
});

function initDietPreferences() {
  const tierBtns = document.querySelectorAll('[data-diet-tier]');
  const typeTabs = document.querySelectorAll('[data-diet-type]');
  const autoMatchBanner = document.getElementById('dietAutoMatchBanner');
  const targetCalDisplay = document.getElementById('targetCalDisplay');

  // Check saved calculator results
  const calcResults = getCalculatorResults();
  if (calcResults && calcResults.targetCalories) {
    const matchedTier = findNearestCalorieTier(calcResults.targetCalories);
    currentTier = matchedTier;

    if (autoMatchBanner && targetCalDisplay) {
      targetCalDisplay.textContent = `${calcResults.targetCalories.toLocaleString()} kcal`;
      autoMatchBanner.style.display = 'flex';
    }
  }

  // Update button active state
  updateActiveTierButtons(tierBtns);
  updateActiveTypeTabs(typeTabs);

  // Tier buttons click handler
  tierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentTier = Number(btn.getAttribute('data-diet-tier'));
      updateActiveTierButtons(tierBtns);
      renderDietPlan();
    });
  });

  // Diet type tabs click handler
  typeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      currentDietType = tab.getAttribute('data-diet-type');
      updateActiveTypeTabs(typeTabs);
      renderDietPlan();
    });
  });

  // Initial render
  renderDietPlan();
}

function updateActiveTierButtons(buttons) {
  buttons.forEach(btn => {
    const tier = Number(btn.getAttribute('data-diet-tier'));
    if (tier === currentTier) {
      btn.classList.add('is-active');
    } else {
      btn.classList.remove('is-active');
    }
  });
}

function updateActiveTypeTabs(tabs) {
  tabs.forEach(tab => {
    const type = tab.getAttribute('data-diet-type');
    if (type === currentDietType) {
      tab.classList.add('is-active');
    } else {
      tab.classList.remove('is-active');
    }
  });
}

/**
 * Render meals and macronutrient summary
 */
function renderDietPlan() {
  const tierData = DIET_PLANS[currentTier];
  if (!tierData) return;

  const plan = tierData[currentDietType];
  if (!plan) return;

  // Plan title & description
  const planTitleEl = document.getElementById('dietPlanTitle');
  const planDescEl = document.getElementById('dietPlanDesc');
  if (planTitleEl) planTitleEl.textContent = plan.title;
  if (planDescEl) planDescEl.textContent = tierData.description;

  // Totals
  const totalCalsEl = document.getElementById('dietTotalCals');
  const totalProteinEl = document.getElementById('dietTotalProtein');
  const totalCarbsEl = document.getElementById('dietTotalCarbs');
  const totalFatEl = document.getElementById('dietTotalFat');

  if (totalCalsEl) totalCalsEl.textContent = `${plan.totals.calories} kcal`;
  if (totalProteinEl) totalProteinEl.textContent = `${plan.totals.protein} g`;
  if (totalCarbsEl) totalCarbsEl.textContent = `${plan.totals.carbs} g`;
  if (totalFatEl) totalFatEl.textContent = `${plan.totals.fat} g`;

  // Macro progress bars
  const totalMacroGrams = plan.totals.protein + plan.totals.carbs + plan.totals.fat;
  const pBar = document.getElementById('dietProteinBar');
  const cBar = document.getElementById('dietCarbsBar');
  const fBar = document.getElementById('dietFatBar');

  if (pBar) pBar.style.width = `${Math.round((plan.totals.protein * 4 / plan.totals.calories) * 100)}%`;
  if (cBar) cBar.style.width = `${Math.round((plan.totals.carbs * 4 / plan.totals.calories) * 100)}%`;
  if (fBar) fBar.style.width = `${Math.round((plan.totals.fat * 9 / plan.totals.calories) * 100)}%`;

  // Render 4 Meals Grid
  const mealsContainer = document.getElementById('mealsGridContainer');
  if (!mealsContainer) return;

  mealsContainer.replaceChildren();

  plan.meals.forEach(meal => {
    const card = document.createElement('div');
    card.className = 'meal-card';

    // Header
    const header = document.createElement('div');
    header.className = 'meal-header';

    const titleGroup = document.createElement('div');
    const title = document.createElement('h4');
    title.textContent = meal.name;

    const timing = document.createElement('span');
    timing.className = 'meal-timing';
    timing.textContent = meal.timing;

    titleGroup.appendChild(title);
    titleGroup.appendChild(timing);

    const calBadge = document.createElement('span');
    calBadge.className = 'badge badge-teal';
    calBadge.textContent = `${meal.calories} kcal`;

    header.appendChild(titleGroup);
    header.appendChild(calBadge);

    // Macros row
    const macrosRow = document.createElement('div');
    macrosRow.className = 'meal-macros';

    const pBadge = document.createElement('span');
    pBadge.textContent = `Protein: ${meal.protein}g`;

    const cBadge = document.createElement('span');
    cBadge.textContent = `Carbs: ${meal.carbs}g`;

    const fBadge = document.createElement('span');
    fBadge.textContent = `Fat: ${meal.fat}g`;

    macrosRow.appendChild(pBadge);
    macrosRow.appendChild(cBadge);
    macrosRow.appendChild(fBadge);

    // Items list
    const itemsList = document.createElement('ul');
    itemsList.className = 'meal-items-list';

    meal.items.forEach(itemText => {
      const li = document.createElement('li');
      li.textContent = itemText;
      itemsList.appendChild(li);
    });

    card.appendChild(header);
    card.appendChild(macrosRow);
    card.appendChild(itemsList);

    mealsContainer.appendChild(card);
  });
}
