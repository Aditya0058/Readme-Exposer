import './App.css'
import './variable.css'
import Header from './components/Header'
import Home from './pages/Home'
import Result from './pages/Result'
import { Routes, Route, Navigate } from 'react-router-dom';



function App() {
  return (
    <>
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/result" element={<Result/>} />
            <Route path="*" element={<div>404 — Not Found <a href="/home"><button>Navigate to Home Page</button></a></div>}/> 
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
