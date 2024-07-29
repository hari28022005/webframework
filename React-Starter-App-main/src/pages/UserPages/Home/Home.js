import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className="hero-container">
          <div className="hero-content">
            <h1>Efficient Staff Scheduling</h1>
            <p>Organize your workforce effortlessly and stay on top of your schedule.</p>
            <button className="hero-button">Get Started</button>
          </div>
        </div>
      );
}

export default Home
