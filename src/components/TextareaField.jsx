function TextareaField({ id, label, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={3}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
      />
    </div>
  );
}
export default TextareaField;
