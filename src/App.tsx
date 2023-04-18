import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import JwtParser from "./pages/JwtParser";
import JsonFormater from "./pages/JsonFormater";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/jwt">Jwt</Link>
        <Link to="/json">Json</Link>
      </nav>

      <Routes>
        <Route path="/jwt" element={<JwtParser />}></Route>
        <Route path="/json" element={<JsonFormater />}></Route>
      </Routes>
    </div>
  );
}

export default App;
