import './App.css'
import ProjectPage from './Components/ProjectPage/ProjectPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage.jsx'
import NotFound from './Components/NotFound.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProjectPage/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
