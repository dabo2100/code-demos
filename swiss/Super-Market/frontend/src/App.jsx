import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import ReportPage from "./pages/report-page";
import PosPage from "./pages/pos-page";

export default function App() {
  return (
    <div className="col-12 app">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<LoginPage />} />
            <Route path="report" element={<ReportPage />} />
            <Route path="pos" element={<PosPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
