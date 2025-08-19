import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { Toaster } from 'react-hot-toast';
import CategoriesPage from './pages/CategoriesPage';
import PosLayout from './layouts/PosLayout';
import CategotyProducts from './pages/CategotyProducts';

export default function App() {
  return (
    <div className="w-full h-dvh flex overflow-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/pos" element={<PosLayout />}>
            <Route index element={<CategoriesPage />} />
            <Route path="categories/:categoryId" element={<CategotyProducts />}></Route>
            <Route path="cart" />
          </Route>
          <Route path="/admin" element={<h1>Admin Page</h1>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<h1>404 | Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
