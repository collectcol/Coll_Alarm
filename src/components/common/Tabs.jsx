import PagesTitle from "../const/PagesTitle";

function Tabs({ activeTab, onTabChange }) {
  return (
    <div className="flex border-b border-gray-200">
      {PagesTitle.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 py-3 font-medium text-sm transition-colors duration-200 ${
            activeTab === tab.id
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
