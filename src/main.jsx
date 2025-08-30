/*StrictMode } from 'react'*/
import React from 'react'
import ReactDOM from 'react-dom/client'
/*import  (eateRoot } from 'react-dom/client'*/ 
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- 2. ENVUELVE APP */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
