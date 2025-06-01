import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

export default function App() {
  return (
    <div className="App d-flex flex-column container p-4">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
