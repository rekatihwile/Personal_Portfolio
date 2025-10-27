import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BallCatchingProject from './pages/BallCatchingProject';
import UkuleleStrapProject from './pages/UkuleleStrapProject';
import LaserWeeding from './pages/ResearchLab';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#171a1c] text-gray-100">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Project routes */}
            <Route path="/projects/ball-catching" element={<BallCatchingProject />} />
            <Route path="/projects/ukulele-strap" element={<UkuleleStrapProject />} />
            <Route path="/projects/ResearchLab" element={<LaserWeeding />} />
            {/* Back-compat for old links */}
            <Route
              path="/BallCatchingProject"
              element={<Navigate to="/projects/ball-catching" replace />}
            />
            <Route
              path="/UkuleleStrapProject"
              element={<Navigate to="/projects/ukulele-strap" replace />}
            />
            <Route
              path="/DiscordAIBot"
              element={<Navigate to="/projects/discord-ai-bot" replace />}
            />
            {/* 404 */}
            <Route path="*" element={<div className="px-6 py-20 text-center">Not found.</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
