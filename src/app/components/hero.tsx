
"use client";
import Typewriter from 'typewriter-effect';
import '../../styles/hero.css'
const Hero = () => {
  return (
    <div id="Hero">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-heading">
              Hi, it's <span className="hero-name">Sheza</span>
            </h1>
            <div className="typewriter-container">
              <span>I'm a </span>
              <Typewriter
                options={{
                  strings: ['Web Developer', 'Graphic Designer', 'Web Designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
