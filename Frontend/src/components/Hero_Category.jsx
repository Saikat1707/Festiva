import React from 'react'
import '../CSS/componentsCSS/HeroCategory.css'
const Hero_Category = () => {

    const categories = [
        { name: "Music", icon: "🎵", count: 124 },
        { name: "Sports", icon: "⚽", count: 92 },
        { name: "Food", icon: "🍔", count: 78 },
        { name: "Arts", icon: "🎨", count: 56 },
    ];

  return (
    <>
        <h2>Browse by Category</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <div key={category.name} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.count} events</p>
            </div>
          ))}
        </div>
    </>
  )
}

export default Hero_Category