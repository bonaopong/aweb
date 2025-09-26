function CheckboxField({ id, label, className = "" }) {
  return (
    <div className={`flex  space-x-2 ${className}`}>
      <input id={id} name={id} type="checkbox" className="h-4 w-4" />
      <label htmlFor={id} className="text-sm text-gray-700 flex-1 -mt-0.5">
        {label}
      </label>
    </div>
  );
}
export default CheckboxField;
