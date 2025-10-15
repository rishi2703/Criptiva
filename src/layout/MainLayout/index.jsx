
import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-1">
      
        <div className="flex-1">
          <Outlet />

        </div>
      </div>
    </div>
  );
};

export default MainLayout;
