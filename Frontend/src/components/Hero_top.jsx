import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import '../CSS/componentsCSS/Hero_top.css';

const Hero_top = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="hero-top-section">
      <div className="hero-top-content">
        <h1>
          Bringing People <span className="hero-top-highlight">Together</span>, One Event at a Time
        </h1>
        <p>From concerts to meetups, join communities and create memories that last.</p>

        <div className="hero-top-search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search events, categories, or locations…"
            aria-label="Search events, categories, or locations"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="hero-top-search-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero_top;
