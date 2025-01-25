import { Route, Routes } from "react-router-dom";

import AcademicBenefits from "./src/pages/AcademicBenefits/AcademicBenefits";
import IndustryBenefits from "./src/pages/IndustryBenefits/IndustryBenefits";
import BoardOfMember from "./src/pages/BoardOfMembers/boardOfMember";
import AuthorGuidelines from "./src/pages/Guidelines/guidelines";
import PeerReviewProcess from './src/pages/Publication/publication';
import CallForPaper from "./src/pages/CallForPaper";
import AdvertisementTariff from "./src/pages/AdvertisementTariff/AdvertisementTariff";
import BankDetails from "./src/pages/BankDetails/BankDetails";
import PreviousIssues from "./src/components/PreviousIssues/PreviousIssues";
import CurrentIssues from "./src/components/CurrentIssues/CurrentIssues";
import ApprovedArticles from "./src/components/ApprovedArticles/ApprovedArticles";
import PageNotFound from "./src/pages/PageNotFound/PageNotFound";

export default function AllRoutes(){
    return (
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/academic-benefits" element={<AcademicBenefits />} />
              <Route path="/industry-benefits" element={<IndustryBenefits />} />
              <Route path="/board-of-member" element={<BoardOfMember />} />
              <Route path="/author-guidelines" element={<AuthorGuidelines />} />
              <Route
                path="/peer-review-process"
                element={<PeerReviewProcess />}
              />
              <Route path="/call-for-paper" element={<CallForPaper />} />
              <Route
                path="/advertisement-tariff"
                element={<AdvertisementTariff />}
              />
              <Route path="/bank-details" element={<BankDetails />} />
              <Route path="/previous-issues" element={<PreviousIssues />} />
              <Route path="/current-issues" element={<CurrentIssues/>} />
              <Route path="/approved-issues" element={<ApprovedArticles/>}/>
              <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    );
}