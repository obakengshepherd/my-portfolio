import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Capstone from "./pages/Capstone";
import Project361 from "./pages/Project361";
import EvenMoreProjects from "./pages/EvenMoreProjects";
import Background from "./components/Background";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Background />
      <Navbar /> {/* 👈 Always visible */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/capstone" element={<Capstone />} />
        <Route path="/project361" element={<Project361 />} />
        <Route path="/evenmoreprojects" element={<EvenMoreProjects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
