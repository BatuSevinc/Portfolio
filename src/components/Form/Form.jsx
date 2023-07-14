//UseContext
import { useContext } from 'react';
//Context
import {MaintenanceContext} from '../../context/Maintenance';
//Css
import './form.css'

const Form = () => {
  const{maintenance} = useContext(MaintenanceContext)
  return (
    <div className='form'>
        <form>
            <label htmlFor='name'>Your Name</label>
            <input type="text"  placeholder='Batuhan Sevinç'/>
            <label htmlFor='email'>Email</label>
            <input type="email" placeholder='batusvnc@outlook.com'/>
            <label htmlFor="subject">Subject</label>
            <input type="text" placeholder='I want to work with you'/>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="6" placeholder='Hi, I need you in my team.'/>
<button className='btn'>Submit</button>
      {
        maintenance &&
        <small className='maintenance'> <b>! ! !</b> We are currently unable to provide service as it is under maintenance.</small>
      }
        </form>
    </div>
  )
}

export default Form