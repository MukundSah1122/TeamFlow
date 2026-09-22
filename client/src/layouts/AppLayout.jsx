import { Outlet } from "react-router-dom";

import Sidebar from "../components/navigation/Sidebar";
import TopBar from "../components/layout/TopBar";

function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-main">
        <TopBar />

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;