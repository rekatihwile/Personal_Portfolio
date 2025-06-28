import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import BallCatchingProject from "./pages/BallCatchingProject";
import UkuleleStrapProject from "./pages/UkuleleStrapProject";
import DiscordAIBot from "./pages/DiscordAIBot";
function App() {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          color: "#cbdae2",
          backgroundColor: "#454e53",
        }}
      >
        <Link to="/" style={{ color: "#cbdae2", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "#cbdae2", textDecoration: "none" }}>
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="BallCatchingProject" element={<BallCatchingProject />} />
        <Route path="UkuleleStrapProject" element={<UkuleleStrapProject />} />
        <Route path="DiscordAIBot" element={<DiscordAIBot />} />
      </Routes>
    </Router>
  );
}

export default App;
