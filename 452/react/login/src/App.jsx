import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="w-full h-dvh bg-gray-950 text-white">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<h1>Register Page</h1>} />
          </Route>
          <Route path="*" element={<h1>Page Not Found | Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
