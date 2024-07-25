import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Components/Login";
import SamplePage from "./Components/samplePage";
import { TodoWrapper } from "./Components/TodoWrapper";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Register />}></Route>
          <Route path="/todo" element={<TodoWrapper />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
