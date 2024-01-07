import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const OTPverification = React.lazy(() => import("pages/OTPverification"));
const AddNewProduct = React.lazy(() => import("pages/AddNewProduct"));
const Aboutproduct = React.lazy(() => import("pages/Aboutproduct"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/aboutproduct" element={<Aboutproduct />} />
          <Route path="/addnewproduct" element={<AddNewProduct />} />
          <Route path="/otpverification" element={<OTPverification />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
