import { useState } from "react";

function SideNavigation({ title, items, position, className, onItemClick }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item, index) => {
    setActiveItem(index);
    if (onItemClick) {
      onItemClick(item, index);
    }
  };

  return (
    <div
      className={`w-full h-full bg-gradient-to-b from-slate-50 to-white shadow-lg ${className}`}
    >
      {/* 네비게이션 헤더 */}
      <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
          {title}
        </h3>
      </div>

      {/* 네비게이션 아이템들 */}
      <nav className="p-2 space-y-1">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleItemClick(item, index)}
            className={`
              w-full text-left px-4 py-3 text-sm rounded-lg font-medium
              transition-all duration-200 
              hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm
              ${
                activeItem === index
                  ? "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 shadow-sm"
                  : "text-gray-700 hover:translate-x-1"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {item.icon && <span className="text-lg">{item.icon}</span>}
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-sm">
                  {item.badge}
                </span>
              )}
            </div>
          </button>
        ))}
      </nav>

      {/* 하단 추가 정보(향후 광고를 넣을까 생각중)*/}
      {/* <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 bg-gray-50">
        <p className="text-xs text-gray-500 text-center">
          {position === "left" ? "Left Panel" : "Right Panel"}
        </p>
      </div> */}
    </div>
  );
}

export default SideNavigation;
