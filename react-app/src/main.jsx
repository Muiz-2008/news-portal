// main.jsx — the entry point of the React app
// React reads this file first, then renders App into the <div id="root"> in index.html

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
