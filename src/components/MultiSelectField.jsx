// src/components/MultiSelectField.jsx

import { useState, useRef, useEffect } from "react";

function MultiSelectField({ id, label, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const containerRef = useRef(null);

  // Filter out the options that have already been selected
  const availableOptions = options.filter(
    (opt) => !selectedOptions.includes(opt)
  );

  // Effect to handle closing the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  // Handle selecting an option
  const handleSelectOption = (option) => {
    const newSelectedOptions = [...selectedOptions, option];
    setSelectedOptions(newSelectedOptions);
    setIsOpen(false); // Close dropdown after selection
    if (onChange) {
      onChange(newSelectedOptions); // Notify parent component of the change
    }
  };

  // Handle removing a selected option (pill)
  const handleRemoveOption = (optionToRemove) => {
    const newSelectedOptions = selectedOptions.filter(
      (opt) => opt !== optionToRemove
    );
    setSelectedOptions(newSelectedOptions);
    if (onChange) {
      onChange(newSelectedOptions); // Notify parent component of the change
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <button
          type="button"
          id={id}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <span className="flex flex-wrap gap-2">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option) => (
                <span
                  key={option}
                  className="flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                >
                  {option}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent dropdown from opening
                      handleRemoveOption(option);
                    }}
                    className="text-blue-600 hover:text-blue-800 focus:outline-none"
                  >
                    &times;
                  </button>
                </span>
              ))
            ) : (
              <span className="text-gray-500">Select options...</span>
            )}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            {/* Dropdown arrow icon */}
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.53.22l3.5 3.5a.75.75 0 01-1.06 1.06L10 4.81 7.03 7.78a.75.75 0 01-1.06-1.06l3.5-3.5A.75.75 0 0110 3zm-3.53 9.28a.75.75 0 011.06 0L10 15.19l2.97-2.97a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* Dropdown List */}
        {isOpen && availableOptions.length > 0 && (
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            role="listbox"
          >
            {availableOptions.map((option) => (
              <li
                key={option}
                onClick={() => handleSelectOption(option)}
                className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-blue-50"
                role="option"
                aria-selected="false"
              >
                <span className="font-normal block truncate">{option}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MultiSelectField;
