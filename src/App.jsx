import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import ContactPage from "./pages/ContactPage";
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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin" element={<Dashboard />} />
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" />
    </BrowserRouter>
  )
}

export default App;
