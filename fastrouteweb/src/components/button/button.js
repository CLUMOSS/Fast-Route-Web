// CustomButton.js

import React from 'react';

const CustomButton = ({ label, onClick }) => {
  return (
    <button
      style={{
        display: 'inline-flex',
        padding: '19px 50px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '10px',
        background: 'var(--Medium-Brown, #724E31)',
        boxShadow:
          '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        color: 'white', // Set text color to white
      }}
      onClick={onClick}
    >
      {label || 'Book Now!'} {/* Default to 'Book Now' if label is not provided */}
    </button>
  );
};

export default CustomButton;
