import { useState } from "react";
import LogoModal from "../notifications/LogoModal";

function Header() {
  const nowTime = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    return `${year}년 ${month}월 ${date}일 ${hour.toString().padStart(2, "0")}시 ${minute.toString().padStart(2, "0")}분`;
  };
  const [clock, setClock] = useState(nowTime);

  setInterval(() => setClock(nowTime), 1000);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);

  const logoSrc = "/src/assets/images/mylogo2.jpeg";

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 shadow-xl">
        <div className="flex justify-between items-center px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <button
                onClick={() => setIsLogoModalOpen(true)}
                className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg p-1 hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                <img
                  src={logoSrc}
                  alt="CollAlarm Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </button>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              CollAlarm
            </h1>
          </div>
          <div className="text-blue-100 font-medium">{clock}</div>
        </div>
      </div>

      <LogoModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
        logoSrc={logoSrc}
      />
    </>
  );
}

export default Header;
