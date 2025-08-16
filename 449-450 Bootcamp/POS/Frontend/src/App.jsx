import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="w-full h-dvh flex overflow-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/pos">
            <Route index element={<h1>Show All Categories</h1>} />
            <Route path="categories/:categoryId" element={<h1>Show Products in The Category</h1>}></Route>
          </Route>
          <Route path="/admin" element={<h1>Admin Page</h1>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<h1>404 | Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
