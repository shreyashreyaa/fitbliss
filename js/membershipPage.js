/**
 * FitBliss - Membership Page Script (js/membershipPage.js)
 * 
 * - Handles plan selection & modal form
 * - Validates inputs via validation.js
 * - Persists enquiries in localStorage via storage.js
 * - Displays success feedback and recent enquiries list
 */

import { validateMembershipForm } from './validation.js';
import { saveMembershipEnquiry, getMembershipEnquiries } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  initMembershipModal();
  renderPastEnquiries();
});

function initMembershipModal() {
  const modal = document.getElementById('membershipModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const planSelectInput = document.getElementById('enquiryPlan');
  const form = document.getElementById('membershipForm');
  const successAlert = document.getElementById('membershipSuccessAlert');
  const formFieldsWrapper = document.getElementById('formFieldsWrapper');

  // Open modal from any "Join Now" button
  const joinBtns = document.querySelectorAll('[data-join-plan]');
  joinBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.getAttribute('data-join-plan');
      if (planSelectInput && plan) {
        planSelectInput.value = plan;
      }
      openModal();
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  // Close on backdrop click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  function openModal() {
    if (!modal) return;
    // Reset form state
    if (form) form.reset();
    clearModalErrors();
    if (successAlert) successAlert.style.display = 'none';
    if (formFieldsWrapper) formFieldsWrapper.style.display = 'block';

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Handle Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = {
        name: document.getElementById('enquiryName').value.trim(),
        email: document.getElementById('enquiryEmail').value.trim(),
        phone: document.getElementById('enquiryPhone').value.trim(),
        plan: document.getElementById('enquiryPlan').value,
      };

      clearModalErrors();

      const validation = validateMembershipForm(data);
      if (!validation.isValid) {
        displayModalErrors(validation.errors);
        return;
      }

      // Save to storage
      saveMembershipEnquiry(data);

      // Show success
      if (formFieldsWrapper) formFieldsWrapper.style.display = 'none';
      if (successAlert) {
        successAlert.style.display = 'block';
        const msgName = document.getElementById('enquirySuccessName');
        if (msgName) msgName.textContent = data.name;
      }

      renderPastEnquiries();
    });
  }
}

function clearModalErrors() {
  document.querySelectorAll('.modal-error').forEach(el => {
    el.textContent = '';
    el.classList.remove('is-visible');
  });
  document.querySelectorAll('.modal-control').forEach(el => {
    el.classList.remove('is-invalid');
  });
}

function displayModalErrors(errors) {
  for (const [field, msg] of Object.entries(errors)) {
    const errorEl = document.getElementById(`modal_error_${field}`);
    const inputEl = document.getElementById(`enquiry${capitalize(field)}`);
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.add('is-visible');
    }
    if (inputEl) {
      inputEl.classList.add('is-invalid');
    }
  }
}

function renderPastEnquiries() {
  const container = document.getElementById('pastEnquiriesList');
  const section = document.getElementById('pastEnquiriesSection');
  if (!container || !section) return;

  const enquiries = getMembershipEnquiries();
  if (enquiries.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  container.replaceChildren();

  enquiries.slice(-5).reverse().forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.padding = '1rem 1.25rem';
    card.style.marginBottom = '0.75rem';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';

    const name = document.createElement('strong');
    name.textContent = item.name;

    const planBadge = document.createElement('span');
    planBadge.className = 'badge badge-teal';
    planBadge.textContent = `${item.plan.toUpperCase()} PLAN`;

    header.appendChild(name);
    header.appendChild(planBadge);

    const details = document.createElement('p');
    details.style.fontSize = '0.85rem';
    details.style.color = '#64748b';
    details.style.margin = '0.35rem 0 0 0';
    details.textContent = `Enquiry sent on ${new Date(item.timestamp).toLocaleDateString()} | Phone: ${item.phone}`;

    card.appendChild(header);
    card.appendChild(details);
    container.appendChild(card);
  });
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
