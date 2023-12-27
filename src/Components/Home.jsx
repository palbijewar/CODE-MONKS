
export default function Home() {
  return (
    <div className="home" id="home">
      <div className="intro">
        <h1 className="title">Hello, Programmers!</h1>
        <p className="pera">
        Step into a captivating world of Web Development Classes! Explore limitless creativity and advanced tech. Hone your coding skills with our expert-led courses, from basics to brilliance. Join our vibrant community, fuel innovation, and craft the web of tomorrow!
        </p>
        <a href="/services" className="cta-button">Explore Services</a>
      </div>
      <div className="hero">
        <img src="/images/hero.png" alt="hero" />
      </div>
    </div>
  );
}
