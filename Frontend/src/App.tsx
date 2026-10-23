import './App.css'
import './variable.css'
import Header from './components/Header'
// import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="main-content">
          {/* <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home onCreateChat={createChat} />} />
            </Routes> */}
        </div>
      </div>
    </>
  )
}

export default App
