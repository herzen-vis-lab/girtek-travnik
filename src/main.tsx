import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './pages/Landing/Landing.tsx'
import TravnikPage from './pages/ai/TravnikPage.tsx'
import './fonts.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
)
