import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import  MaintenanceContext  from './context/Maintenance.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MaintenanceContext>
    <App />
  </MaintenanceContext>
  </BrowserRouter>,
)
