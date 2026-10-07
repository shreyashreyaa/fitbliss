/**
 * FitBliss - Main Script (js/main.js)
 * 
 * Global navigation, mobile drawer menu, tip-of-the-day rotator,
 * and shared interactive utilities.
 */

// 12 Science-backed fitness & wellness tips
const DAILY_FITNESS_TIPS = [
  {
    title: 'Hydration First',
    text: 'Drinking 500ml of water right after waking up revs up metabolic rate by up to 24% and restores cellular hydration after sleep.'
  },
  {
    title: 'Compound Priority',
    text: 'Prioritize compound movements (squats, push-ups, rows) early in your workout when neuromuscular energy is at its highest.'
  },
  {
    title: 'Protein Distribution',
    text: 'Spreading protein intake across 3 to 4 meals (20-35g each) optimizes muscle protein synthesis far better than a single large meal.'
  },
  {
    title: 'NEAT Power',
    text: 'Non-Exercise Activity Thermogenesis (NEAT) such as walking and taking stairs burns up to 3x more calories daily than a 45-minute gym session.'
  },
  {
    title: 'Recovery Rule',
    text: 'Muscles do not grow during workouts; they grow during deep sleep when human growth hormone (HGH) release reaches its nocturnal peak.'
  },
  {
    title: 'Mind-Muscle Connection',
    text: 'Consciously contracting and focusing on the target muscle during resistance training increases motor unit recruitment by up to 20%.'
  },
  {
    title: 'Progressive Overload',
    text: 'Progressive overload does not just mean heavier weight; adding one extra repetition or improving movement tempo triggers adaptation.'
  },
  {
    title: 'Fiber & Satiety',
    text: 'Combining whole grains like oats or brown rice with lentils and sprouts stabilizes blood glucose and blunts afternoon energy crashes.'
  },
  {
    title: 'Breathe With Intention',
    text: 'Exhale during exertion (the concentric lift) and inhale during lowering (the eccentric phase) to preserve core pressure and posture.'
  },
  {
    title: 'Consistent Warm-ups',
    text: 'A 5-minute dynamic mobility routine primes synovial fluid in your joints and reduces soft tissue injury risk by up to 40%.'
  },
  {
    title: 'Rest Between Sets',
    text: 'Allow 60-90 seconds between hypertrophy sets and 2-3 minutes for heavy compounds to replenish cellular ATP reserves.'
  },
  {
    title: 'Consistency Beats Intensity',
    text: 'A moderate workout completed 4 days a week consistently beats an all-out brutal session performed once every two weeks.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTipOfTheDay();
  initFaqAccordions();
});

/**
 * Initializes mobile hamburger menu and sticky navbar behaviors
 */
function initNavbar() {
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const siteHeader = document.querySelector('.site-header');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isExpanded));
      hamburger.classList.toggle('is-active');
      navMenu.classList.toggle('is-active');
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('is-active')) {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Sticky header shadow on scroll
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Highlight active nav link based on current page path
  highlightActiveNavLink();
}

/**
 * Highlights current page link in navbar
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Check exact match or root match
    if (currentPath.endsWith(href) || (currentPath.endsWith('/') && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Rotates or randomizes fitness tip of the day
 */
function initTipOfTheDay() {
  const tipTextEl = document.getElementById('dailyTipText');
  const tipTitleEl = document.getElementById('dailyTipTitle');
  const nextTipBtn = document.getElementById('nextTipBtn');

  if (!tipTextEl) return;

  // Pick tip based on day of month by default or random
  let tipIndex = Math.floor(Math.random() * DAILY_FITNESS_TIPS.length);

  function renderTip(index) {
    const tip = DAILY_FITNESS_TIPS[index];
    if (tipTitleEl) tipTitleEl.textContent = `Fitness Tip: ${tip.title}`;
    tipTextEl.textContent = `"${tip.text}"`;
  }

  renderTip(tipIndex);

  if (nextTipBtn) {
    nextTipBtn.addEventListener('click', () => {
      tipIndex = (tipIndex + 1) % DAILY_FITNESS_TIPS.length;
      renderTip(tipIndex);
    });
  }
}

/**
 * Accordion handler for FAQ questions (Contact / Home)
 */
function initFaqAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('is-open');

      // Close siblings if in single-accordion mode
      const parentAccordion = item.closest('.accordion');
      if (parentAccordion) {
        parentAccordion.querySelectorAll('.accordion-item').forEach(sibling => {
          if (sibling !== item) sibling.classList.remove('is-open');
        });
      }

      item.classList.toggle('is-open', !isOpen);
    });
  });
}
