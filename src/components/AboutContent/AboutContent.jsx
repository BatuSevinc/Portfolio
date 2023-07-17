//React Router DOM
import { Link } from "react-router-dom";
//Images
import React1 from "../../images/react1.jpg";
import React2 from "../../images/react2.webp";
//Css
import "./aboutContent.css";

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am Batuhan Sevinç, 24 years old and graduated from Civil
          Engineering. I am eager to learn new things, value ethical principles,
          and see myself as a confident, problem-solving and results-oriented
          team player. I strive to be one of the best professionals in my field
          by constantly improving myself. With my increasing interest in the
          software industry, I decided to advance my career in this field. I
          honed my skills by working on practical projects and constantly
          researching to expand my knowledge. I don't like to be stuck with
          limits, so I want to contribute to a company that will push the limits
          and always move forward.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
