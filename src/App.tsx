import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Layout from './components/Layout/Layout';
import About from "./About/About";
import { ImageGrid } from "./ImageGallery/ImageGrid";
import Contact from "./Contact/Contact";


function App() {

  return (
        <Router>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/imagegrid" element={<ImageGrid />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
  )
}

export default App
