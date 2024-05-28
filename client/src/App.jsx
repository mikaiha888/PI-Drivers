import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import TeamsPage from "./pages/teams-page/TeamsPage";
import DriversPage from "./pages/drivers-page/DriversPage";
import AboutUsPage from "./pages/about-us-page/AboutUsPage";
import DriverDetailPage from "./pages/driver-detail-page/DriverDetailPage";

function App() {
  return (
    <div className="container">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/drivers" element={<DriversPage />} />
          <Route path="/drivers/:id" element={<DriverDetailPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
