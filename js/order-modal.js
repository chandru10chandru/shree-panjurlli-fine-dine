// Order Online & Physical Menu Cards Modal Controllers

export function initOrderModal() {
  const modal = document.getElementById('order-online-modal');
  const openButtons = document.querySelectorAll('.trigger-order-modal');
  const closeBtn = document.getElementById('close-order-modal-btn');

  function openModal() {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeModal();
    }
  });
}

export function initMenuCardsModal() {
  const modal = document.getElementById('physical-menu-modal');
  const openBtn = document.getElementById('open-physical-menu-btn');
  const closeBtn = document.getElementById('close-physical-menu-btn');
  const tabNonVeg = document.getElementById('tab-menu-nonveg');
  const tabVeg = document.getElementById('tab-menu-veg');
  const menuImg = document.getElementById('physical-menu-display-img');

  if (!modal) return;

  function openMenuModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenuModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openMenuModal();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeMenuModal);

  if (tabNonVeg && menuImg) {
    tabNonVeg.addEventListener('click', () => {
      tabNonVeg.classList.add('active');
      tabVeg?.classList.remove('active');
      menuImg.src = 'images/menu-cards/shree-panjurlli-nonveg-menu.jpg';
      menuImg.alt = 'Shree Panjurlli Non-Veg Menu Card';
    });
  }

  if (tabVeg && menuImg) {
    tabVeg.addEventListener('click', () => {
      tabVeg.classList.add('active');
      tabNonVeg?.classList.remove('active');
      menuImg.src = 'images/menu-cards/shree-panjurlli-veg-menu.jpg';
      menuImg.alt = 'Shree Panjurlli Veg Menu Card';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeMenuModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeMenuModal();
    }
  });
}
