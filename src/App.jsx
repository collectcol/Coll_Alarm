import { useState } from "react";
import Header from "./components/common/Header";
import Dashboard from "./components/pages/Board";
import Custom from "./components/pages/Custom";
import Setting from "./components/pages/Setting";
import Interlock from "./components/pages/Interlock";
import Tabs from "./components/common/Tabs";
import Footer from "./components/common/Footer";
import LeftNavItems from "./components/const/LeftNavItems";
import RightNavItems from "./components/const/RightNavItems";
import SideNavigation from "./components/common/SideNavigation";

function App() {
  const [activeTab, setActiveTab] = useState("board");

  const tabContent = () => {
    switch (activeTab) {
      case "board":
        return <Dashboard />;
      case "custom":
        return <Custom />;
      case "setting":
        return <Setting />;
      case "interlock":
        return <Interlock />;
      default:
        return <Dashboard />;
    }
  };

  const handleLeftNavClick = (item, index) => {
    /// TODO 왼쪽 메뉴 클릭 기능 향후에 만들기
  };

  const handleRightNavClick = (item, index) => {
    /// TODO 왼쪽 메뉴 클릭 기능 향후에 만들기
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <div className="flex flex-1 min-h-0">
        {/* Left Navigation */}
        <div className="w-64 flex-shrink-0">
          <SideNavigation
            title="Main Menu"
            items={LeftNavItems}
            position="left"
            onItemClick={handleLeftNavClick}
            className="h-full"
          />
        </div>

        {/* Main Content */}
        <div className="flex-8 flex flex-col min-h-screen">
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
          {tabContent()}
          <Footer />
        </div>

        {/* Right Navigation */}
        <div className="w-64 flex-shrink-0">
          <SideNavigation
            title="Quick Actions"
            items={RightNavItems}
            position="right"
            onItemClick={handleRightNavClick}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
