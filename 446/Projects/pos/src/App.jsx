import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<h1>Dashboard</h1>} />
            <Route path="login" element={<LoginPage />} />
            <Route path="categories">
              <Route index element={<h1>Show All Categries Page</h1>} />
              <Route
                path=":category_id"
                element={<h1>Show Products into Category Page</h1>}
              />
            </Route>
            <Route path="bills" element={<h1>Show All Bills</h1>} />
          </Route>
          <Route path="*" element={<h1>404 Page | Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
