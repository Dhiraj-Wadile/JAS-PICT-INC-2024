// UnderConstructionPopup.js

import React from 'react';
import './UnderConstructionPopup.css';

const UnderConstructionPopup = ({ onClose, title, content }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default UnderConstructionPopup;
