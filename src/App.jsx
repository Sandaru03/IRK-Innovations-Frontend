import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectOverview from "./pages/ProjectOverview";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./Frontend/Adminpanel/admin/Dashboard";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectOverview />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin" element={<Dashboard />} />
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" />
    </BrowserRouter>
  )
}

export default App
