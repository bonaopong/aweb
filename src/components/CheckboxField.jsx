function CheckboxField({ id, label }) {
  return (
    <div className="flex items-center space-x-2">
      <input id={id} name={id} type="checkbox" className="h-4 w-4" />
      <label htmlFor={id} className="text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
}
export default CheckboxField;
