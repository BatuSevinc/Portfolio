//useContext
import { useContext } from "react";
//Context
import { MaintenanceContext } from "../../context/Maintenance";
//React Router DOM
import { NavLink } from "react-router-dom";
//Css
import "./workCard.css";
const WorkCard = (props) => {

  const { language } = useContext(MaintenanceContext);

  return (
    <div className="project-card">
      <img src={props.image} alt="image Project" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        {
          language ?
          <p>{props.descEN}</p>
          :
          <p>{props.descTR}</p>
        }
        <div className="pro-btns">
          <NavLink to={props.view} target="_blank" rel="noopener noreferrer" className="btn pro-btn-left">
            View
          </NavLink>
          <NavLink to={props.source} target="_blank" rel="noopener noreferrer" className="btn pro-btn-right">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
