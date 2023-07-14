import "./hero2.css";

const Hero2 = ({title,desc}) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>
            {title}
        </h1>
        <p>
            {desc}
        </p>
      </div>
    </div>
  );
};

export default Hero2;
