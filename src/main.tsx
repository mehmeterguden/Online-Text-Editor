import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import { HowTo } from './pages/how-to'
import CCompiler from './pages/c-compiler'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nasil-kullanilir/" element={<HowTo />} />
        <Route path="/c-compiler/" element={<CCompiler />} />
      </Routes>
    </Router>
  </React.StrictMode>
) 