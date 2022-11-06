import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'


import { ContextProvider } from './context/Context'
import { initialState } from './context/initialState'
import reducer from './context/reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>
)
