import { useState } from "react";

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

  return (
    <div
      id="Header"
      className="p-4 flex flex-col justify-between sm:flex-row items-center"
    >
      <header>
        <h1 className="text-2xl font-bold text-blue-600 opacity-90">
          CollAlarm
        </h1>
        <div id="Date" className="text-sm text-blue-900 opacity-90">
          {clock}
        </div>
      </header>
    </div>
  );
}

export default Header;
