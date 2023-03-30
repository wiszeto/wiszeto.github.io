import React from 'react';
import '../css/test.css';

function Cards() {
  const cards = [
    { title: 'EE 306', labs: ['Lab 1', 'Lab 2', 'Lab 3', 'Lab 4'] },
    { title: 'EE 308', labs: ['Lab 1', 'Lab 2', 'Lab 3', 'Lab 4'] },
    { title: 'EE 312', labs: ['Lab 1', 'Lab 2','Lab 3', 'Lab 4'] },
  ];

  return (
    <div className='card1-grid'>
      {cards.map((card, index) => (
        <div key={index} className='card1'>
          <div className='card1-header'>
            <h2>{card.title}</h2>
          </div>
          <ul className='card1-body'>
            {card.labs.map((lab, index) => (
              <li key={index}>{lab}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Cards;
