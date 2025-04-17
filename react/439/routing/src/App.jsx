import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Post from "./Post";
export default function App() {
  return (
    <div className="App">
      <Post likesNo={15} content={"الحقوني الجو حر"}/>
      <Post likesNo={30} content={"شكراً لكل اللي سألو عليا"}/>
      <Post likesNo={20} content={"انا لله وانا اليه راجعون"}/>
      <Post likesNo={10} content={"قطتي ماتت"}/>


      <div className="col-12 bg-white shadow rounded-5">
        <h1>الجو حر جداً النهاردة</h1>
        <p>Likes : 12</p>
        <p>Comments : 20</p>
      </div>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<h1>Home Page</h1>}></Route>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="register" element={<h1>Register Page</h1>}></Route>
            <Route path="*" element={<h1>Page 404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}


// API
// Status Code 
// Axios
// EndPoint
// domain + EndPoint
// Method 
// GET
// POST 
// UPDATE / PUT
// DELETE ==OPTIONS
