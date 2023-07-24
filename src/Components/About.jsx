import React from 'react';

export default function About() {
  return (
    <div className="about">

      <div className="about-us">
        <div className="about-title">
          <h2>Our Learnings :</h2>
        </div>
        <div className="about-pera">
          <p>Welcome to our Web Development Classes, where we believe in hands-on, project-based learning. Dive deep into the MERN stack – MongoDB, Express.js, React.js, and Node.js – and gain real-world skills to build dynamic web applications. Join us on this immersive journey and unleash your full potential as a web developer.</p>
        </div>
      </div>

      <div className="cards-container">
        <div className="card card1">
          <h3>Project-based Learning</h3>
          <p>Hands-on projects to strengthen your skills and build real-world applications.</p>
        </div>
        <div className="card card2">
          <h3>MERN Stack Mastery</h3>
          <p>Dive deep into MongoDB, Express.js, React.js, and Node.js to become a full-stack pro.</p>
        </div>
        <div className="card card3">
          <h3>Creative Environment</h3>
          <p>Inspiring and collaborative community fostering innovation and creativity.</p>
        </div>
        <div className="card card4">
          <h3>Stay Ahead</h3>
          <p>Learn the latest web technologies to excel in the ever-changing digital landscape.</p>
        </div>
      </div>
    </div>
  );
}
