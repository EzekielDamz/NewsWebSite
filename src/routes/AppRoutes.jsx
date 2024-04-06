import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../Components/Signup";
import LoginPage from "../Components/LoginPage";
import Today from "../pages/Today";
import ForYou from "../pages/ForYou";
import ReadLater from "../pages/ReadLater";
import Protector from "../Components/Protector";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/today" element={<Today />} />
        <Route path="/foryou" element={<ForYou />} />
        <Route path="readlater" element={<ReadLater />} />
        <Route path="/" element={<Protector />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
