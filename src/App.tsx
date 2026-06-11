import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BallCatchingProject from './pages/BallCatchingProject';
import GroceryBaggerProject from './pages/GroceryBaggerProject';
import UkuleleStrapProject from './pages/UkuleleStrapProject';
import { Suspense, lazy } from 'react';
import LaserWeeding from './pages/ResearchLab';
import NotFound from './pages/NotFound';

const Resume = lazy(() => import('./pages/Resume'));
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#171a1c] text-gray-100">
        <Navbar />
        <main className="site-text flex-1 pt-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/resume"
              element={
                <Suspense
                  fallback={
                    <div className="mx-auto w-full max-w-3xl px-6 py-14 sm:px-8">
                      <div className="h-[36rem] animate-pulse rounded-xl border border-white/10 bg-[#0f1213]" />
                    </div>
                  }
                >
                  <Resume />
                </Suspense>
              }
            />
            {/* Project routes */}
            <Route path="/projects/ball-catching" element={<BallCatchingProject />} />
            <Route path="/projects/grocery-bagger" element={<GroceryBaggerProject />} />
            <Route path="/projects/ukulele-strap" element={<UkuleleStrapProject />} />
            <Route path="/projects/laser-weeder" element={<LaserWeeding />} />
            <Route
              path="/projects/ResearchLab"
              element={<Navigate to="/projects/laser-weeder" replace />}
            />
            {/* Back-compat for old links */}
            <Route
              path="/BallCatchingProject"
              element={<Navigate to="/projects/ball-catching" replace />}
            />
            <Route
              path="/UkuleleStrapProject"
              element={<Navigate to="/projects/ukulele-strap" replace />}
            />
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
