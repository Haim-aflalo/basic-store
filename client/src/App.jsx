import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
