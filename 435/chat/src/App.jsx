import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";

export default function App() {
  return (
    <div className="col-12 App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<h1>Home Page</h1>} />
            <Route path="users" element={<UsersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
