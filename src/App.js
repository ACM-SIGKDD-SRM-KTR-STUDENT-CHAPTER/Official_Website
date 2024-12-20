// src/App.js
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/navbar/NavbarComponent';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import JoinUs from './pages/JoinUs';
import Bylaws from './pages/Bylaws';
import About from './pages/About';
import Faq from './pages/Faq';
import Err from './components/err/Err';
import Blogs from './pages/Blogs';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Projects from './pages/Projects';
import Reports from './pages/Reports';
import Events from './pages/Events';
import Certi from './pages/Certificates';
import Gallery from './pages/Gallery';
import MouseTracker from './components/mousetracker/MouseTracker';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <MouseTracker /> {/* Add MouseTracker component here */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="joinus" element={<JoinUs />} />
        <Route path="bylaws" element={<Bylaws />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Faq />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="projects" element={<Projects />} />
        <Route path="reports" element={<Reports />} />
        <Route path="events" element={<Events />} />
        <Route path="certi" element={<Certi />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<Err />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
