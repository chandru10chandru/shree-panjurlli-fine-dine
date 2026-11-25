// Editorial Photo Gallery & Lightbox Controller for Shree Panjurlli Fine Dine

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    category: 'house',
    title: 'The Grand Dining Hall & Coffered Ceiling',
    subtitle: 'Geometric wooden ceiling & private booths',
    src: 'images/interior/grand-hall-ceiling-booths.jpg',
    spanClass: 'span-2'
  },
  {
    id: 'gal-2',
    category: 'house',
    title: 'Carved Temple Stone Reception',
    subtitle: 'Backlit elephants, lions & peacock reliefs',
    src: 'images/interior/stone-carved-temple-reception.jpg',
    spanClass: ''
  },
  {
    id: 'gal-3',
    category: 'house',
    title: 'Handcrafted Teak Jaali Partition',
    subtitle: 'Circular wooden medallion & lattice craft',
    src: 'images/interior/teak-jaali-circular-medallion.jpg',
    spanClass: ''
  },
  {
    id: 'gal-4',
    category: 'legends',
    title: 'Wall of Legends: Social Transformers',
    subtitle: 'Sindhutai Sapkal & national icons',
    src: 'images/story/wall-of-legends-humanitarians.jpg',
    spanClass: 'span-2'
  },
  {
    id: 'gal-5',
    category: 'house',
    title: 'Family Dining Booths & Vintage Flooring',
    subtitle: 'Portuguese style patterned ceramic tiles',
    src: 'images/interior/family-dining-patterned-floor.jpg',
    spanClass: ''
  },
  {
    id: 'gal-6',
    category: 'house',
    title: 'Private Banquet Enclosure',
    subtitle: 'Living moss wall & geometric amber lighting',
    src: 'images/interior/banquet-greenery-teardrop-lights.jpg',
    spanClass: ''
  },
  {
    id: 'gal-7',
    category: 'desserts',
    title: 'Signature Gadbad Ice Cream Trio',
    subtitle: 'Fresh cut fruits, rich scoops & cherry garnish',
    src: 'images/food/signature-gadbad-fruit-salad-trio.jpg',
    spanClass: ''
  },
  {
    id: 'gal-8',
    category: 'desserts',
    title: 'Royal Waffle & Fruit Sundae',
    subtitle: 'Tall layered dessert with waffle fans',
    src: 'images/food/royal-gadbad-waffle-sundae.jpg',
    spanClass: 'row-2'
  },
  {
    id: 'gal-9',
    category: 'exterior',
    title: 'Shree Panjurlli Illuminated Night Facade',
    subtitle: 'Glowing Kannada & English signage at Kuber Plaza',
    src: 'images/exterior/shree-panjurlli-night-facade.jpg',
    spanClass: 'span-2'
  },
  {
    id: 'gal-10',
    category: 'house',
    title: 'Honeycomb Canopy & Hanging Foliage',
    subtitle: 'Intimate dining section with hanging plants',
    src: 'images/interior/honeycomb-canopy-dining.jpg',
    spanClass: ''
  },
  {
    id: 'gal-11',
    category: 'exterior',
    title: 'Kuber Plaza Tilakwadi Entrance',
    subtitle: 'Beside D-Mart, near 3rd Railway Gate',
    src: 'images/exterior/kuber-plaza-daytime-exterior.jpg',
    spanClass: ''
  },
  {
    id: 'gal-12',
    category: 'house',
    title: 'Bustling Evening Dining Atmosphere',
    subtitle: 'Families gathering for authentic meals',
    src: 'images/interior/bustling-dining-atmosphere.jpg',
    spanClass: ''
  }
];

export function initGallery() {
  const container = document.getElementById('gallery-masonry-container');
  const tabs = document.querySelectorAll('.gallery-tab-btn');
  const lightbox = document.getElementById('gallery-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxSub = document.getElementById('lightbox-sub');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  let currentCategory = 'all';
  let activeList = [...GALLERY_ITEMS];
  let currentIndex = 0;

  function renderGallery(items) {
    if (!container) return;
    container.innerHTML = items.map((item, index) => `
      <div class="gallery-item ${item.spanClass}" data-index="${index}">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <div>
            <h4 class="gallery-caption-title">${item.title}</h4>
            <p class="gallery-caption-sub">${item.subtitle}</p>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click handlers
    container.querySelectorAll('.gallery-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-index'), 10);
        openLightbox(idx);
      });
    });
  }

  function filterGallery(category) {
    currentCategory = category;
    if (category === 'all') {
      activeList = [...GALLERY_ITEMS];
    } else {
      activeList = GALLERY_ITEMS.filter(it => it.category === category);
    }
    renderGallery(activeList);
  }

  function openLightbox(index) {
    if (!lightbox || !activeList[index]) return;
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = activeList[currentIndex];
    if (!item) return;
    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxSub) lightboxSub.textContent = item.subtitle;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + activeList.length) % activeList.length;
    updateLightboxContent();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % activeList.length;
    updateLightboxContent();
  }

  // Event Listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterGallery(tab.getAttribute('data-cat') || 'all');
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);
  if (nextBtn) nextBtn.addEventListener('click', showNext);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Initial render
  renderGallery(activeList);
}
