import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Silk from "../yes/Silk/Silk";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import BackgroundDotGrid from "./components/BackgroundDotGrid/BackgroundDotGrid";

// Import page components (you'll need to create these)
import BoardOfMembers from "./pages/BoardOfMembers/BoardOfMembers";
import AuthorGuidelines from "./pages/AuthorGuidelines/AuthorGuidelines";
import PublicationProcess from "./pages/PublicationProcess/PublicationProcess";
import AcademicBenefits from "./pages/AcademicBenefits/AcademicBenefits";
import IndustryBenefits from "./pages/IndustryBenefits/IndustryBenefits";
import PreviousIssues from "./pages/PreviousIssues/PreviousIssues";
import BankDetails from "./pages/BankDetails/BankDetails";
import AdvertisementTariff from "./pages/AdvertisementTariff/AdvertisementTariff";
import NotFound from "./pages/NotFound/NotFound";
import { useIsMobile } from "./hooks/use-mobile";
import AppSidebar from "./components/AppSidebar/AppSidebar";
import { SidebarTrigger } from "./components/ui/sidebar";

const App = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <BackgroundDotGrid />
      {!isMobile ? <Navbar/> : <></>}
      {isMobile ? <div>
        <AppSidebar/>
        <SidebarTrigger/>
      </div> : <></>}
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/board-of-members" element={<BoardOfMembers />} />

        {/* For Authors Routes */}
        <Route path="/author-guidelines" element={<AuthorGuidelines />} />
        <Route path="/publication-process" element={<PublicationProcess />} />

        {/* Benefits Routes */}
        <Route path="/academic-benefits" element={<AcademicBenefits />} />
        <Route path="/industry-benefits" element={<IndustryBenefits />} />

        {/* Journal Archive Routes */}
        <Route path="/previous-issues" element={<PreviousIssues />} />

        {/* Sponsors & Payments Routes */}
        <Route path="/bank-details" element={<BankDetails />} />
        <Route path="/advertisement-tariff" element={<AdvertisementTariff />} />

        {/* 404 Route - Optional */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
