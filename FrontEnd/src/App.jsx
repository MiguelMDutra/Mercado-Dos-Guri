
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/login/login";
import Registro from "./Components/registro/registro";
import Products from "./App.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
