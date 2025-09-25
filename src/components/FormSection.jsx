// Form Section Component
const FormSection = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-6">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      {children}
    </div>
  </div>
);
export default FormSection;
