import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const Events = () => {
  const activities = [
    {
      id: 1,
      date: "July 22, 2025",
      title: "Unveils New Signboard",
      description: "The newly unveiled LECA signboard stands as a proud symbol of unity, cultural pride, and community empowerment",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      type: "milestone"
    },
    {
      id: 2,
      date: "December 10, 2024",
      title: "Moving Forward",
      description: "Empowering our community through education, cultural preservation, and economic development initiatives.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      type: "initiative",
      theme: "MOVING FORWARD",
      themeSubtext: "NEVER LOOK BACK"
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recent Activities
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with our latest community initiatives
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Theme Overlay for Moving Forward card */}
                {activity.theme && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="inline-block bg-yellow-500 text-black px-3 py-1 text-sm font-bold rounded mb-2">
                        THEME
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black mb-2">
                        {activity.theme}
                      </h3>
                      <p className="text-lg font-semibold">
                        {activity.themeSubtext}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-medium text-sm">
                    {activity.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {activity.description}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 cursor-pointer">
                  <span className="mr-2">Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Activities Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            View All Activities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;