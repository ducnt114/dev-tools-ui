import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import JwtParser from "./pages/JwtParser";
import JsonFormater from "./pages/JsonFormater";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/jwt" element={<JwtParser />}></Route>
        <Route path="/json" element={<JsonFormater />}></Route>
      </Routes>
    </div>
  );
}

export default App;
