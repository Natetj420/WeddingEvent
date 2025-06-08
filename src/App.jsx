import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rsvp from "./pages/Rsvp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rsvp" element={<Rsvp />} />
    </Routes>
  );
}

export default App;