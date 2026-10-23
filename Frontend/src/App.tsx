import './App.css'
import './variable.css'
import Header from './components/Header'
import Home from './pages/Home'
// import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <Home />
      </div>
    </>
  )
}

export default App
