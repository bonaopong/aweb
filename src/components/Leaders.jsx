import React from 'react';
import { Mail, Phone, Linkedin , Quote } from 'lucide-react';


const Leaders = () => {
  const leaders = [
    {
      id: 1,
      name: "Daniel Lord Aflakpui-Tamakloe",
      position: "Founder & President",
      image: "/more_images/leader.png",
      bio: "Visionary leader who founded LECA in 2012 with the mission to unite and empower the Ewe community in Lashibi and beyond."
    },
    {
      id: 2,
      name: "Christopher Kobla Seglah",
      position: "Vice President",
      image: "/more_images/pic2.png",
      bio: "Dedicated community leader supporting organizational growth and strategic development initiatives."
    },
    {
      id: 3,
      name: "Thomas Nuku",
      position: "Secretary",
      image: "/more_images/pic3.png",
      bio: "Ensures effective communication and documentation of all organizational activities and decisions."
    },
    {
      id: 4,
      name: "Rexford Doh Amafu",
      position: "Treasurer",
      image: "/more_images/pic5.png",
      bio: "Manages financial resources and oversees budget planning to support community development programs."
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Leaders
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Meet the dedicated individuals who guide our community with wisdom, passion, and 
            unwavering commitment
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <div 
              key={leader.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-3">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                      <Phone className="h-4 w-4" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                      <Linkedin className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {leader.name}
                </h3>
                
                <p className="text-blue-600 font-semibold mb-4">
                  {leader.position}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Leaders;