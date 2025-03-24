import { Route, Routes } from "react-router-dom";
import Hero from "./components/Home/Hero";
import AcademicBenefits from "./pages/AcademicBenefits/AcademicBenefits";
import IndustryBenefits from "./pages/IndustryBenefits/IndustryBenefits";
import BoardOfMember from "./pages/BoardOfMembers/boardOfMember";
import AuthorGuidelines from "./pages/Guidelines/guidelines";
import PeerReviewProcess from "./pages/Publication/publication";
import CallForPaper from "./pages/CallForPaper";
import AdvertisementTariff from "./pages/AdvertisementTariff/AdvertisementTariff";
import BankDetails from "./pages/BankDetails/BankDetails";
import PreviousIssues from "./components/PreviousIssues/PreviousIssues";
import CurrentIssues from "./components/CurrentIssues/CurrentIssues";
import ApprovedArticles from "./components/ApprovedArticles/ApprovedArticles";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import LoginModal from "./components/LoginModal/LoginModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import UploadPopup from "./components/UploadPopup/UploadPopup";
import { useContext } from "react";
import { UserContext } from "./AppContext";

export default function AllRoutes() {
  const { user, isAdmin } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route
        path="/benefits/academic-benefits"
        element={<AcademicBenefits />}
      />
      <Route
        path="/benefits/industry-benefits"
        element={<IndustryBenefits />}
      />
      <Route path="/board-of-member" element={<BoardOfMember />} />
      <Route path="/author/author-guidelines" element={<AuthorGuidelines />} />
      <Route
        path="/author/peer-review-process"
        element={<PeerReviewProcess />}
      />
      <Route path="/call-for-paper" element={<CallForPaper />} />
      <Route
        path="/ad/advertisement-tariff"
        element={<AdvertisementTariff />}
      />
      <Route path="/ad/bank-details" element={<BankDetails />} />

      {user !== null && (
        <Route path="/publish-paper" element={<UploadPopup />} />
      )}

      {!user && (
        <>
          <Route path="/login" element={<LoginModal />} />
          <Route path="/signup" element={<SignUpModal />} />
        </>
      )}
      
      {isAdmin && (
        <>
          <Route path="/approved-issues" element={<ApprovedArticles />} />
          <Route path="/current-issues" element={<CurrentIssues />} />
        </>
      )}
      <Route path="/previous-issues" element={<PreviousIssues />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
