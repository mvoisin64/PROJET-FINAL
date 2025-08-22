import './App.css'
import ProjectPage from './Components/ProjectPage/ProjectPage'
import HomePage from './Components/HomePage.jsx'
import NotFound from './Components/NotFound.jsx'
import {Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProjectPage/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
      </Routes>
  )
}

export default App
