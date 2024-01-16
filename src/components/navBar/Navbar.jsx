import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import promoLogo from "../../assets/promodoro2.png"; // Import the image

const Navbar = ({ onLoginClick, onSignupClick, scrollToRefs }) => {
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
          <div>
          <img src={promoLogo} alt="PromoPro Logo" className="logo" />

      <h1>
        <Link to="/">PromoPro</Link>
      </h1>
            </div>
      <ul className="nav-links">
        <li className="link">
          <Link to="/#promodoro-timer" onClick={() => scrollToRef(scrollToRefs.promodoroTimer)}>
            Promodoro-Timer
          </Link>
        </li>
        <li className="link">
          <Link to="/#task-manager" onClick={() => scrollToRef(scrollToRefs.taskManager)}>
            Task-Manager
          </Link>
        </li>
        <li className="link">
          <Link to="/#speech-to-text" onClick={() => scrollToRef(scrollToRefs.speechToText)}>
            Speech-To-Text
          </Link>
        </li>
        <li className="link">
          <Link to="/#music-player" onClick={() => scrollToRef(scrollToRefs.musicPlayer)}>
            Music-Player
          </Link>
        </li>
      </ul>
      <div className="icons">
        <i className="fas fa-chart-pie"></i>
        <i className="fas fa-cog"></i>
        <button className="login" id="nav" onClick={onLoginClick}>
          Login
        </button>
        <button className="signup" id="nav" onClick={onSignupClick}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
