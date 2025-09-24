 import React, { useState } from 'react';
 import HeroSection from "../components/Herosection"
import { Users, UserCheck, Church, DollarSign,Play, Pause } from 'lucide-react';
import GalleryImages from "../components/GalleryImages";
import Events from "../components/Events";
import UpcomingEvents from "../components/UpcomingEvents";



 const Home =() =>{
 
  const focusAreas = [
    {
      id: 1,
      icon: <Users className="h-12 w-12 text-white" />,
      title: "Community Building",
      description: "Strengthening unity and cooperation among Ewe people in Lashibi and beyond",
      bgColor: "bg-orange-600"
    },
    {
      id: 2,
      icon: <UserCheck className="h-12 w-12 text-white" />,
      title: "Community Participation",
      description: "Encouraging active involvement and volunteerism to drive collective progress",
      bgColor: "bg-yellow-500"
    },
    {
      id: 3,
      icon: <Church className="h-12 w-12 text-white" />,
      title: "Spiritual Growth",
      description: "Fostering spiritual development and religious unity within our community",
      bgColor: "bg-teal-600"
    },
    {
      id: 4,
      icon: <DollarSign className="h-12 w-12 text-white" />,
      title: "Economic Development",
      description: "Creating opportunities for financial growth and sustainable livelihoods",
      bgColor: "bg-purple-600"
    }
  ];

  const programs = [
    {
      title: "Community Meetings",
      description: "Monthly meetings to discuss important issues affecting members"
    },
    {
      title: "Cultural Festivals", 
      description: "Celebrating Ewe heritage through dance, storytelling, and traditional music"
    },
    {
      title: "Economic Empowerment",
      description: "Training and networking opportunities for business and career development"
    },
    {
      title: "Conflict Resolution & Mediation",
      description: "Helping members resolve disputes peacefully through dialogue"
    }
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
    setIsPlaying(true);
  };

  const handlePauseClick = () => {
    setIsPlaying(false);
  };

    return(
         <>
                <HeroSection />

         <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-gray-600 text-lg mb-4">Ready to help us</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Lashibi Ewe Community Association (LECA)
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to the Lashibi Ewe Community Association, a dynamic and united 
              group committed to fostering understanding, cooperation and sustainable 
              development among the Ewe people of Lashibi and beyond.
            </p>

            {/* Mission Quote */}
            <div className="bg-green-100 p-6 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-start">
                <div className="text-orange-500 text-4xl font-bold mr-4">"</div>
                <div>
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    Founded to unite, empower, and uplift the Ewe community 
                    through unity, culture, development, welfare, education, and 
                    spirituality.
                  </p>
                </div>
              </div>
            </div>

            {/* Leader Section */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-orange-500 overflow-hidden">
                  <img
                    src="/more_images/leader.png"
                    alt="Daniel Lord Aflakpui-Tamakloe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Daniel Lord Aflakpui-Tamakloe,
                </h4>
                <p className="text-gray-600 font-medium uppercase tracking-wider text-sm">
                  LEADER & FOUNDER
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Focus Areas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {focusAreas.map((area) => (
              <div
                key={area.id}
                className={`${area.bgColor} rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <div className="mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {area.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


     <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Image */}
          <div className="relative">
            <img
              src="./more_images/5.jpg"
              alt="LECA Community Meeting"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            /> 
            <div className="absolute inset-0  rounded-lg"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-gray-600 text-lg mb-2">What we do</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Programs & Activities
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              LECA actively engages in the following programs:
            </p>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </div>


    <GalleryImages />
    <Events />
                

                <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See Us In Action
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Watch our community activities and events
          </p>
        </div>

        {/* Video Container */}
        <div className="relative">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            
            {!showVideo ? (
              /* Video Thumbnail with Play Button */
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                  alt="Community Unity - Hands Together"
                  className="w-full h-96 md:h-[500px] lg:h-[600px] object-cover"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlayClick}
                    className="group bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 md:p-8 transition-all duration-300 transform hover:scale-110 shadow-2xl"
                  >
                    <Play className="h-12 w-12 md:h-16 md:w-16 text-gray-800 ml-1 group-hover:text-orange-600 transition-colors duration-300" />
                  </button>
                </div>

                {/* Video Title Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                      Unity in Action: LECA Community Story
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base">
                      Discover how we're building bridges and empowering our community
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Video Player Placeholder */
              <div className="relative bg-gray-900 h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center">
                {/* Video Player Simulation */}
                <div className="text-center text-white">
                  <div className="mb-4">
                    <div className="inline-block bg-orange-600 rounded-full p-4">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <p className="text-lg">Video Player</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Replace this section with your actual video embed
                  </p>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black bg-opacity-70 rounded-lg p-3 flex items-center justify-between">
                    <button
                      onClick={handlePauseClick}
                      className="text-white hover:text-orange-400 transition-colors duration-200"
                    >
                      {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                    </button>
                    
                    {/* Progress Bar */}
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-600 rounded-full h-1">
                        <div className="bg-orange-500 h-1 rounded-full w-1/3"></div>
                      </div>
                    </div>
                    
                    <span className="text-white text-sm">2:45 / 8:32</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>


   <UpcomingEvents />

         </>
    )
 }


 export default Home