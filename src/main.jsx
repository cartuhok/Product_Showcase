import './index.css'
import React, { Suspense } from "react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//StricktMode and Suspense Causing ScrollTrigger not to work properly

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //     <Suspense fallback={null}>
        <App />
  //     </Suspense>
  // </React.StrictMode>
)
