import { useState } from "react";
import Header from "./components/common/Header";
import Dashboard from "./components/pages/Board";
import Setting from "./components/pages/Setting";
import Custom from "./components/pages/Custom";
import Tabs from "./components/common/Tabs";
import Footer from "./components/common/Footer";

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
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      {tabContent()}
      <Footer />
    </div>
  );
}

export default App;
