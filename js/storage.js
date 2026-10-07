/**
 * FitBliss - Storage Module (js/storage.js)
 * 
 * Centralized localStorage wrapper.
 * All localStorage reads and writes across FitBliss must pass through this module
 * to ensure consistent error handling, JSON serialization, and fallback defaults.
 */

const STORAGE_KEYS = {
  USER_PROFILE: 'fitbliss_user_profile',
  CALCULATOR_RESULTS: 'fitbliss_calc_results',
  WORKOUT_PREFERENCE: 'fitbliss_workout_pref',
  PROGRESS_LOGS: 'fitbliss_progress_logs',
  MEMBERSHIP_ENQUIRIES: 'fitbliss_membership_enquiries',
  CONTACT_MESSAGES: 'fitbliss_contact_messages',
};

/**
 * Safely parse JSON from localStorage with a fallback value.
 * @param {string} key 
 * @param {*} defaultValue 
 * @returns {*}
 */
export function getStorageItem(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    if (item === null || item === undefined) {
      return defaultValue;
    }
    return JSON.parse(item);
  } catch (error) {
    console.warn(`[FitBliss Storage] Error reading key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Safely serialize and write an item to localStorage.
 * @param {string} key 
 * @param {*} value 
 * @returns {boolean} True if successfully stored, false otherwise.
 */
export function setStorageItem(key, value) {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    console.error(`[FitBliss Storage] Error writing key "${key}":`, error);
    return false;
  }
}

/**
 * Remove an item from localStorage.
 * @param {string} key 
 */
export function removeStorageItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn(`[FitBliss Storage] Error removing key "${key}":`, error);
  }
}

// ==========================================
// Specialized FitBliss Getters and Setters
// ==========================================

export function saveUserProfile(profile) {
  return setStorageItem(STORAGE_KEYS.USER_PROFILE, profile);
}

export function getUserProfile() {
  return getStorageItem(STORAGE_KEYS.USER_PROFILE, null);
}

export function saveCalculatorResults(results) {
  return setStorageItem(STORAGE_KEYS.CALCULATOR_RESULTS, results);
}

export function getCalculatorResults() {
  return getStorageItem(STORAGE_KEYS.CALCULATOR_RESULTS, null);
}

export function saveWorkoutPreference(pref) {
  return setStorageItem(STORAGE_KEYS.WORKOUT_PREFERENCE, pref);
}

export function getWorkoutPreference() {
  return getStorageItem(STORAGE_KEYS.WORKOUT_PREFERENCE, null);
}

export function getProgressLogs() {
  return getStorageItem(STORAGE_KEYS.PROGRESS_LOGS, []);
}

export function saveProgressLogs(logs) {
  return setStorageItem(STORAGE_KEYS.PROGRESS_LOGS, logs);
}

export function addProgressLog(logEntry) {
  const logs = getProgressLogs();
  // Generate a unique ID if not provided
  if (!logEntry.id) {
    logEntry.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
  logs.push(logEntry);
  // Sort chronologically ascending
  logs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  saveProgressLogs(logs);
  return logs;
}

export function deleteProgressLog(logId) {
  const logs = getProgressLogs();
  const filtered = logs.filter(item => item.id !== logId);
  saveProgressLogs(filtered);
  return filtered;
}

export function saveMembershipEnquiry(enquiry) {
  const enquiries = getStorageItem(STORAGE_KEYS.MEMBERSHIP_ENQUIRIES, []);
  enquiry.id = Date.now().toString(36);
  enquiry.timestamp = new Date().toISOString();
  enquiries.push(enquiry);
  setStorageItem(STORAGE_KEYS.MEMBERSHIP_ENQUIRIES, enquiries);
  return enquiry;
}

export function getMembershipEnquiries() {
  return getStorageItem(STORAGE_KEYS.MEMBERSHIP_ENQUIRIES, []);
}

export function saveContactMessage(msg) {
  const messages = getStorageItem(STORAGE_KEYS.CONTACT_MESSAGES, []);
  msg.id = Date.now().toString(36);
  msg.timestamp = new Date().toISOString();
  messages.push(msg);
  setStorageItem(STORAGE_KEYS.CONTACT_MESSAGES, messages);
  return msg;
}

export function getContactMessages() {
  return getStorageItem(STORAGE_KEYS.CONTACT_MESSAGES, []);
}
