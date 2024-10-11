import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./landing/pages/landing";
import FlightDeals from "./landing/pages/flightDeals";
import TravelCommunity from "./landing/pages/travelCommunity";

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
      </Routes>
    </>
  );
}

export default App;
