import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomaPage";

export default function App() {
  return (
    <div className="App col-12 container d-flex flex-column">

      <BrowserRouter>
        <nav className="col-12 bg-dark text-white">
          <Link to="./">Home</Link>
          <Link to="./about.php">about</Link>
          <Link to="./blog.ammar">blog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<h1>Shop Page</h1>}></Route>
          <Route path="/shop/pcs" element={<h1>PCs Page</h1>}></Route>
          <Route path="/shop/pcs/laptops" element={<h1>laptops Page</h1>}></Route>
          <Route path="/shop/pcs/laptops/:id" element={<h1>LapTop Details Page</h1>}></Route>
          <Route path="/shop/pcs/desktops" element={<h1>desktops Page</h1>}></Route>
          <Route path="/shop/phones" element={<h1>Phones Page</h1>}></Route>



          <Route path="/blog.ammar" element={<h1>Blog PAge</h1>}></Route>
          <Route path="*" element={<h1> PAge 404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// Static Route
// Nested Routes
// dynamic Route

// Browser Router

// Home
// About
// Contact
// 404 Page
// Router