
import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";

const MainLayout = () => {
  return (
   <div className="flex flex-col min-h-screen">

      <div className="flex flex-1">
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
