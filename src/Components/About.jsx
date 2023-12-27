

export default function About() {
  return (
    <div className="about" id='about'>
      <div className="about-us">
        <h2>Our Learnings:</h2>
        <p>Welcome to our hands-on Web Development Classes. Explore the MERN stack – MongoDB, Express.js, React.js, and Node.js – and master real-world web app development. Join us on this immersive journey to unleash your full potential as a web developer.</p>
      </div>

      <div className="cards-container">
        <div className="card card1">
          <h3>Project-based Learning</h3>
          <p>Hands-on projects for real-world applications.</p>
        </div>
        <div className="card card2">
          <h3>MERN Stack Mastery</h3>
          <p>Dive into full-stack development with MERN.</p>
        </div>
        <div className="card card3">
          <h3>Creative Environment</h3>
          <p>Inspiring community fostering innovation.</p>
        </div>
        <div className="card card4">
          <h3>Stay Ahead</h3>
          <p>Explore the latest web technologies.</p>
        </div>
      </div>
    </div>
  );
}
