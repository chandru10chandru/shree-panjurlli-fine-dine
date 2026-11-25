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
  const lightboxImg = document.getElementB
}
