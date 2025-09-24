import React from 'react';

const ImpactCard = ({ metric, label, description, bgColor, textColor }) => (
  <div className="text-center">
    <div className={`${bgColor} rounded-2xl p-8 mb-6`}>
      <div className={`text-5xl md:text-6xl font-bold ${textColor} mb-2`}>
        {metric}
      </div>
      <div className={`text-lg font-semibold ${textColor}`}>
        {label}
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
      {description}
    </p>
  </div>
);

const OurImpact = () => {
  const impactData = [
    {
      metric: "85%",
      label: "Improved Health Outcomes",
      description: "Through our health programs, 85% of participants report improved health awareness and better health outcomes.",
      bgColor: "bg-green-100",
      textColor: "text-green-700"
    },
    {
      metric: "20+",
      label: "Students Supported", 
      description: "Over 20 students have benefited from our educational support programs, including scholarships and tutoring.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700"
    },
    {
      metric: "95%",
      label: "Cultural Participation",
      description: "95% of community members actively participate in our cultural preservation activities and festivals.",
      bgColor: "bg-purple-100", 
      textColor: "text-purple-700"
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Impact
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See how our activities are making a real difference in the lives of community members
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {impactData.map((impact, index) => (
            <ImpactCard
              key={index}
              metric={impact.metric}
              label={impact.label}
              description={impact.description}
              bgColor={impact.bgColor}
              textColor={impact.textColor}
            />
          ))}
        </div>

        {/* Bottom border line */}
        <div className="border-b border-gray-200"></div>
      </div>
    </div>
  );
};

export default OurImpact;