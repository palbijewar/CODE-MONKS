import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">
          <h1>Code Monks</h1>
        </a>
      </div>

      <div className="nav-items">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
