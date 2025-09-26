import React, { useRef, useState } from "react";

function FileUploadField({ id, label, accept = "" }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const inputRef = useRef();

  const handleChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    if (selected && selected.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selected);
    } else {
      setPreview(null);
    }
  };

  const handleClear = () => {
    setFile(null);
    setPreview(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => inputRef.current && inputRef.current.click()}
          className="px-3 py-1 bg-slate-200 text-black rounded hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          Choose File
        </button>
        {file && (
          <button
            type="button"
            onClick={handleClear}
            className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs"
          >
            Clear
          </button>
        )}
      </div>
      <input
        id={id}
        name={id}
        type="file"
        accept={accept}
        ref={inputRef}
        onChange={handleChange}
        className="hidden"
      />
      {file && (
        <div className="mt-3">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="rounded border object-cover"
              style={{ width: 120, height: 150 }}
            />
          ) : (
            <span className="block text-sm text-gray-600">{file.name}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default FileUploadField;
