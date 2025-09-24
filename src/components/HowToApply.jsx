import React from 'react';

const StepCard = ({ number, title, description }) => (
  <div className="text-center">
    <div className="mb-6">
      <div className="w-16 h-16 bg-blue-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl font-bold text-white">{number}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-blue-100 leading-relaxed text-sm max-w-xs mx-auto">
        {description}
      </p>
    </div>
  </div>
);

const HowToApply = () => {
  const steps = [
    {
      number: 1,
      title: "Complete Application",
      description: "Fill out the membership application form with your details"
    },
    {
      number: 2,
      title: "Submit Documents", 
      description: "Provide required identification and supporting documents"
    },
    {
      number: 3,
      title: "Pay Dues",
      description: "Pay the appropriate membership dues for your category"
    },
    {
      number: 4,
      title: "Welcome Meeting",
      description: "Attend an orientation meeting to complete your membership"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How to Apply
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Follow these simple steps to become a member of LECA
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200">
            Start Your Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;