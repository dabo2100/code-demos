import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
import EmployeeList from './pages/Employee';
import EmployeeDetails from './pages/EmployeeDetails';
import Dashbaord from './pages/Dashbaord';
import NewEmployee from './pages/NewEmployee';

export default function App() {
  return (
    <div className="w-full h-[100vh]">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashbaord />} />

          <Route path="/employee">
            <Route index element={<EmployeeList />} />
            <Route path="new" element={<NewEmployee />} />
            <Route path=":employeeId" element={<EmployeeDetails />} />
          </Route>
          {/* I will Plan Attendance Routes - I Will Plan Reports Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 | Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// Estimated Design
// URL => domain/path => Element
// System Architecture
// Flow Business
// Routes - Pages
// Company - Empolyees - Attendance System
// Report - total attendace - rates
// Profile for Admin
// Dashboard (using strapi)
// Page For HR To Contorl Center (Days of Attendance - Working Time - Limit Of Attedance Time - cretira )
// Login Page
// Table of Employees (Read - Add New - delete - Edit - show ) Protected (HR Company)
// Daily Form
// search input => all Employees (Form for atteands)
// Report => Table (Print as pdf - printer) - api backend excel
// We Will Create Backend for this system using strapi
// Profile For employee
// Features [Admin User - Empolyee - Stackholder - Attendace]
// Routes
// Shaered State
// Proteced - Authority

// SPA (Single Page Application) - No Need For HTML Files (Real Doms)
// Virtual Dom
// [Pages] - react-router-dom
// domain / path ==> element
// www.attenace.com/
// www.attenace.com/login
// www.attenace.com/report
// <BrowserRouter></BrowserRouter>

// Type Of Routes (Shop)

// Static Route
// /shop [all-products]

// /employee

// Nested Route
// /shop/men
// /shop/women

// /employee/1
// /employee/2
// /employee/3
// /employee/4
// /employee/5

// Dynaimc Route [nested]
// /employee/:id/attendace
// /employee/:id/rates
// /employee/:id/deduction

// shop/:cat_name/:id

// Protected Route (navigation)

// Layout / outlet
