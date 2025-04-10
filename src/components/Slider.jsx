import React from 'react';

export default function Slider() {
  return (
    <div 
      className="spinner-grow position-absolute top-50 start-50 translate-middle p-3"
      style={{ width: '3rem', height: '3rem', zIndex: 9999 }} 
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
