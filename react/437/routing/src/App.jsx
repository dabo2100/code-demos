import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
export default function App() {
  return (
    <div className="App col-12">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<h1>Page 404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
// npm i react-router-dom