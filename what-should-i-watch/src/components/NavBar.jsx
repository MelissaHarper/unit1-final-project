import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/logo.png";
import Logo2 from "../assets/images/logo2.png";
import "../styles/NavBar-Footer.css";

function NavBar() {
  const [image, setImage] = useState(Logo);

  function handleClick() {
    if (image === Logo) {
      setImage(Logo2);
    } else {
      setImage(Logo);
    }
  }

  return (
    <div className="navbar">
      <div className="leftSide"></div>
      <img className="nav-logo" src={image} onClick={handleClick} />
      <p className="siteName">What Should I Watch</p>
      <div className="rightSide"></div>
      <Link to="/">Home</Link>
      <Link to="/feedback">Feedback</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default NavBar;
