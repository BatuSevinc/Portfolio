//React Router DOM
import { Link } from "react-router-dom";
//Images
import IntroImg from "../../images/intro-bg.jpg";
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
      </div>
    </div>
  );
};

export default Hero;
