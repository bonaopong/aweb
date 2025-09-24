
import React, { useState } from 'react';
import { Filter, Calendar, Clock, MapPin, Mail, Bell, CheckCircle } from 'lucide-react';
import Banner from "../components/Banner"

const Events = () =>{
   const [activeFilter, setActiveFilter] = useState('All Events');

   const eventList = [
    {
      id: 1,
      title: "LECA Meeting",
      description: "LECA monthly meeting discusses insurance benefits, member dues, and unveils exciting...",
      date: "September 21, 2025",
      time: "03:00 PM",
      location: "Community Center",
      image: "/more_images/5.jpg",
      status: "upcoming",
      badge: "Upcoming"
    },
    {
      id: 2,
      title: "LECA Gathering",
      description: "LECA monthly meeting discusses insurance benefits, member dues, and unveils exciting...",
      date: "August 17, 2025",
      time: "03:00 PM",
      location: "Community Hall",
      image: "/more_images/dev.jpg",
      status: "past",
      badge: "Past Event",
      theme: "MOVING FORWARD",
      themeSubtext: "NEVER LOOK BACK"
    },
    {
      id: 3,
      title: "Unveils New Signboard",
      description: "LECA proudly unveils its new community signboard, showcasing identity, unity, and...",
      date: "July 20, 2025",
      time: "2:00 PM",
      location: "LECA Headquarters",
      image: "/more_images/signboard.jpg",
      status: "past",
      badge: "Past Event"
    }
  ];

  const filters = ['All Events', 'Upcoming', 'Past Events'];

  const filteredEvents = eventList.filter(event => {
    if (activeFilter === 'All Events') return true;
    if (activeFilter === 'Upcoming') return event.status === 'upcoming';
    if (activeFilter === 'Past Events') return event.status === 'past';
    return true;
  });
 

    return (
       <>
         <Banner title="Events" message="Stay connected with our community through various events, celebrations, and activities" />
         
         
         <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
          <div className="flex items-center mb-4 sm:mb-0">
            <Filter className="h-5 w-5 text-gray-600 mr-2" />
            <span className="text-gray-700 font-medium mr-4">Filter by:</span>
            <div className="flex space-x-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    event.status === 'upcoming'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-500 text-white'
                  }`}>
                    {event.badge}
                  </span>
                </div>

                {/* Theme Overlay for special events */}
                {event.theme && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="inline-block bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded mb-2">
                        THEME
                      </div>
                      <h3 className="text-lg md:text-xl font-black mb-1">
                        {event.theme}
                      </h3>
                      <p className="text-sm font-semibold">
                        {event.themeSubtext}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
            Load More Events
          </button>
        </div>
      </div>
    </div>





    <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full translate-x-36 translate-y-36"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-white rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
      

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Don't Miss Our Next Event
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Stay updated with our latest events and be part of our growing community
        </p>

        {/* Subscription Section */}
      
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
            
              <button 
                className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition-all duration-300 shadow-lg hover:shadow-xl text-lg whitespace-nowrap"
              >
                Subscribe to Updates
              </button>
            </div>
          </div>
     
  
      </div>
    </div>
       </>
    )
}


export default Events