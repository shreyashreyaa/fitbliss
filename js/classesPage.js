/**
 * FitBliss - Classes & Timetable Page Script (js/classesPage.js)
 * 
 * Interactivity for class filter tabs (Yoga, Zumba, HIIT, Strength, Meditation)
 * and trainer profile cards.
 */

import { TIMETABLE, TRAINERS } from '../data/classesData.js';

let currentDay = 'Monday';
let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  renderTrainers();
  initTimetableFilters();
  renderTimetable();
});

function renderTrainers() {
  const container = document.getElementById('trainersGridContainer');
  if (!container) return;

  container.replaceChildren();

  TRAINERS.forEach(trainer => {
    const card = document.createElement('div');
    card.className = 'trainer-card';

    const photoWrap = document.createElement('div');
    photoWrap.className = 'trainer-photo-wrap';

    const img = document.createElement('img');
    img.src = trainer.image;
    img.alt = `Portrait of trainer ${trainer.name}`;
    img.loading = 'lazy';
    photoWrap.appendChild(img);

    const body = document.createElement('div');
    body.className = 'trainer-body';

    const name = document.createElement('h3');
    name.className = 'trainer-name';
    name.textContent = trainer.name;

    const role = document.createElement('span');
    role.className = 'trainer-role';
    role.textContent = trainer.role;

    const bio = document.createElement('p');
    bio.className = 'trainer-bio';
    bio.textContent = trainer.bio;

    const meta = document.createElement('div');
    meta.className = 'trainer-meta';

    const cert = document.createElement('div');
    cert.innerHTML = `<strong>Cert:</strong> ${trainer.certifications}`;

    const exp = document.createElement('div');
    exp.innerHTML = `<strong>Exp:</strong> ${trainer.experience}`;

    meta.appendChild(cert);
    meta.appendChild(exp);

    body.appendChild(name);
    body.appendChild(role);
    body.appendChild(bio);
    body.appendChild(meta);

    card.appendChild(photoWrap);
    card.appendChild(body);

    container.appendChild(card);
  });
}

function initTimetableFilters() {
  const dayTabs = document.querySelectorAll('[data-timetable-day]');
  const catTabs = document.querySelectorAll('[data-timetable-category]');

  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      currentDay = tab.getAttribute('data-timetable-day');
      dayTabs.forEach(t => t.classList.toggle('is-active', t === tab));
      renderTimetable();
    });
  });

  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      currentCategory = tab.getAttribute('data-timetable-category');
      catTabs.forEach(t => t.classList.toggle('is-active', t === tab));
      renderTimetable();
    });
  });
}

function renderTimetable() {
  const tbody = document.getElementById('timetableBody');
  const emptyState = document.getElementById('timetableEmptyState');
  if (!tbody) return;

  tbody.replaceChildren();

  const daySchedule = TIMETABLE.find(d => d.day.toLowerCase() === currentDay.toLowerCase());
  if (!daySchedule) return;

  const filteredSlots = daySchedule.slots.filter(slot => {
    return currentCategory === 'all' || slot.category.toLowerCase() === currentCategory.toLowerCase();
  });

  if (filteredSlots.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  filteredSlots.forEach(slot => {
    const tr = document.createElement('tr');

    const tdTime = document.createElement('td');
    tdTime.innerHTML = `<strong>${slot.time}</strong>`;

    const tdClass = document.createElement('td');
    const classSpan = document.createElement('span');
    classSpan.style.fontWeight = '600';
    classSpan.textContent = slot.className;
    tdClass.appendChild(classSpan);

    const tdCategory = document.createElement('td');
    const catBadge = document.createElement('span');
    catBadge.className = `badge ${getCategoryBadgeClass(slot.category)}`;
    catBadge.textContent = slot.category.toUpperCase();
    tdCategory.appendChild(catBadge);

    const tdTrainer = document.createElement('td');
    tdTrainer.textContent = slot.trainer;

    const tdRoom = document.createElement('td');
    tdRoom.textContent = slot.room;

    const tdAction = document.createElement('td');
    const bookBtn = document.createElement('a');
    bookBtn.href = 'membership.html';
    bookBtn.className = 'btn btn-sm btn-outline';
    bookBtn.textContent = 'Reserve Spot';
    tdAction.appendChild(bookBtn);

    tr.appendChild(tdTime);
    tr.appendChild(tdClass);
    tr.appendChild(tdCategory);
    tr.appendChild(tdTrainer);
    tr.appendChild(tdRoom);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);
  });
}

function getCategoryBadgeClass(cat) {
  switch (cat.toLowerCase()) {
    case 'yoga': return 'badge-teal';
    case 'hiit': return 'badge-orange';
    case 'zumba': return 'badge-warning';
    case 'strength': return 'badge-danger';
    case 'meditation': return 'badge-neutral';
    default: return 'badge-teal';
  }
}
