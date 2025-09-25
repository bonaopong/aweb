// Select Field Component
const SelectField = ({ id, label, register, error, children, ...rest }) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    <select
      id={id}
      // {...register(id)}
      {...rest}
      className={`w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${
        error ? "border-red-500 focus:ring-red-500" : "border-gray-300"
      }`}
    >
      {children}
    </select>
    {error && (
      <p className="text-red-500 text-xs italic mt-1">{error.message}</p>
    )}
  </div>
);
export default SelectField;
