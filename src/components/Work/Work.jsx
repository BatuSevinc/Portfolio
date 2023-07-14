//UseContext
import { useContext } from "react";
//Context
import { MaintenanceContext } from "../../context/Maintenance";
//Components
import WorkCard from "../WorkCard/WorkCard";
import WorkCardData from "../../helpers/WorkCardData";
//Css
import './work.css'
const Work = ({ showAll }) => {
  const { language,setLanguage } = useContext(MaintenanceContext);

  return (
    <div className="card-container">
      <h1 className="project-heading">Projects</h1>
      <div className="language-buttons">
      <button className="btn" onClick={()=>setLanguage(false)}>TR</button>
        <button  className="btn" onClick={()=>setLanguage(true)}>EN</button>
      </div>
      <div className="project-container">
        {WorkCardData.map((value, index) => {
          return (
            <WorkCard
              key={index}
              image={value.image}
              title={value.title}
              descTR={value.descTR}
              descEN={value.descEN}
              view={value.view}
              source={value.source}
              language={language}
              setLanguage={setLanguage}
            />
          );
        }).slice(0, showAll ? undefined : 3)}
      </div>
    </div>
  );
};

export default Work;