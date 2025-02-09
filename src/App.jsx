import React from "react";
import { Route, Routes } from "react-router-dom";

// for general
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HandMadeGuidePage from "./pages/app/HandMadeGuidePage";
import OrgainzationPage from "./pages/OrgainzationPage";
import Hero from "./pages/Hero";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Footer from "./Footer";
import ErrorPage from "./components/ErrorPage";
import { Toaster } from "react-hot-toast";

// for user app
import UserApp from "./pages/app/UserApp";
import AppFeed from "./pages/app/AppFeed";
import ProtectedRoute from "./components/ProtectedRoute";
import SaveCollections from "./pages/app/SaveCollections";
import Settings from "./pages/app/Settings";
import MarketPage from "./pages/app/MarketPage";
import BlogPage from "./pages/app/BlogPage";

// for admin
import Admin from "./pages/admin/Admin";
import AdminFeed from "./pages/admin/AdminFeed";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminMarketPage from "./pages/admin/AdminMarketPage";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminHandMadeGuidePage from "./pages/admin/AdminHandMadeGuidePage";
import FeedbackPage from "./pages/admin/FeedbackPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        {/* <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} /> */}
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* just for only admins  */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route path="feed" element={<AdminFeed />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="market" element={<AdminMarketPage />} />
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="setting" element={<AdminSettings />} />
          <Route path="hand-made-guide" element={<AdminHandMadeGuidePage />} />
        </Route>

        {/* for user application  */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <UserApp />
            </ProtectedRoute>
          }
        >
          <Route path="feed" element={<AppFeed />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="save" element={<SaveCollections />} />
          <Route path="market" element={<MarketPage />} />
          <Route path="setting" element={<Settings />} />
          <Route path="hand-made-guide" element={<HandMadeGuidePage />} />
        </Route>
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="/organization" element={<OrgainzationPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
