import React, { useState } from 'react';
import './flips.css';

const Flip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTossing, setIsTossing] = useState(false);

  const handleToss = () => {
    setIsTossing(true); 
    let tossCount = 0;

    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev); 
      tossCount++;

      
      if (tossCount > Math.floor(Math.random() * 6 + 5)) {
        clearInterval(interval);
        setIsTossing(false);
      }
    }, 200); 
  };

  return (
    <div className="container">
      <h1>Vimla Toss</h1>

      <div className={`flip-card ${isFlipped ? 'flipped' : ''} ${isTossing ? 'tossing' : ''}`}>
        <div className="flip-card-inner">
          
          <div className="flip-card-front">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhguCzT7yFkLHqenwIjheCPCYD5b5N-DvKiAl0ubSisX0W5eyBwHGYehFSh_F3t59rJI&usqp=CAU"
              alt="Front"
            />
          </div>
          
          <div className="flip-card-back">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRiylxqVV9MjHmbkajA9C8TPtvqvTs-Mzvg&s"
              alt="Back"
            />
          </div>
        </div>
      </div>

      <button className="flip-button" onClick={handleToss} disabled={isTossing}>
        {isTossing ? 'Tossing...' : 'Toss Coin'}
      </button>
    </div>
  );
};

export default Flip;
