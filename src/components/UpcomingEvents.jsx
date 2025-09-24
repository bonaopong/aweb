import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Our Next Community Gathering",
      date: "September 21, 2025",
      time: "3:00 PM",
      location: "Community Center",
      description: "Join us for our monthly community gathering where we discuss important matters affecting our community and plan upcoming initiatives."
    },
    {
      id: 2,
      title: "Cultural Heritage Festival",
      date: "October 15, 2025",
      time: "10:00 AM",
      location: "Lashibi Community Grounds",
      description: "Celebrate Ewe culture with traditional music, dance, storytelling, and local cuisine."
    },
    {
      id: 3,
      title: "Youth Empowerment Workshop",
      date: "November 3, 2025",
      time: "2:00 PM", 
      location: "LECA Training Center",
      description: "Skills development workshop focusing on entrepreneurship and leadership for our young community members."
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Don't miss out on our exciting upcoming activities
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
            >
              {/* Event Title */}
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                {event.title}
              </h3>

              {/* Event Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-blue-500">
                  <Calendar className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">{event.date}</span>
                </div>
                
                <div className="flex items-center text-blue-500">
                  <Clock className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">{event.time}</span>
                </div>
                
                <div className="flex items-center text-blue-500">
                  <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>

              {/* Event Description */}
              <p className="text-blue-500 text-sm leading-relaxed mb-4">
                {event.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-blue-700 font-medium hover:text-blue-200 transition-colors duration-300 cursor-pointer">
                <span className="mr-2 text-sm">Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

     

        {/* View All Events Button */}
        <div className="text-center">
          <button className="inline-flex items-center bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
            <span className="mr-2">View All Events</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;