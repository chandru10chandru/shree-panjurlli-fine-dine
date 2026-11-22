// Verified Menu Dataset for Shree Panjurlli Fine Dine, Tilakwadi, Belagavi
// Extracted and verified from official Shree Panjurlli Lunch & Dinner menu cards & live customer orders.

export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Offerings', count: 48 },
  { id: 'coastal', name: 'Mangalorean & Coastal', count: 8 },
  { id: 'tandoor', name: 'Tandoori Kababs', count: 6 },
  { id: 'starters', name: 'Dry Starters & Snacks', count: 8 },
  { id: 'curries', name: 'Main Course & Gravies', count: 8 },
  { id: 'biryani', name: 'Dum Biryani & Rice', count: 6 },
  { id: 'breads', name: 'Roti Basket & Breads', count: 6 },
  { id: 'desserts', name: 'Desserts & Beverages', count: 6 },
];

export const SIGNATURE_DISHES = [
  {
    id: 'sig-surmai',
    name: 'Surmai Rava Fry',
    kannadaName: 'ಸುರ್ಮಿ ರವಾ ಫ್ರೈ',
    category: 'coastal',
    price: 'Seasonal / Fresh Catch',
    numericPrice: 380,
    isVeg: false,
    badge: 'Mangalorean Signature',
    description: 'Fresh kingfish steaks marinated in coastal red chili masala, coated with golden semolina (rava), and tawa-crisped to perfection.',
    image: 'images/food/surmai-rava-fry.jpg',
    tags: ['Fresh Catch', 'Coastal Spices', 'Customer Favorite']
  },
  {
    id: 'sig-ghee-roast',
    name: 'Chicken Ghee Roast Dry',
    kannadaName: 'ಚಿಕನ್ ತುಪ್ಪ ರೋಸ್ಟ್',
    category: 'curries',
    price: '₹212',
    bonelessPrice: '₹238',
    numericPrice: 212,
    isVeg: false,
    badge: 'House Specialty',
    description: 'Tender chicken slow-roasted in pure aromatic desi ghee with crushed Byadgi chilies, peppercorns, and roasted whole spices.',
    image: 'images/food/chicken-ghee-roast.jpg',
    tags: ['Pure Desi Ghee', 'Byadgi Chili', 'Bestseller']
  },
  {
    id: 'sig-savaji',
    name: 'Mutton Savaji Curry',
    kannadaName: 'ಮಟನ್ ಸವಜಿ ಕರಿ',
    category: 'curries',
    price: '₹288',
    numericPrice: 288,
    isVeg: false,
    badge: 'Belagavi Heritage',
    description: 'Traditional Belagavi regional Savaji mutton slow-cooked with roasted black masalas, dry coconut, and intense indigenous aromatics.',
    image: 'images/food/mutton-savaji-curry.jpg',
    tags: ['Savaji Recipe', 'Belagavi Legend', 'Fiery Heritage']
  },
  {
    id: 'sig-biryani',
    name: 'Special Basmati Dum Biryani (Chicken)',
    kannadaName: 'ಚಿಕನ್ ದಮ್ ಬಿರಿಯಾನಿ',
    category: 'biryani',
    price: '₹175 (Half) / ₹225 (Full)',
    bonelessPrice: '₹250 (Boneless)',
    numericPrice: 225,
    isVeg: false,
    badge: 'Dum Basmati',
    description: 'Aged long-grain basmati layered with tender spiced chicken, caramelized onions, fresh mint, and whole brown cardamom on slow charcoal dum.',
    image: 'images/food/basmati-dum-biryani.jpg',
    tags: ['Aged Basmati', 'Slow Cooked Dum', 'Served with Raita']
  },
  {
    id: 'sig-kaju-paneer',
    name: 'Kaju Paneer Masala',
    kannadaName: 'ಕಾಜು ಪನೀರ್ ಮಸಾಲಾ',
    category: 'curries',
    price: '₹200',
    numericPrice: 200,
    isVeg: true,
    badge: 'Vegetarian Classic',
    description: 'Fresh cottage cheese cubes and whole roasted cashews simmered in a velvety onion, tomato, and cashew cream reduction.',
    image: 'images/food/kaju-paneer-masala.jpg',
    tags: ['Roasted Cashews', 'Fresh Malai Paneer', 'Mild & Rich']
  },
  {
    id: 'sig-gadbad',
    name: 'Iconic Gadbad Ice Cream',
    kannadaName: 'ಶ್ರೀ ಪಂಜುರ್ಲಿ ಗಡ್ಬಡ್ ಐಸ್ ಕ್ರೀಮ್',
    category: 'desserts',
    price: '₹175',
    numericPrice: 175,
    isVeg: true,
    badge: 'Iconic Coastal Dessert',
    description: 'Coastal Karnataka\'s beloved dessert: multi-layered scoops of vanilla, strawberry & mango ice creams interspersed with fresh cut fruits, jelly cubes, dry fruits, and strawberry drizzle.',
    image: 'images/food/signature-gadbad-fruit-salad-trio.jpg',
    tags: ['Real Fruit Cuts', 'Multi-Layered', 'Belagavi Favorite']
  }
];

export const FULL_MENU = [
  // Coastal & Mangalorean
  {
    id: 'cst-1',
    name: 'Surmai Rava Fry',
    kannada: 'ಸುರ್ಮಿ ರವಾ ಫ್ರೈ',
    category: 'coastal',
    price: '₹380',
    isVeg: false,
    isPopular: true,
    description: 'Crisp rava-crusted Kingfish steak pan-fried in Mangalorean spices.'
  },
  {
    id: 'cst-2',
    name: 'Pomfret Tawa Fry',
    kannada: 'ಪಾಂಫ್ರೆಟ್ ತವಾ ಫ್ರೈ',
    category: 'coastal',
    price: '₹350',
    isVeg: false,
    isPopular: true,
    description: 'Whole white pomfret shallow-fried on heavy iron griddle with red chili paste.'
  },
  {
    id: 'cst-3',
    name: 'Prawns Sukka',
    kannada: 'ಪ್ರಾನ್ಸ್ ಸುಕ್ಕಾ',
    category: 'coastal',
    price: '₹260',
    isVeg: false,
    isPopular: true,
    description: 'Plump sea prawns tossed with fresh grated coconut, curry leaves, and coastal masala.'
  },
  {
    id: 'cst-4',
    name: 'Prawns Ghee Roast',
    kannada: 'ಪ್ರಾನ್ಸ್ ತುಪ್ಪ ರೋಸ್ಟ್',
    category: 'coastal',
    price: '₹280',
    isVeg: false,
    isPopular: true,
    description: 'Prawns steeped in fiery Byadgi ghee paste roasted dry.'
  },
  {
    id: 'cst-5',
    name: 'Chicken Sukka',
    kannada: 'ಚಿಕನ್ ಸುಕ್ಕಾ',
    category: 'coastal',
    price: '₹212',
    isVeg: false,
    isPopular: true,
    description: 'Rustic coastal preparation with toasted coconut shreds and hand-pounded spices.'
  },
  {
    id: 'cst-6',
    name: 'Chicken Kundapura',
    kannada: 'ಚಿಕನ್ ಕುಂದಾಪುರ',
    category: 'coastal',
    price: '₹200',
    isVeg: false,
    isPopular: false,
    description: 'Traditional Kundapura country-style chicken curry with roasted coriander and pepper.'
  },
  {
    id: 'cst-7',
    name: 'Mushroom Sukka',
    kannada: 'ಮಶ್ರೂಮ್ ಸುಕ್ಕಾ',
    category: 'coastal',
    price: '₹225',
    isVeg: true,
    isPopular: false,
    description: 'Tender button mushrooms cooked Mangalorean style with coconut dry masala.'
  },
  {
    id: 'cst-8',
    name: 'Paneer Sukka',
    kannada: 'ಪನೀರ್ ಸುಕ್ಕಾ',
    category: 'coastal',
    price: '₹263',
    isVeg: true,
    isPopular: false,
    description: 'Diced cottage cheese sauteed with coconut flakes and coastal chili tempering.'
  },

  // Tandoor
  {
    id: 'tan-1',
    name: 'Chicken Tangdi Kabab',
    kannada: 'ಚಿಕನ್ ಟಾಂಗ್ಡಿ ಕಬಾಬ್',
    category: 'tandoor',
    price: '₹138',
    isVeg: false,
    isPopular: true,
    description: 'Charcoal-grilled chicken drumsticks marinated in spiced yogurt and ginger.'
  },
  {
    id: 'tan-2',
    name: 'Chicken Kabab',
    kannada: 'ಚಿಕನ್ ಕಬಾಬ್',
    category: 'tandoor',
    price: '₹212',
    isVeg: false,
    isPopular: true,
    description: 'Crispy seasoned spiced deep-fried chicken morsels, a Belagavi crowd favorite.'
  },
  {
    id: 'tan-3',
    name: 'Chicken Tikka',
    kannada: 'ಚಿಕನ್ ಟಿಕ್ಕಾ (ಬೋನ್ಲೆಸ್)',
    category: 'tandoor',
    price: '₹250',
    isVeg: false,
    isPopular: true,
    description: 'Boneless tender chicken cubes roasted over clay oven charcoal with smoky paprika.'
  },
  {
    id: 'tan-4',
    name: 'Chicken Hariyali Kabab',
    kannada: 'ಚಿಕನ್ ಹರಿಯಾಲಿ ಕಬಾಬ್',
    category: 'tandoor',
    price: '₹263',
    isVeg: false,
    isPopular: false,
    description: 'Marinated in fresh garden mint, coriander paste, green chili, and hung curd.'
  },
  {
    id: 'tan-5',
    name: 'Chicken Banjara Kabab',
    kannada: 'ಚಿಕನ್ ಬಂಜಾರಾ ಕಬಾಬ್',
    category: 'tandoor',
    price: '₹275',
    isVeg: false,
    isPopular: true,
    description: 'Rustic clay oven skewers coated with crushed cumin, garlic, and coarse spices.'
  },
  {
    id: 'tan-6',
    name: 'Chicken Malai Kabab',
    kannada: 'ಚಿಕನ್ ಮಲೈ ಕಬಾಬ್',
    category: 'tandoor',
    price: '₹275',
    isVeg: false,
    isPopular: false,
    description: 'Melt-in-mouth chicken pieces dressed with fresh clotted cream, cheese, and cardamom.'
  },

  // Starters
  {
    id: 'str-1',
    name: 'Chicken Ghee Roast Dry',
    kannada: 'ಚಿಕನ್ ತುಪ್ಪ ರೋಸ್ಟ್ ಡ್ರೈ',
    category: 'starters',
    price: '₹212',
    isVeg: false,
    isPopular: true,
    description: 'Panjurlli\'s top starter: morsels roasted dry in pure clarified ghee.'
  },
  {
    id: 'str-2',
    name: 'Chicken Pepper Dry',
    kannada: 'ಚಿಕನ್ ಪೆಪ್ಪರ್ ಡ್ರೈ',
    category: 'starters',
    price: '₹212',
    isVeg: false,
    isPopular: true,
    description: 'Spicy black pepper crushed marinade tossed with curry leaves and onions.'
  },
  {
    id: 'str-3',
    name: 'Chicken Savaji Dry',
    kannada: 'ಚಿಕನ್ ಸವಜಿ ಡ್ರೈ',
    category: 'starters',
    price: '₹212',
    isVeg: false,
    isPopular: true,
    description: 'Belagavi signature Savaji masala stir-fried chicken with deep dark spice notes.'
  },
  {
    id: 'str-4',
    name: 'Chicken Tukuda',
    kannada: 'ಚಿಕನ್ ತುಕುಡಾ',
    category: 'starters',
    price: '₹238',
    isVeg: false,
    isPopular: false,
    description: 'Bite-sized spiced boneless crisps seasoned with local herbs.'
  },
  {
    id: 'str-5',
    name: 'Chicken Satay',
    kannada: 'ಚಿಕನ್ ಸಾಟೇ',
    category: 'starters',
    price: '₹275',
    isVeg: false,
    isPopular: false,
    description: 'Indo-Chinese skewered chicken glazed with house spicy-tangy reduction.'
  },
  {
    id: 'str-6',
    name: 'Mutton Savaji Dry',
    kannada: 'ಮಟನ್ ಸವಜಿ ಡ್ರೈ',
    category: 'starters',
    price: '₹325',
    isVeg: false,
    isPopular: true,
    description: 'Tender baby mutton cubes pan-tossed in robust roasted Savaji spice paste.'
  },
  {
    id: 'str-7',
    name: 'Mutton Pepper Dry',
    kannada: 'ಮಟನ್ ಪೆಪ್ಪರ್ ಡ್ರೈ',
    category: 'starters',
    price: '₹325',
    isVeg: false,
    isPopular: false,
    description: 'Succulent mutton cuts tossed in roasted Malabar black peppercorns.'
  },
  {
    id: 'str-8',
    name: 'Kaju Sukka',
    kannada: 'ಕಾಜು ಸುಕ್ಕಾ',
    category: 'starters',
    price: '₹300',
    isVeg: true,
    isPopular: true,
    description: 'Whole plump cashew nuts roasted with coastal grated coconut spices.'
  },

  // Curries & Main Course
  {
    id: 'cur-1',
    name: 'Chicken Ghee Roast Masala',
    kannada: 'ಚಿಕನ್ ತುಪ್ಪ ರೋಸ್ಟ್ ಮಸಾಲಾ (ಗ್ರೇವಿ)',
    category: 'curries',
    price: '₹212',
    isVeg: false,
    isPopular: true,
    description: 'Rich gravy version of the classic Kundapura ghee roast, pairing wonderfully with Neer Dosa.'
  },
  {
    id: 'cur-2',
    name: 'Chicken Savaji Curry',
    kannada: 'ಚಿಕನ್ ಸವಜಿ ಕರಿ',
    category: 'curries',
    price: '₹212',
    isVeg: false,
    isPopular: true,
    description: 'Authentic fiery Belagavi-style curry made with traditional dry-roasted Savaji masala.'
  },
  {
    id: 'cur-3',
    name: 'Chicken Kolhapuri',
    kannada: 'ಚಿಕನ್ ಕೊಲ್ಹಾಪುರಿ',
    category: 'curries',
    price: '₹188',
    isVeg: false,
    isPopular: false,
    description: 'Spicy regional chicken gravy prepared with Kolhapuri red chili paste and sesame.'
  },
  {
    id: 'cur-4',
    name: 'Chicken Handi',
    kannada: 'ಚಿಕನ್ ಹಂಡಿ',
    category: 'curries',
    price: '₹200',
    isVeg: false,
    isPopular: false,
    description: 'Slow-simmered chicken in an earthenware-style rich brown onion and coriander gravy.'
  },
  {
    id: 'cur-5',
    name: 'Mutton Savaji Curry',
    kannada: 'ಮಟನ್ ಸವಜಿ ಕರಿ',
    category: 'curries',
    price: '₹288',
    isVeg: false,
    isPopular: true,
    description: 'Belagavi\'s prized Savaji mutton curry with intense layered spice depths.'
  },
  {
    id: 'cur-6',
    name: 'Mutton Handi',
    kannada: 'ಮಟನ್ ಹಂಡಿ',
    category: 'curries',
    price: '₹250',
    isVeg: false,
    isPopular: false,
    description: 'Tender mutton pieces braised in rich tomato-onion-cumin thick gravy.'
  },
  {
    id: 'cur-7',
    name: 'Kaju Paneer Masala',
    kannada: 'ಕಾಜು ಪನೀರ್ ಮಸಾಲಾ',
    category: 'curries',
    price: '₹200',
    isVeg: true,
    isPopular: true,
    description: 'Soft cottage cheese and whole cashews in aromatic golden butter-onion sauce.'
  },
  {
    id: 'cur-8',
    name: 'Veg Panjurlli Special',
    kannada: 'ವೆಜ್ ಪಂಜುರ್ಲಿ ಸ್ಪೆಷಲ್',
    category: 'curries',
    price: '₹210',
    isVeg: true,
    isPopular: true,
    description: 'The house special medley of seasonal vegetables in our chef\'s secret spiced cream gravy.'
  },

  // Biryani & Rice
  {
    id: 'bir-1',
    name: 'Chicken Biryani (Full)',
    kannada: 'ಚಿಕನ್ ಬಿರಿಯಾನಿ (ಫುಲ್)',
    category: 'biryani',
    price: '₹225',
    isVeg: false,
    isPopular: true,
    description: 'Long basmati grains layered with succulent spiced bone-in chicken cuts, served with gravy & raita.'
  },
  {
    id: 'bir-2',
    name: 'Chicken Biryani Boneless',
    kannada: 'ಚಿಕನ್ ಬಿರಿಯಾನಿ ಬೋನ್ಲೆಸ್',
    category: 'biryani',
    price: '₹250',
    isVeg: false,
    isPopular: true,
    description: 'Boneless tender chicken bites infused with saffron-tinged dum basmati rice.'
  },
  {
    id: 'bir-3',
    name: 'Mutton Biryani (Full)',
    kannada: 'ಮಟನ್ ಬಿರಿಯಾನಿ (ಫುಲ್)',
    category: 'biryani',
    price: '₹275',
    isVeg: false,
    isPopular: true,
    description: 'Tender baby goat meat marinated overnight and sealed on slow dum with Basmati.'
  },
  {
    id: 'bir-4',
    name: 'Prawns Biryani',
    kannada: 'ಪ್ರಾನ್ಸ್ ಬಿರಿಯಾನಿ',
    category: 'biryani',
    price: '₹260',
    isVeg: false,
    isPopular: true,
    description: 'Fresh coastal prawns gently tossed in biryani spices and fragrant long rice.'
  },
  {
    id: 'bir-5',
    name: 'Paneer Biriyani',
    kannada: 'ಪನೀರ್ ಬಿರಿಯಾನಿ',
    category: 'biryani',
    price: '₹188',
    isVeg: true,
    isPopular: false,
    description: 'Golden spiced paneer cubes layered with aromatic basmati, herbs, and brown onions.'
  },
  {
    id: 'bir-6',
    name: 'Ghee Rice & Dal Kichdi',
    kannada: 'ತುಪ್ಪದ ಅನ್ನ / ದಾಲ್ ಕಿಚಡಿ',
    category: 'biryani',
    price: '₹150 / ₹162',
    isVeg: true,
    isPopular: true,
    description: 'Comforting, fragrant basmati rice tempered with whole spices and pure desi ghee.'
  },

  // Roti Basket & Breads
  {
    id: 'brd-1',
    name: 'Neer Dosa (Single)',
    kannada: 'ನೀರ್ ದೋಸೆ',
    category: 'breads',
    price: '₹15',
    isVeg: true,
    isPopular: true,
    description: 'Paper-thin, feather-light Mangalorean rice crepes. The ultimate companion for Ghee Roast and Curries.'
  },
  {
    id: 'brd-2',
    name: 'Garlic Butter Naan',
    kannada: 'ಗಾರ್ಲಿಕ್ ಬಟರ್ ನಾನ್',
    category: 'breads',
    price: '₹75',
    isVeg: true,
    isPopular: true,
    description: 'Clay tandoor blistered bread loaded with crushed roasted garlic and pure dairy butter.'
  },
  {
    id: 'brd-3',
    name: 'Butter Parota',
    kannada: 'ಬಟರ್ ಪರೋಟಾ',
    category: 'breads',
    price: '₹45',
    isVeg: true,
    isPopular: true,
    description: 'Flaky multi-layered South Indian parota brushed with fresh butter.'
  },
  {
    id: 'brd-4',
    name: 'Butter Naan',
    kannada: 'ಬಟರ್ ನಾನ್',
    category: 'breads',
    price: '₹48',
    isVeg: true,
    isPopular: false,
    description: 'Soft tandoori leavened flatbread brushed with molten butter.'
  },
  {
    id: 'brd-5',
    name: 'Wheat Butter Tandoori Roti',
    kannada: 'ಗೋಧಿ ಬಟರ್ ತಂದೂರಿ ರೋಟಿ',
    category: 'breads',
    price: '₹28',
    isVeg: true,
    isPopular: false,
    description: 'Wholesome whole wheat flour roti baked in the tandoor and butter-finished.'
  },
  {
    id: 'brd-6',
    name: 'Paneer Parota',
    kannada: 'ಪನೀರ್ ಪರೋಟಾ',
    category: 'breads',
    price: '₹100',
    isVeg: true,
    isPopular: false,
    description: 'Stuffed tawa parota with spiced cottage cheese mash and herbs.'
  },

  // Desserts & Beverages
  {
    id: 'des-1',
    name: 'Gadbad Ice Cream',
    kannada: 'ಗಡ್ಬಡ್ ಐಸ್ ಕ್ರೀಮ್',
    category: 'desserts',
    price: '₹175',
    isVeg: true,
    isPopular: true,
    description: 'The iconic coastal tall sundae with assorted scoops, fresh cut fruits, dry nuts, and jelly.'
  },
  {
    id: 'des-2',
    name: 'Fruit Salad with Ice Cream',
    kannada: 'ಫ್ರೂಟ್ ಸಲಾಡ್ ಐಸ್ ಕ್ರೀಮ್',
    category: 'desserts',
    price: '₹125',
    isVeg: true,
    isPopular: true,
    description: 'Chilled fresh seasonal fruits topped with creamy vanilla scoop and pomegranate pearls.'
  },
  {
    id: 'des-3',
    name: 'Falooda',
    kannada: 'ಫಲೂಡಾ',
    category: 'desserts',
    price: '₹150',
    isVeg: true,
    isPopular: true,
    description: 'Rose syrup, basil seeds (sabja), vermicelli noodles, chilled milk, and rich ice cream.'
  },
  {
    id: 'des-4',
    name: 'Sweet Lassi',
    kannada: 'ಸ್ವೀಟ್ ಲಸ್ಸಿ',
    category: 'desserts',
    price: '₹88',
    isVeg: true,
    isPopular: false,
    description: 'Thick, creamy churned sweet yogurt flavored with green cardamom and saffron.'
  },
  {
    id: 'des-5',
    name: 'Fresh Lime Soda',
    kannada: 'ಫ್ರೆಶ್ ಲೈಮ್ ಸೋಡಾ',
    category: 'desserts',
    price: '₹50',
    isVeg: true,
    isPopular: false,
    description: 'Crisp sparkling soda freshly pressed with key lime juice (Sweet, Salted, or Mixed).'
  },
  {
    id: 'des-6',
    name: 'Cold Coffee with Ice Cream',
    kannada: 'ಕೋಲ್ಡ್ ಕಾಫಿ ಐಸ್ ಕ್ರೀಮ್',
    category: 'desserts',
    price: '₹125',
    isVeg: true,
    isPopular: false,
    description: 'Frothy roasted coffee blend crowned with a rich vanilla ice cream scoop.'
  }
];

export const RESTAURANT_INFO = {
  name: 'Shree Panjurlli Fine Dine',
  kannadaName: 'ಶ್ರೀ ಪಂಜುರ್ಲಿ ಲಂಚ್ & ಡಿನ್ನರ್',
  tagline: 'A table worth gathering around.',
  motto: 'Honest, Humble & Passionate',
  address: 'Kuber Plaza, Beside D-Mart, Near 3rd Railway Gate, Khanapur Road, Tilakwadi, Belagavi, Karnataka 590006',
  landmark: 'Beside D-Mart, 3rd Railway Gate, Tilakwadi',
  phone: '+91 831 420 3773',
  mobileWhatsapp: '+91 91410 93360',
  secondaryPhone: '+91 74117 45666',
  rating: 4.1,
  reviewCount: '2,325+',
  hours: '11:00 AM – 11:30 PM',
  lunchHours: '11:00 AM – 3:30 PM',
  dinnerHours: '6:30 PM – 11:30 PM',
  coordinates: {
    lat: 15.8255956,
    lng: 74.4985029
  },
  googleMapsUrl: 'https://maps.google.com/?q=Shree+Panjurlli+Fine+Dine+Tilakwadi+Belagavi',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.258810237728!2d74.495928!3d15.8255956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf65c192080f01%3A0x6b87be92e92c2a0!2sShree%20Panjurlli%20Fine%20Dine!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  swiggyUrl: 'https://www.swiggy.com/city/belgaum/shree-panjurlli-lunch-and-dinner-tilakwadi-rest106263',
  zomatoUrl: 'https://www.zomato.com/belgaum/restaurants?q=Shree+Panjurlli+Fine+Dine+Tilakwadi'
};
