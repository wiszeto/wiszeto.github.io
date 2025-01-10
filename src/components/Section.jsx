// Section.jsx
import React, { useState } from 'react';
import '../css/Section.css';

const Section = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`section ${isOpen ? 'open' : ''}`}>
      <div className="section-title" onClick={toggleOpen}>
        <h2>{title}</h2>
        <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="section-content">{children}</div>}
    </div>
  );
};

export default Section;
