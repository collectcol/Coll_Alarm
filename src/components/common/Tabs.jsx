import PagesTitle from "../const/PagesTitle";

function Tabs({ activeTab, onTabChange }) {
  return (
    <div className="bg-white shadow-sm">
      <nav className="flex space-x-1 px-6">
        {PagesTitle.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-4 px-6 font-semibold text-sm transition-all duration-200 relative ${
              activeTab === tab.id
                ? "text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Tabs;
