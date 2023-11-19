//|| PAGES
import Home from "./pages/Home/Home";
import Storytelling from "./pages/Storytelling/Storytelling";
import DirectionMap from "./pages/DirectionMap/TourismMap";

//|| LIBRARY
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// || STYLE
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/storytelling" element={<Storytelling />} />
          <Route path="/tourism-map" element={<DirectionMap />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
