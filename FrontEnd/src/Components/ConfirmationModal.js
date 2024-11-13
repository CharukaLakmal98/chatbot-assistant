import React from "react";

function ConfirmationModal({ showModal, setShowModal, handleDeleteChat }) {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-purple-100 rounded-lg shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">Confirm Deletion</h2>
        <p className="mb-6">Are you sure you want to delete this chat?</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-700"
            onClick={handleDeleteChat}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
