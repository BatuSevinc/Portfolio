//React Router DOM
import { Link } from "react-router-dom";
//Images
import IntroImg from "../../images/intro-bg.jpg";
import React from '../../images/react.jpg'
import Bootstrap from '../../images/bootstrap.jpg'
import Css from '../../images/css.png'
import JavaScript from '../../images/javaScript.png'
import Tailwind from '../../images/tailwind.jpg'
import Html5 from '../../images/html5.jpg'
//Css
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I AM <i style={{color:'rgb(248, 217, 15)'}}> BATUHAN SEVİNÇ</i></p>
        <h1>Front End Developer.</h1>
        <div>
          <Link className="btn" to={"/project"}>
            Project
          </Link>
          <Link className="btn btn-light" to={"/contact"}>
            Contact
          </Link>
        </div>
        <div className="skills">
          <img src={React} alt="" />
          <img src={JavaScript} alt="" />
          <img src={Bootstrap} alt="" />
          <img src={Tailwind} alt="" />
          <img src={Css} alt="" />
          <img src={Html5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
