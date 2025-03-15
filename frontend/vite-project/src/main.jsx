import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div  className="bg-black"style={{width:"800px",height:"800px"}}></div>
  </StrictMode>,
)
