/**
 * FitBliss - Contact Page Script (js/contactPage.js)
 * 
 * - Handles contact enquiry submission
 * - Inline form validation
 * - Saves message to localStorage via storage.js
 * - Displays success feedback
 */

import { validateContactForm } from './validation.js';
import { saveContactMessage } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successAlert = document.getElementById('contactSuccessAlert');
  const successNameEl = document.getElementById('contactSuccessName');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById('contactName').value.trim(),
      email: document.getElementById('contactEmail').value.trim(),
      phone: document.getElementById('contactPhone').value.trim(),
      message: document.getElementById('contactMessage').value.trim(),
    };

    clearContactErrors();

    const validation = validateContactForm(data);
    if (!validation.isValid) {
      displayContactErrors(validation.errors);
      return;
    }

    // Save message in localStorage
    saveContactMessage(data);

    // Reset form
    form.reset();

    // Show success feedback
    if (successAlert) {
      if (successNameEl) successNameEl.textContent = data.name;
      successAlert.style.display = 'flex';
      successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});

function clearContactErrors() {
  document.querySelectorAll('.form-error').forEach(el => {
    el.textContent = '';
    el.classList.remove('is-visible');
  });
  document.querySelectorAll('.form-control').forEach(el => {
    el.classList.remove('is-invalid');
  });
}

function displayContactErrors(errors) {
  for (const [field, msg] of Object.entries(errors)) {
    const errorEl = document.getElementById(`error_contact_${field}`);
    const inputEl = document.getElementById(`contact${capitalize(field)}`);
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.add('is-visible');
    }
    if (inputEl) {
      inputEl.classList.add('is-invalid');
    }
  }
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
