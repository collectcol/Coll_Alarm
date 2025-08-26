import Header from "./components/common/Header";
import Dashboard from "./components/dashboard/dashboard";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
