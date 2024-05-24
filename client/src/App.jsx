import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import LandingPage from "./pages/landing-page/LandingPage";
import DriversPage from "./pages/drivers-page/DriversPage";
import DriverDetailPage from "./pages/driver-detail-page/DriverDetailPage";

function App() {
  return (
    <div className="container">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/drivers" element={<DriversPage />} />
          <Route path="/drivers/:id" element={<DriverDetailPage />} />
          <Route path="/about-us" element={<DriverDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
