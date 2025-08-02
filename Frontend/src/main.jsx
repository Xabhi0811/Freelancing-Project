import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { userProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <userProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
   </userProvider>
  </StrictMode>,
)
