import React, { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
  // State to track what the user is typing
  const [text, setText] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    // Check if the input isn't empty (after removing spaces)
    if (text.trim()) {
      // Call the onAdd function passed from parent component
      onAdd(text.trim());
      // Clear the input field
      setText('');
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-700">Add New Todo</h2>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          disabled={!text.trim()}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add
        </button>
      </div>
      
      {/* Show current input length for feedback */}
      {text && (
        <p className="text-sm text-gray-500 mt-2">
          {text.length} characters
        </p>
      )}
    </div>
  );
};

export default AddTodoForm;