/**
 * FitBliss - Validation Module (js/validation.js)
 * 
 * Provides pure validation utilities for all user forms
 * with user-friendly error messages and edge-case protection.
 */

/**
 * Validates a health profile input set.
 * @param {Object} data 
 * @returns {{ isValid: boolean, errors: Object }}
 */
export function validateCalculatorForm(data) {
  const errors = {};

  // Age validation
  const age = Number(data.age);
  if (!data.age || isNaN(age)) {
    errors.age = 'Please enter your age.';
  } else if (age < 12 || age > 110) {
    errors.age = 'Age must be between 12 and 110 years.';
  }

  // Gender validation
  if (!data.gender || !['male', 'female'].includes(data.gender.toLowerCase())) {
    errors.gender = 'Please select a gender.';
  }

  // Height validation (cm)
  const height = Number(data.height);
  if (!data.height || isNaN(height)) {
    errors.height = 'Please enter your height in centimeters.';
  } else if (height < 90 || height > 250) {
    errors.height = 'Height must be between 90 cm and 250 cm.';
  }

  // Weight validation (kg)
  const weight = Number(data.weight);
  if (!data.weight || isNaN(weight)) {
    errors.weight = 'Please enter your weight in kilograms.';
  } else if (weight < 25 || weight > 350) {
    errors.weight = 'Weight must be between 25 kg and 350 kg.';
  }

  // Activity Level validation
  const allowedActivity = ['sedentary', 'light', 'moderate', 'very', 'extra'];
  if (!data.activityLevel || !allowedActivity.includes(data.activityLevel)) {
    errors.activityLevel = 'Please select an activity level.';
  }

  // Goal validation
  const allowedGoals = ['weight_loss', 'maintenance', 'muscle_gain'];
  if (!data.goal || !allowedGoals.includes(data.goal)) {
    errors.goal = 'Please select your fitness goal.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates general text fields (name, message, etc.)
 */
export function validateRequiredText(value, fieldName = 'This field', minLength = 2) {
  if (!value || typeof value !== 'string' || value.trim().length === 0) {
    return `${fieldName} is required.`;
  }
  if (value.trim().length < minLength) {
    return `${fieldName} must be at least ${minLength} characters long.`;
  }
  return null;
}

/**
 * Validates email addresses
 */
export function validateEmail(email) {
  if (!email || typeof email !== 'string' || email.trim().length === 0) {
    return 'Email address is required.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address (e.g. name@example.com).';
  }
  return null;
}

/**
 * Validates telephone numbers
 */
export function validatePhone(phone) {
  if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
    return 'Phone number is required.';
  }
  // Remove non-digit characters
  const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
  if (cleanPhone.length < 10 || cleanPhone.length > 15 || isNaN(Number(cleanPhone))) {
    return 'Please enter a valid 10-digit phone number.';
  }
  return null;
}

/**
 * Validates progress tracker entry
 */
export function validateProgressEntry(data) {
  const errors = {};

  if (!data.date) {
    errors.date = 'Please select a date.';
  } else {
    const selectedDate = new Date(data.date);
    const today = new Date();
    // Allow up to today (or tomorrow for timezone safety)
    today.setDate(today.getDate() + 1);
    if (isNaN(selectedDate.getTime())) {
      errors.date = 'Invalid date format.';
    } else if (selectedDate > today) {
      errors.date = 'Cannot log progress for future dates.';
    }
  }

  const weight = Number(data.weight);
  if (!data.weight || isNaN(weight)) {
    errors.weight = 'Please enter your current weight.';
  } else if (weight < 25 || weight > 350) {
    errors.weight = 'Weight must be between 25 kg and 350 kg.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates membership enquiry form
 */
export function validateMembershipForm(data) {
  const errors = {};

  const nameError = validateRequiredText(data.name, 'Full name', 2);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  if (!data.plan || !['basic', 'standard', 'premium'].includes(data.plan.toLowerCase())) {
    errors.plan = 'Please select a valid membership plan.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates contact form
 */
export function validateContactForm(data) {
  const errors = {};

  const nameError = validateRequiredText(data.name, 'Your name', 2);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  const messageError = validateRequiredText(data.message, 'Your message', 10);
  if (messageError) errors.message = messageError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
