
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import GettingStarted from "../component/Start/Getting-started";
;

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<DashboardLayout/>}>
                  <Route path="/getting-started-with-Criptiva" element={<GettingStarted />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
