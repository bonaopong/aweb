// Form Section Component
const FormSection = ({ title, children, description }) => (
  <div className="mb-10">
    <div className="border-b-2 mb-6 border-gray-300">
      <h2 className="text-xl font-semibold text-gray-700   pb-2 ">{title}</h2>
      {description && <p className="text-gray-600 text-sm">{description}</p>}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      {children}
    </div>
  </div>
);
export default FormSection;
