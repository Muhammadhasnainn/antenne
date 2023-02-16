import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from "./Components/Map";
import Home from "./Pages/Home";
import Question from "./Components/Question";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />}/>
        <Route path="/questions" element={<Question />}/>
      </Routes>
    </Router>
  );
}

export default App;
