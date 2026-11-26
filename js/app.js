// Shree Panjurlli Fine Dine — Main Application Controller
import { SIGNATURE_DISHES, FULL_MENU, MENU_CATEGORIES } from './menu-data.js';
import { initReservationForm } from './reservation.js';
import { initGallery } from './gallery.js';
import { initOrderModal, initMenuCardsModal } from './order-modal.js';

document.addEventListener('DOMContentLoaded', () => {
  initSiteIntro();
  initHeader();
  initMobileDrawer();
  renderSignatures();
  initMenuSection();
  initReservationForm();
  initGallery();
  initOrderModal();
  initMenuCardsModal();
});

// 0. Site Intro Splash Controller (3.4s with shining logo motion)
function initSiteIntro() {
  const introOverlay = document.getElementById('site-intro-overlay');
  const progressBar = document.getElementById('intro-progress-bar');
  const skipBtn = document.getElementById('intro-skip-btn');
  if (!introOverlay) return;

  document.body.classList.add('intro-active');

  let isDismissed = false;

  function dismissIntro() {
    if (isDismissed) return;
    isDismissed = true;
    introOverlay.classList.add('dismissed');
    document.body.classList.remove('intro-active');
    setTimeout(() => {
      introOverlay.style.display = 'none';
    }, 850);
  }

  // Trigger progress bar animation
  requestAnimationFrame(() => {
    setTimeout(() => {
      if (progressBar) progressBar.style.width = '100%';
    }, 60);
  });

  // Auto dismiss after 3.4s (3-4 secs range requested)
  const autoTimer = setTimeout(() => {
    dismissIntro();
  }, 3400);

  // Skip button click
  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      clearTimeout(autoTimer);
      dismissIntro();
    });
  }

  // Keyboard shortcut to skip
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      if (!isDismissed) {
        clearTimeout(autoTimer);
        dismissIntro();
      }
    }
  }, { once: true });
}

// 1. Header scroll detection
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 2. Mobile drawer navigation
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('close-drawer-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// 3. Render Curated Homepage Signature Dishes
function renderSignatures() {
  const container = document.getElementById('signature-dishes-grid');
  if (!container) return;

  container.innerHTML = SIGNATURE_DISHES.map(dish => `
    <article class="dish-card">
      <div class="dish-media">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy">
        <span class="dish-badge">${dish.badge}</span>
        <span class="dish-type-dot ${dish.isVeg ? 'veg' : 'non-veg'}" title="${dish.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}"></span>
      </div>
      <div class="dish-content">
        <div class="dish-header">
          <h3 class="dish-title">${dish.name}</h3>
          <span class="dish-price">${dish.price}</span>
        </div>
        <div class="dish-kannada-name">${dish.kannadaName}</div>
        <p class="dish-desc">${dish.description}</p>
        <div class="dish-tags">
          ${dish.tags.map(t => `<span class="dish-tag">${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

// 4. Interactive Full Menu Area with Live Search & Category Filtering
function initMenuSection() {
  const categoriesContainer = document.getElementById('menu-category-tabs');
  const menuListContainer = document.getElementById('menu-items-list');
  const searchInput = document.getElementById('menu-search');

  let activeCategory = 'all';
  let searchQuery = '';

  // Render Tabs
  if (categoriesContainer) {
    categoriesContainer.innerHTML = MENU_CATEGORIES.map(cat => `
      <button class="menu-tab-btn ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.name}
      </button>
    `).join('');

    categoriesContainer.querySelectorAll('.menu-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        categoriesContainer.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-cat') || 'all';
        renderFilteredMenu();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderFilteredMenu();
    });
  }

  function renderFilteredMenu() {
    if (!menuListContainer) return;

    let items = FULL_MENU;

    if (activeCategory !== 'all') {
      items = items.filter(it => it.category === activeCategory);
    }

    if (searchQuery) {
      items = items.filter(it => 
        it.name.toLowerCase().includes(searchQuery) ||
        (it.kannada && it.kannada.includes(searchQuery)) ||
        it.description.toLowerCase().includes(searchQuery)
      );
    }

    if (items.length === 0) {
      menuListContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No dishes matching "${searchQuery}" in this category.</p>
          <p style="font-size: 0.85rem;">Try another keyword or select "All Offerings".</p>
        </div>
      `;
      return;
    }

    menuListContainer.innerHTML = items.map(dish => `
      <div class="menu-item-row">
        <div class="item-left">
          <div class="item-name">
            <span>${dish.name}</span>
            <span class="dish-type-dot ${dish.isVeg ? 'veg' : 'non-veg'}" style="position: static; display: inline-flex;" title="${dish.isVeg ? 'Veg' : 'Non-Veg'}"></span>
            ${dish.isPopular ? '<span class="item-popular-badge">Popular</span>' : ''}
          </div>
          <div class="item-kannada">${dish.kannada || ''}</div>
          <p class="item-desc">${dish.description}</p>
        </div>
        <div class="item-price">${dish.price}</div>
      </div>
    `).join('');
  }

  renderFilteredMenu();
}
