//Components
import WorkCard from '../WorkCard/WorkCard'
import WorkCardData from '../../helpers/WorkCardData'
//Css
import './work.css'

const Work = ({showAll}) => {
  return (
    <div className='card-container'>
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {
                WorkCardData.map((value,index)=>{
                        return(
                            <WorkCard 
                            key={index}
                            image={value.image}
                            title={value.title}
                            desc={value.desc}
                            view={value.view}
                            source={value.source}
                            />
                        )
                }).slice(0, showAll ? undefined : 3)
            }
        </div>
    </div>
  )
}

export default Work