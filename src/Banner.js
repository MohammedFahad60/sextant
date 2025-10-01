import React from 'react';
import './Banner.css'; // Optional for styling

function Banner({ title }) {
  return (
    <header className="banner">
      <h1>{title}</h1>
    </header>
  );
}

export default Banner;
