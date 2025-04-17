import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPage from "./ShopPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<h1>Home Page</h1>} />
            <Route path="shop" element={<ShopPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

