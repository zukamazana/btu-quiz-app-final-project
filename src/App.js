import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Quizz from "./pages/quizz";
import History from "./pages/history";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizz" element={<Quizz />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
