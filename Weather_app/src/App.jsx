import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
