import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMePage from './pages/AboutMePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<AboutMePage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
    </>
  )
}
