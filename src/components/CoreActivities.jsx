import React from "react";

const HeartIcon = () => (
  <svg
    className="w-6 h-6 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const BookIcon = () => (
  <svg
    className="w-6 h-6 text-blue-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const CoreActivities = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">

     {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Activities
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We run various programs designed to address the diverse needs of our community 
            members
          </p>
        </div>
        
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
      
        
        {/* Community Health Programs */}
        <div className="flex bg-white rounded-xl shadow-md overflow-hidden">
          {/* Left Image */}
          <div className="w-1/3">
            <img
              src="/2.avif"
              alt="Community Health Programs"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Right Content */}
          <div className="w-2/3 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-50 p-2 rounded-full">{<HeartIcon />}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Community Health Programs
                </h3>
                <span className="text-sm text-blue-500 font-medium">
                  Health & Wellness
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Regular health screenings, vaccination drives, and health education
              workshops for all community members.
            </p>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">
              Key Highlights:
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Free Health Screenings
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Vaccination Programs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Health Education
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Medical Consultations
              </li>
            </ul>
          </div>
        </div>

        {/* Educational Support Programs */}
        <div className="flex bg-white rounded-xl shadow-md overflow-hidden">
          {/* Left Image */}
          <div className="w-1/3">
            <img
              src="/1.avif"
              alt="Educational Support Programs"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Right Content */}
          <div className="w-2/3 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-50 p-2 rounded-full">{<BookIcon />}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Educational Support Programs
                </h3>
                <span className="text-sm text-blue-500 font-medium">
                  Education
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Scholarship programs, tutoring services, and educational workshops
              to support academic excellence.
            </p>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">
              Key Highlights:
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Scholarship Awards
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Tutoring Services
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Study Groups
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Educational Workshops
              </li>
            </ul>
          </div>
        </div>

        {/* Educational Support Programs */}
        <div className="flex bg-white rounded-xl shadow-md overflow-hidden">
          {/* Left Image */}
          <div className="w-1/3">
            <img
              src="/3.avif"
              alt="Educational Support Programs"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Right Content */}
          <div className="w-2/3 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-50 p-2 rounded-full">{<BookIcon />}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Cultural Preservation
                </h3>
                <span className="text-sm text-blue-500 font-medium">
                 Cultural Preservation
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Preserving and promoting Ewe culture through festivals, language classes, and traditional arts.
            </p>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">
              Key Highlights:
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Cultural Festivals
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Language Classes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Traditional Arts
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
               Storytelling Sessions
              </li>
            </ul>
          </div>
        </div>

        {/* Educational Support Programs */}
        <div className="flex bg-white rounded-xl shadow-md overflow-hidden">
          {/* Left Image */}
          <div className="w-1/3">
            <img
              src="/4.jpg"
              alt="Educational Support Programs"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Right Content */}
          <div className="w-2/3 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-50 p-2 rounded-full">{<BookIcon />}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                 Economic Empowerment
                </h3>
                <span className="text-sm text-blue-500 font-medium">
                  Economic Empowerment
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
             Microfinance programs, business training, and entrepreneurship support for community members.
            </p>
            <h4 className="font-semibold text-gray-900 mb-2 text-sm">
              Key Highlights:
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Microfinance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Business Training
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Entrepreneurship Support
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Market Access
              </li>
            </ul>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default CoreActivities;
