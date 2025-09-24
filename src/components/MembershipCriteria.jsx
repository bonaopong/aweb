import React from 'react';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CriteriaItem = ({ children }) => (
  <div className="flex items-start space-x-3 mb-4">
    <div className="flex-shrink-0 mt-0.5">
      <CheckIcon />
    </div>
    <p className="text-gray-700 text-base leading-relaxed">{children}</p>
  </div>
);

const MembershipSection = ({ title, criteria }) => (
  <div className="flex-1">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
        Free
      </span>
    </div>
    
    <div className="space-y-1">
      {criteria.map((criterion, index) => (
        <CriteriaItem key={index}>{criterion}</CriteriaItem>
      ))}
    </div>
  </div>
);

const MembershipCriteria = () => {
  const regularMembershipCriteria = [
    "Must be of Ewe heritage or married to someone of Ewe heritage",
    "Must be 18 years or older", 
    "Resident of Lashibi or surrounding areas",
    "Commitment to community values and principles",
    "Payment of annual membership dues"
  ];

  const honoraryMembershipCriteria = [
    "Significant contribution to the Ewe community",
    "Recommendation by current members",
    "Approval by the executive committee", 
    "Demonstrated commitment to community development",
    "No membership dues required"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Membership Criteria
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Review our membership categories and requirements to find the right fit for you
          </p>
        </div>

        {/* Membership Sections */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <MembershipSection 
              title="Regular Membership"
              criteria={regularMembershipCriteria}
            />
            <MembershipSection 
              title="Honorary Membership"
              criteria={honoraryMembershipCriteria}
            />
          </div>
        </div>

        {/* Bottom border line */}
        <div className="mt-12 border-b border-gray-300"></div>
      </div>
    </div>
  );
};

export default MembershipCriteria;