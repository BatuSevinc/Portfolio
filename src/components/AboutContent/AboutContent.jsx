//React Router DOM
import { Link } from 'react-router-dom'
//Images
import React1 from '../../images/react1.jpg'
import React2 from '../../images/react2.webp'
//Css
import './aboutContent.css'

const AboutContent = () => {
  return (
    <div className='about-content'>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>
                I'm react front-end developer. I create responsive secure websites for my clients.
            </p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
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
  )
}

export default AboutContent