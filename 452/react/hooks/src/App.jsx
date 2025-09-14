import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import PostsPage from './pages/PostsPage';

export default function App() {
  return (
    <div className="w-full flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// props as Attr
