export const productsByCategory = {
  dairy: [
    { id: 'milk-500', name: 'Toned Milk 500ml', price: 32, image: './images/products/milk-500.png' },
    { id: 'paneer-200', name: 'Fresh Paneer 200g', price: 80, image: './images/products/paneer-200.jpg' },
    { id: 'yogurt-500', name: 'Plain Yogurt 500g', price: 50, image: './images/products/yogurt-500.jpg' },
    { id: 'cheese-100', name: 'Cheese Slices 100g', price: 120, image: './images/products/cheese-100.jpg' },
    { id: 'butter-100', name: 'Unsalted Butter 100g', price: 60, image: './images/products/butter-100.jpg' },
    { id: 'dahi-1kg', name: 'Fresh Curd 1kg', price: 90, image: './images/products/dahi-1kg.jpg' },
    { id: 'ghee-500', name: 'Pure Ghee 500ml', price: 250, image: './images/products/ghee-500.jpg' },
    { id: 'cream-200', name: 'Fresh Cream 200ml', price: 70, image: './images/products/cream-200.jpg' },
    { id: 'eggs-12', name: 'Farm Eggs 12 pcs', price: 100, image: './images/products/eggs-12.jpg' },
    { id: 'milk-powder-500', name: 'Milk Powder 500g', price: 200, image: './images/products/milk-powder-500.webp' },
  ],
  fruits: [
    { id: 'apple-1kg', name: 'Fresh Apples 1kg', price: 150, image: './images/products/apple-1kg.jpg' },
    { id: 'banana-6', name: 'Bananas (6 pcs)', price: 40, image: './images/products/banana-6.jpg' },
    { id: 'orange-1kg', name: 'Oranges 1kg', price: 100, image: './images/products/orange-1kg.jpg' },
    { id: 'mango-1kg', name: 'Alphonso Mangoes 1kg', price: 200, image: './images/products/mango-1kg.jpg' },
    { id: 'carrot-500', name: 'Carrots 500g', price: 30, image: './images/products/carrot-500.jpg' },
    { id: 'potato-1kg', name: 'Potatoes 1kg', price: 25, image: './images/products/potato-1kg.jpg' },
    { id: 'onion-1kg', name: 'Onions 1kg', price: 35, image: './images/products/onion-1kg.jpg' },
    { id: 'tomato-1kg', name: 'Tomatoes 1kg', price: 40, image: './images/products/tomato-1kg.jpg' },
    { id: 'grapes-500', name: 'Green Grapes 500g', price: 80, image: './images/products/grapes-500.jpg' },
    { id: 'watermelon-1', name: 'Watermelon (whole)', price: 50, image: './images/products/watermelon-1.jpg' },
  ],
  snacks: [
    { id: 'chips-90', name: 'Potato Chips 90g', price: 20, image: './images/products/chips-90.jpg' },
    { id: 'biscuits-200', name: 'Cream Biscuits 200g', price: 50, image: './images/products/biscuits-200.jpg' },
    { id: 'namkeen-150', name: 'Mixed Namkeen 150g', price: 40, image: './images/products/namkeen-150.jpg' },
    { id: 'popcorn-100', name: 'Butter Popcorn 100g', price: 60, image: './images/products/popcorn-100.jpg' },
    { id: 'nuts-200', name: 'Mixed Nuts 200g', price: 150, image: './images/products/nuts-200.jpg' },
    { id: 'cookies-150', name: 'Chocolate Cookies 150g', price: 80, image: './images/products/cookies-150.jpg' },
    { id: 'wafers-100', name: 'Chocolate Wafers 100g', price: 40, image: './images/products/wafers-100.jpg' },
    { id: 'crackers-200', name: 'Cheese Crackers 200g', price: 60, image: './images/products/crackers-200.jpg' },
    { id: 'bhujia-150', name: 'Aloo Bhujia 150g', price: 30, image: './images/products/bhujia-150.jpg' },
    { id: 'mixture-200', name: 'Spicy Mixture 200g', price: 50, image: './images/products/mixture-200.jpg' },
  ],
  // ... Continue for bakery, beverages, household with 8-10 items each (similar pattern)
  // New categories
  staples: [
    { id: 'rice-5kg', name: 'Basmati Rice 5kg', price: 300, image: './images/products/rice-5kg.jpg' },
    { id: 'flour-5kg', name: 'Wheat Flour 5kg', price: 150, image: './images/products/flour-5kg.jpg' },
    { id: 'dal-1kg', name: 'Toor Dal 1kg', price: 120, image: './images/products/dal-1kg.jpg' },
    { id: 'sugar-1kg', name: 'Sugar 1kg', price: 50, image: './images/products/sugar-1kg.jpg' },
    { id: 'salt-1kg', name: 'Iodized Salt 1kg', price: 20, image: './images/products/salt-1kg.jpg' },
    { id: 'oil-1l', name: 'Sunflower Oil 1L', price: 120, image: './images/products/oil-1l.jpg' },
    { id: 'spices-200', name: 'Garam Masala 200g', price: 80, image: './images/products/spices-200.jpg' },
    { id: 'pasta-500', name: 'Pasta 500g', price: 60, image: './images/products/pasta-500.jpg' },
    { id: 'noodles-180', name: 'Instant Noodles 180g', price: 20, image: './images/products/noodles-180.jpg' },
    { id: 'oats-500', name: 'Rolled Oats 500g', price: 100, image: './images/products/oats-500.jpg' },
  ],
  'personal-care': [
    { id: 'shampoo-400', name: 'Anti-Dandruff Shampoo 400ml', price: 250, image: './images/products/shampoo-400.jpg' },
    { id: 'soap-125', name: 'Antibacterial Soap 125g', price: 30, image: './images/products/soap-125.jpg' },
    { id: 'toothpaste-100', name: 'Fluoride Toothpaste 100g', price: 50, image: './images/products/toothpaste-100.jpg' },
    { id: 'lotion-200', name: 'Moisturizing Lotion 200ml', price: 150, image: './images/products/lotion-200.jpg' },
    { id: 'razor-5', name: 'Disposable Razors (5 pcs)', price: 100, image: './images/products/razor-5.jpg' },
    { id: 'deodorant-150', name: 'Deodorant Spray 150ml', price: 200, image: './images/products/deodorant-150.jpg' },
    { id: 'sanitizer-500', name: 'Hand Sanitizer 500ml', price: 150, image: './images/products/sanitizer-500.jpg' },
    { id: 'facewash-100', name: 'Face Wash 100ml', price: 120, image: './images/products/facewash-100.jpg' },
    { id: 'tissues-100', name: 'Facial Tissues (100 pcs)', price: 50, image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=120&q=80' },
  ],
  frozen: [
    { id: 'icecream-500', name: 'Vanilla Ice Cream 500ml', price: 150, image: 'https://images.unsplash.com/photo-1580910365203-91a832230752?auto=format&fit=crop&w=120&q=80' },
    { id: 'peas-500', name: 'Frozen Peas 500g', price: 80, image: 'https://images.unsplash.com/photo-1580910365203-91a832230752?auto=format&fit=crop&w=120&q=80' },
    { id: 'chicken-1kg', name: 'Frozen Chicken 1kg', price: 300, image: 'https://images.unsplash.com/photo-1580910365203-91a832230752?auto=format&fit=crop&w=120&q=80' },
    { id: 'pizza-1', name: 'Frozen Pizza', price: 200, image: 'https://images.unsplash.com/photo-1580910365203-91a832230752?auto=format&fit=crop&w=120&q=80' },
    { id: 'fries-500', name: 'Frozen French Fries 500g', price: 100, image: 'https://images.unsplash.com/photo-1580910365203-91a832230752?auto=format&fit=crop&w=120&q=80' },
    { id: 'nuggets-400', name: 'Chicken Nuggets 400g', price: 180, image: 'https://images.unsplash.com/photo-1580910365203-91a832230752?auto=format&fit=crop&w=120&q=80' },
    { id: 'paratha-6', name: 'Frozen Paratha (6 pcs)', price: 120, image: 'https://images.unsplash.com/photo-1580910365203-91a832230752?auto=format&fit=crop&w=120&q=80' },
    { id: 'vegetables-500', name: 'Mixed Frozen Vegetables 500g', price: 90, image: 'https://images.unsplash.com/photo-1580910365203-91a832230752?auto=format&fit=crop&w=120&q=80' },
    { id: 'fish-500', name: 'Frozen Fish Fillets 500g', price: 250, image: 'https://images.unsplash.com/photo-1580910365203-91a832230752?auto=format&fit=crop&w=120&q=80' },
  ],
  sweets: [
    { id: 'gulabjamun-500', name: 'Gulab Jamun 500g', price: 200, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9f?auto=format&fit=crop&w=120&q=80' },
    { id: 'rasgulla-500', name: 'Rasgulla 500g', price: 180, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9f?auto=format&fit=crop&w=120&q=80' },
    { id: 'laddu-500', name: 'Motichoor Laddu 500g', price: 250, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9f?auto=format&fit=crop&w=120&q=80' },
    { id: 'barfi-500', name: 'Kaju Barfi 500g', price: 400, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9f?auto=format&fit=crop&w=120&q=80' },
    { id: 'jalebi-500', name: 'Jalebi 500g', price: 150, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9f?auto=format&fit=crop&w=120&q=80' },
    { id: 'peda-500', name: 'Milk Peda 500g', price: 300, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9f?auto=format&fit=crop&w=120&q=80' },
    { id: 'halwa-500', name: 'Gajar Halwa 500g', price: 200, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9f?auto=format&fit=crop&w=120&q=80' },
    { id: 'kheer-500', name: 'Rice Kheer 500g', price: 150, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9f?auto=format&fit=crop&w=120&q=80' },
  ],

  
  // Add for other new categories similarly with 8-10 items each
};

// ... Existing categories and products (keep as is) ...

// New categories with 8-10 products each
productsByCategory.baby = [
  { id: 'diapers-20', name: 'Baby Diapers (20 pcs)', price: 400, image: 'https://images.unsplash.com/photo-1532579853048-ca6786aac551?auto=format&fit=crop&w=120&q=80' },
  { id: 'wipes-80', name: 'Baby Wipes (80 pcs)', price: 150, image: 'https://images.unsplash.com/photo-1532579853048-ca6786aac551?auto=format&fit=crop&w=120&q=80' },
  { id: 'formula-400', name: 'Infant Formula 400g', price: 500, image: 'https://images.unsplash.com/photo-1532579853048-ca6786aac551?auto=format&fit=crop&w=120&q=80' },
  { id: 'lotion-200', name: 'Baby Lotion 200ml', price: 200, image: 'https://images.unsplash.com/photo-1532579853048-ca6786aac551?auto=format&fit=crop&w=120&q=80' },
  { id: 'shampoo-200', name: 'Baby Shampoo 200ml', price: 180, image: 'https://images.unsplash.com/photo-1532579853048-ca6786aac551?auto=format&fit=crop&w=120&q=80' },
  { id: 'oil-100', name: 'Baby Oil 100ml', price: 120, image: 'https://images.unsplash.com/photo-1532579853048-ca6786aac551?auto=format&fit=crop&w=120&q=80' },
  { id: 'powder-200', name: 'Baby Powder 200g', price: 100, image: 'https://images.unsplash.com/photo-1532579853048-ca6786aac551?auto=format&fit=crop&w=120&q=80' },
  { id: 'food-200', name: 'Baby Food Jar 200g', price: 80, image: 'https://images.unsplash.com/photo-1532579853048-ca6786aac551?auto=format&fit=crop&w=120&q=80' },
  { id: 'bibs-5', name: 'Baby Bibs (5 pcs)', price: 150, image: 'https://images.unsplash.com/photo-1532579853048-ca6786aac551?auto=format&fit=crop&w=120&q=80' },
  { id: 'toys-rattle', name: 'Baby Rattle Toy', price: 100, image: 'https://images.unsplash.com/photo-1532579853048-ca6786aac551?auto=format&fit=crop&w=120&q=80' },
];

productsByCategory.pet = [
  { id: 'dogfood-5kg', name: 'Dog Food 5kg', price: 800, image: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&w=120&q=80' },
  { id: 'catfood-2kg', name: 'Cat Food 2kg', price: 500, image: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&w=120&q=80' },
  { id: 'treats-200', name: 'Pet Treats 200g', price: 150, image: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&w=120&q=80' },
  { id: 'litter-5kg', name: 'Cat Litter 5kg', price: 300, image: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&w=120&q=80' },
  { id: 'shampoo-250', name: 'Pet Shampoo 250ml', price: 200, image: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&w=120&q=80' },
  { id: 'toy-ball', name: 'Pet Toy Ball', price: 100, image: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&w=120&q=80' },
  { id: 'leash', name: 'Dog Leash', price: 250, image: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&w=120&q=80' },
  { id: 'bowl', name: 'Pet Feeding Bowl', price: 150, image: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&w=120&q=80' },
  { id: 'bed-small', name: 'Small Pet Bed', price: 500, image: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&w=120&q=80' },
];

productsByCategory.cleaning = [
  { id: 'detergent-1kg', name: 'Laundry Detergent 1kg', price: 200, image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=120&q=80' },
  { id: 'dishwash-500', name: 'Dishwashing Liquid 500ml', price: 100, image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=120&q=80' },
  { id: 'floorcleaner-1l', name: 'Floor Cleaner 1L', price: 150, image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=120&q=80' },
  { id: 'glasscleaner-500', name: 'Glass Cleaner 500ml', price: 120, image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=120&q=80' },
  { id: 'sponge-5', name: 'Cleaning Sponges (5 pcs)', price: 80, image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=120&q=80' },
  { id: 'trashbags-30', name: 'Trash Bags (30 pcs)', price: 100, image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=120&q=80' },
  { id: 'bleach-1l', name: 'Bleach 1L', price: 90, image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=120&q=80' },
  { id: 'airfreshener', name: 'Air Freshener Spray', price: 150, image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=120&q=80' },
  { id: 'gloves-10', name: 'Disposable Gloves (10 pcs)', price: 50, image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=120&q=80' },
];

productsByCategory.health = [
  { id: 'vitamins-60', name: 'Multivitamin Tablets (60 pcs)', price: 300, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=120&q=80' },
  { id: 'bandaids-20', name: 'Band-Aids (20 pcs)', price: 50, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=120&q=80' },
  { id: 'painrelief-10', name: 'Pain Relief Tablets (10 pcs)', price: 80, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=120&q=80' },
  { id: 'antacid-20', name: 'Antacid Tablets (20 pcs)', price: 60, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=120&q=80' },
  { id: 'mask-50', name: 'Face Masks (50 pcs)', price: 200, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=120&q=80' },
  { id: 'sanitizer-100', name: 'Hand Sanitizer 100ml', price: 50, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=120&q=80' },
  { id: 'thermometer', name: 'Digital Thermometer', price: 300, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=120&q=80' },
  { id: 'supplement-30', name: 'Protein Supplement 30g', price: 100, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=120&q=80' },
  { id: 'eyedrops-10', name: 'Eye Drops 10ml', price: 80, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=120&q=80' },
  { id: 'coughsyrup-100', name: 'Cough Syrup 100ml', price: 120, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=120&q=80' },
];

// Flatten for home and search (update if needed)
export const allProducts = Object.values(productsByCategory).flat();
