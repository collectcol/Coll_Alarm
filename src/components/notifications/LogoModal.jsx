function LogoModal({ isOpen, onClose, logoSrc }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative max-w-2xl max-h-[90vh] p-4">
        <button
          onClick={onClose}
          className="absolute -top-10 -right-10 text-white hover:text-gray-300 text-2xl font-bold w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>
        <img
          src={logoSrc}
          alt="CollAlarm Logo - Full Size"
          className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

export default LogoModal;
