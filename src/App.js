import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Upload from "./Upload";
import Download from "./download";
import './App.css';
const Home = () => <h2>Welcome to My App 🚀</h2>;

const App = () => {
  return (
    <Router>
      {/* Navigation Menu */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/upload">Upload</Link> |{" "}
        <Link to="/files">View Files</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/files" element={< Download/>} />
      </Routes>
    </Router>
  );
};

export default App;
