//Images
import { NavLink } from 'react-router-dom'
import Project1 from '../../images/project1.png'
//Css
import './workCard.css'

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.image} alt="image Project" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
      <p>{props.desc}</p>
      <div className="pro-btns">
        <NavLink to={props.view} className='btn'>
          View
        </NavLink>
        <NavLink to={props.source} className='btn'>
          Source
        </NavLink>
      </div>
    </div>
  </div>
  )
}

export default WorkCard