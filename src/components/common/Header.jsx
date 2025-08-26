function Header() {
  return (
    <header
      id="Header"
      className="p-4 flex flex-col justify-between sm:flex-row items-center"
    >
      <h1 className="text-2xl font-bold text-blue-600 opacity-90">
        Welcome to My Website
      </h1>
      <div id="Date" className="text-sm text-blue-600 opacity-90">
        2025년{" "}
      </div>
    </header>
  );
}

export default Header;
