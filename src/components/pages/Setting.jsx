import { useState } from "react";

function Setting() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New card:", formData);
    // TODO: 카드 추가 로직 구현
    setFormData({ title: "", content: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex-1 p-7 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">알람 카드 등록</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div></div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            카드 제목
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="제목을 입력하세요"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            카드 내용
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="내용을 입력하세요"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          카드 등록
        </button>
      </form>
    </div>
  );
}

export default Setting;
