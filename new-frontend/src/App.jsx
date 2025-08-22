import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import BackgroundDotGrid from "./components/BackgroundDotGrid/BackgroundDotGrid";

import VantaBackground from "../yes/VantaBackground/VantaBackground";

// Import page components (you'll need to create these)
import BoardOfMembers from "./pages/BoardOfMembers/BoardOfMembers";
import AuthorGuidelines from "./pages/AuthorGuidelines/AuthorGuidelines";
import PublicationTimeline from "./pages/PublicationProcess/PublicationProcess";
import AcademicBenefits from "./pages/AcademicBenefits/AcademicBenefits";
import IndustryBenefits from "./pages/IndustryBenefits/IndustryBenefits";
import PreviousIssues from "./pages/PreviousIssues/PreviousIssues";
import BankDetails from "./pages/BankDetails/BankDetails";
import AdvertisementTariff from "./pages/AdvertisementTariff/AdvertisementTariff";
import NotFound from "./pages/NotFound/NotFound";
import { useIsMobile } from "./hooks/use-mobile";
import { useIsTab } from "./hooks/use-mobile";
import AppSidebar from "./components/AppSidebar/AppSidebar";
import { SidebarTrigger } from "./components/ui/sidebar";
import { LoginForm } from "./pages/Login/Login";
import { SignupForm } from "./pages/Signup/Signup";
import { ThemeProvider } from "./components/theme-provider";
import { SignIn, SignUp, useAuth, useUser } from "@clerk/clerk-react";
import { ToastContainer } from "react-toastify";
import UploadArticle from "./pages/UploadArticle/UploadArticle";
import ManageArticles from "./pages/ManageArticles/ManageArticles";

const App = () => {
  const isMobile = useIsMobile();
  const isTab = useIsTab();
  const path = useLocation().pathname;

  const isAuthRoute = path === "/login" || path === "/signup";

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        {!isMobile && !isTab && !isAuthRoute && <Navbar />}

        {(isMobile || isTab) && !isAuthRoute && (
          <div>
            <AppSidebar />
            <SidebarTrigger />
          </div>
        )}
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <div className="bg-muted flex min-h-svh flex-col items-center justify-center">
                <SignIn />
              </div>
            }
          />

          <Route
            path="/signup"
            element={
              <div className="bg-muted flex min-h-svh flex-col items-center justify-center">
                <SignUp />
              </div>
            }
          />

          <Route path="/board-of-members" element={<BoardOfMembers />} />

          {/* For Authors Routes */}
          <Route path="/author-guidelines" element={<AuthorGuidelines />} />
          <Route
            path="/publication-process"
            element={<PublicationTimeline />}
          />
          <Route path="/upload" element={<UploadArticle />} />
          <Route path="/manage-articles" element={<ManageArticles />} />

          {/* Benefits Routes */}
          <Route path="/academic-benefits" element={<AcademicBenefits />} />
          <Route path="/industry-benefits" element={<IndustryBenefits />} />

          {/* Journal Archive Routes */}
          <Route path="/previous-issues" element={<PreviousIssues />} />

          {/* Sponsors & Payments Routes */}
          <Route path="/bank-details" element={<BankDetails />} />
          <Route
            path="/advertisement-tariff"
            element={<AdvertisementTariff />}
          />

          {/* 404 Route - Optional */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!isAuthRoute ? <Footer /> : null}
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default App;
