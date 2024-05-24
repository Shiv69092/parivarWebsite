import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import PrivacyPolicy from "./Components/Policy/PrivacyPolicy.jsx";
import ReturnPolicy from "./Components/Policy/ReturnPolicy.jsx";
import TermsConditions from "./Components/Policy/TermsConditions.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/privacy"} element={<PrivacyPolicy />} />
        <Route path={"/return"} element={<ReturnPolicy />} />
        <Route path={"/terms"} element={<TermsConditions />} />
      </Routes>
    </>
  );
}

export default App;
