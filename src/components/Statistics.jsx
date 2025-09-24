import React from 'react';

const TrendingUpIcon = () => (
  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const StatCard = ({ icon: Icon, number, label }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-blue-100/60 rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon />
    </div>
    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
      {number}
    </div>
    <div className="text-gray-600 text-sm">
      {label}
    </div>
  </div>
);

const Statistics = () => {
  const stats = [
    {
      icon: TrendingUpIcon,
      number: "10+",
      label: "Active Programs"
    },
    {
      icon: UsersIcon,
      number: "200+",
      label: "Beneficiaries"
    },
    {
      icon: HeartIcon,
      number: "25+",
      label: "Volunteers"
    },
    {
      icon: StarIcon,
      number: "10+",
      label: "Partner Organizations"
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;