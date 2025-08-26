export const productsByCategory = {
  dairy: [ // Key must be lowercase 'dairy'
    { id: 'milk-500', name: 'Toned Milk 500ml', price: 32, image: 'https://images.unsplash.com/photo-1589985289077-3873e84555d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80' },
    { id: 'paneer-200', name: 'Fresh Paneer 200g', price: 80, image: 'https://images.unsplash.com/photo-1562095241-8c6714fd0708?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80' },
    // Add more for testing
    { id: 'curd-500', name: 'Curd 500g', price: 40, image: 'https://images.unsplash.com/photo-1584277848872-03c8c69a17f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80' },
  ],
  fruits: [
    { id: 'apple-1kg', name: 'Fresh Apples 1kg', price: 150, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80' },
    // ... other items ...
  ],
  // Ensure all categories from categories.js have entries here (add empty arrays if needed)
  snacks: [ /* items */ ],
  bakery: [ /* items */ ],
  beverages: [ /* items */ ],
  household: [ /* items */ ],
}

// Flatten for home page
export const allProducts = Object.values(productsByCategory).flat()
