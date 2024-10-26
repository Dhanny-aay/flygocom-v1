import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./landing/pages/landing";
import FlightDeals from "./landing/pages/flightDeals";
import TravelCommunity from "./landing/pages/travelCommunity";
import Policy from "./landing/pages/policy";
import TermOfService from "./landing/pages/termOfService";
import Blog from "./landing/pages/blog";
import DetailedBlog from "./landing/pages/detailedBlog";
import Faq from "./landing/pages/faq";
import ErrorMsg from "./landing/pages/errorMsg";
import Services from "./landing/pages/services";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/flight-deals" element={<FlightDeals />} />
        <Route path="/travel-community" element={<TravelCommunity />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<TermOfService />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detailed-blog" element={<DetailedBlog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/error" element={<ErrorMsg />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
