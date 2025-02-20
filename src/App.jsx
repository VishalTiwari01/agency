import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
// Services
import Scaffolding from "./pages/Services/Scaffolding";
import ITNonIT from "./pages/Services/Consulting/ITNonIT";
import BPO from "./pages/Services/Consulting/BPO";
import TechnicalSales from "./pages/Services/Consulting/TechnicalSales";
import TravelTourism from "./pages/Services/Consulting/TravelTourism";
import BankingFinance from "./pages/Services/Consulting/BankingFinance";
import RealEstate from "./pages/Services/Consulting/RealEstate";
import Agriculture from "./pages/Services/Consulting/Agriculture";
import SecurityGuard from "./pages/Services/SecurityServices/SecurityGuard";
import BankATMSecurityGuard from './pages/Services/SecurityServices/BankATMSecurityGuard'
import PersonalSecurityGuard from "./pages/Services/SecurityServices/PersonalSecurityGuard";
import EventSecurityGuard from "./pages/Services/SecurityServices/EventSecurityGuard";
import EducationInstitutionSecurity from "./pages/Services/SecurityServices/EducationInstitutionSecurity";
import CommericalSecurityGuard from "./pages/Services/SecurityServices/CommericalSecurityGuard";
import HotelSecurityGuard from "./pages/Services/SecurityServices/HotelSecurityGuard";
import HealthcareSecurityGuard from "./pages/Services/SecurityServices/HealthCareSecurityGuard";
import MetroRailSecurityGuard from "./pages/Services/SecurityServices/Metro&RailSecurityGuard";
import HouseKeeping from "./pages/Services/FacilityManagement/HouseKeeping";
import PantyServices from "./pages/Services/FacilityManagement/PantyServices";
import PlumbingServices from "./pages/Services/FacilityManagement/PlumbingServices";
import WasteManegement from "./pages/Services/FacilityManagement/WasteManegment";
import PestControlServices from "./pages/Services/FacilityManagement/PestControlServices";
import CashVanLogistics from "./pages/Services/Logistics/CashVanLogistics";
import DeliveryBoyLogistics from './pages/Services/Logistics/DeliveryBoyLogistics'
import AboutUS from "./pages/Company/AboutUS";
import Certification from "./pages/Company/Certification";
import DirectorMessage from "./pages/Company/DirectorMessage";
import OrganizationStructure from "./pages/Company/OrganizationStructure";
import TrustedBrands from "./components/TrustedBrands";
import TrustedManpower from "./components/TrustedManpower";
import Services from "./components/Services";
import PhotoGallery from "./components/PhotoGallery";
import ElectronicSurveillance from "./pages/Services/ElectronicSurveillance"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/services/scaffolding" element={<Scaffolding />} />
        <Route path="/services/consulting/it-non-it" element={<ITNonIT />} />
        <Route path="/services/consulting/bpo" element={<BPO />} />
        <Route
          path="/services/consulting/travel-tourism"
          element={<TravelTourism />}
        />
        <Route
          path="/services/consulting/bankingfinance"
          element={<BankingFinance />}
        />
        <Route
          path="/services/consulting/realestate"
          element={<RealEstate />}
        />
        <Route
          path="/services/consulting/agriculture"
          element={<Agriculture />}
        />
        <Route
          path="/services/SecurityServices/security-guard"
          element={<SecurityGuard />}
        />
        <Route
          path="/services/SecurityServices/bankatm-security-guard"
          element={<BankATMSecurityGuard />}
        />
        <Route
          path="/services/SecurityServices/personal-security-guard"
          element={<PersonalSecurityGuard />}
        />
        <Route
          path="/services/SecurityServices/event-security-guard"
          element={<EventSecurityGuard />}
        />
        <Route
          path="/services/SecurityServices/education-institutions-security"
          element={<EducationInstitutionSecurity />}
        />
        <Route
          path="/services/SecurityServices/metro-rail-security-guard"
          element={<MetroRailSecurityGuard />}
        />
        <Route
          path="/services/SecurityServices/healthcare-security-guard"
          element={<HealthcareSecurityGuard />}
        />
        <Route
          path="/services/SecurityServices/hotel-security-guard"
          element={<HotelSecurityGuard />}
        />
        <Route
          path="/services/SecurityServices/commercial-security-guard"
          element={
            <div>
              <CommericalSecurityGuard />
            </div>
          }
        />
        <Route
          path="/services/FacilityManagement/houskeeping"
          element={<HouseKeeping />}
        />
        <Route
          path="/services/FacilityManagement/Pantry-Services"
          element={<PantyServices />}
        />
        <Route
          path="/services/FacilityManagement/Plumbing-Services"
          element={<PlumbingServices />}
        />
        <Route
          path="/services/FacilityManagement/Waste-Management"
          element={<WasteManegement />}
        />
        <Route
          path="/services/FacilityManagement/PestControl-Services"
          element={<PestControlServices />}
        />
        <Route
          path="/services/Logistics/cash-van-logistics"
          element={<CashVanLogistics />}
        />
        <Route
          path="/services/Logistics/delivery-boy-logistics"
          element={<DeliveryBoyLogistics />}
        />
        <Route
          path="/pages/Company"
          element={
            <div>
              <AboutUS />,<TrustedBrands />
            </div>
          }
        />
        <Route
          path="/pages/Company/certification"
          element={<Certification />}
        />
        <Route
          path="/pages/Company/director-message"
          element={<DirectorMessage />}
        />
        <Route
          path="/pages/Company/organizationStructure"
          element={<OrganizationStructure />}
        />
        <Route path="/services/electronic-surveillance" element={<ElectronicSurveillance/>}/>
        <Route
          path="/services/consulting/technical-sales"
          element={<TechnicalSales />}
        />
      </Routes>
      <TrustedManpower />
      <TrustedBrands />
      <Footer />
    </Router>
  );
};

export default App;
