
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import GettingStarted from "../component/Start/Getting-started";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import CreateWallet from "../component/Start/CreateWallet";
;

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<DashboardLayout/>}>
                  <Route path="/getting-started-with-Criptiva" element={<GettingStarted />} />
                  <Route path="/creating-a-new-wallet" element={<CreateWallet/>} />
        </Route>

        <Route element={<MainLayout/>}>
              <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
