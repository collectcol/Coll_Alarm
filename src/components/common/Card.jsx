function Card({ title = "Card Title", content = "Card Content" }) {
  return (
    <div
      className="w-48 h-48 bg-white rounded-lg shadow-md 
    hover:shadow-xl hover:-translate-y-2 
    transition-all duration-300 p-4 flex 
    flex-col items-center justify-center border border-gray-200 cursor-pointer"
    >
      <div className="text-lg font-semibold text-gray-800 mb-2">{title}</div>
      <div className="text-sm text-gray-600">{content}</div>
    </div>
  );
}

export default Card;
