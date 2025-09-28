import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import MainLayout from './MainLayout';
import Loader from './components/Loader';
import { loader } from './store';

export default function App() {
  // const [loader, setLoader] = useState(false);
  const { index } = loader();
  return (
    <div className="w-full h-dvh bg-gray-950 text-white">
      {/* {index ? <Loader /> : null} */}
      {index && <Loader />}
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Nested Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="settings" element={<h1>Settings Page</h1>} />
            <Route path="chat" element={<h1>Chat Page</h1>} />
            <Route path="pos" element={<h1>POS Page</h1>} />
            <Route path="admin" element={<h1>Admin Page</h1>} />
          </Route>

          {/* <static Route */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<h1>Register Page</h1>} />

          <Route path="*" element={<h1>Page Not Found | Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
