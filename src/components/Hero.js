import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="heading">
        <h1>DIVYA</h1>
        <h1>PORTFOLIO</h1>
      </div>
      <div className="bottom-section">
        <div className="first">
          <h3>Full<span> Stack </span> Developer</h3>
          <h3>Based <span>In</span> India</h3>
        </div>
        <div className="second">
          <div className="tech-stack">
            <div className="title">
              <h3>Tech Stack</h3>
            </div>
            <div className="list">
              <h4>HTML</h4>
              <h4>CSS</h4>
              <h4>JavaScript</h4>
            </div>
          </div>
          <div className="about">
            <div className="title">
              <h3>About</h3>
              <p className="aboutpara">
                I started out as a JEE aspirant, but things didn't go as planned. But hey, failure builds character. I'm now channeling that same energy into something I truly enjoy—coding. These days, I'm diving into web development and doing my best to make sense of JavaScript (we're not best friends yet, but we're working on it). If you've read this far—thanks. Stick around. The glow-up is loading. 🚀
              </p>
            </div>
          </div>
        </div>
        <div className="third">
          <img 
            src="https://www.albawaba.com/sites/default/files/styles/d08_traditional/public/2021-09/44500662_196334121277191_6428605897990834364_n.jpg?h=87483978&itok=8pJlTE0V" 
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
