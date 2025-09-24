import React from 'react';
import { Calendar, Users, Target, TrendingUp, Heart, Eye, Quote } from 'lucide-react';
import Banner from '../components/Banner';
import Leaders from '../components/Leaders';

const About = () => {
  const milestones = [
    {
      year: "2012",
      title: "Foundation",
      description: "Founded in February by Daniel Lord Aflakpui-Tamakloe",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      year: "2015",
      title: "Community Growth", 
      description: "Expanded to serve over 500 families across Greater Accra",
      icon: <Users className="h-6 w-6" />
    },
    {
      year: "2018",
      title: "Strategic Partnerships",
      description: "Established partnerships with government and NGOs",
      icon: <Target className="h-6 w-6" />
    },
    {
      year: "2024",
      title: "Modern Impact",
      description: "Now serving over 2,000 families with diverse programs",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const pillars = [
    {
      id: 1,
      icon: <Users className="h-8 w-8" />,
      title: "Community Hub",
      description: "A central gathering place for Ewe families to connect, share, and support each other"
    },
    {
      id: 2,
      icon: <Heart className="h-8 w-8" />,
      title: "Cultural Guardian",
      description: "Preserving and promoting Ewe traditions, language, and customs for future generations"
    },
    {
      id: 3,
      icon: <Target className="h-8 w-8" />,
      title: "Development Catalyst",
      description: "Driving sustainable development projects that improve quality of life in our community"
    },
    {
      id: 4,
      icon: <Eye className="h-8 w-8" />,
      title: "Voice of Unity",
      description: "Representing our community's interests and advocating for positive change"
    }
  ];

  return (
     <>
   <Banner 
      title="About LECA"
      message="Learn about our history, mission, and the dedicated leaders who drive our community forward"
    />

    {/* History Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content */}
          <div>
            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our History
            </h2>

            {/* History Text */}
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                Founded in February 2012 by Daniel Lord Aflakpui-Tamakloe, LECA aims to unite 
                the Ewe community in Lashibi, Tema, and promote their well-being, cultural 
                heritage, and social cohesion.
              </p>

              <p className="text-lg leading-relaxed">
                What started as informal gatherings to discuss community issues has evolved into 
                a structured organization that serves over 2,000 families across the Greater Accra 
                region. Our founders envisioned an association that would not only preserve our 
                rich cultural heritage but also address modern challenges facing our community.
              </p>

              <p className="text-lg leading-relaxed">
                Over the years, LECA has grown from strength to strength, establishing 
                partnerships with local government, NGOs, and international organizations to 
                bring development projects, educational opportunities, and healthcare initiatives 
                to our community.
              </p>

              <p className="text-lg leading-relaxed">
                Today, we continue to honor our founders' vision while adapting to meet the 
                evolving needs of our community in the 21st century.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="/more_images/7.jpg"
                alt="LECA Leadership Team and Community Members"
                className="w-full h-96 lg:h-[600px] object-cover rounded-xl shadow-lg"
              />
              
              {/* Image Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white text-sm">
                    LECA leadership team and community members at a recent gathering, 
                    continuing the tradition of unity and collaboration.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>



    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Are
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            LECA is more than just an association - we are a family, a support system, and a 
            beacon of hope for our community
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    {pillar.icon}
                  </div>
                </div>
                {/* Background circle */}
                <div className="absolute inset-0 w-24 h-24 mx-auto bg-blue-50 rounded-full -z-10 group-hover:bg-blue-100 transition-colors duration-300 transform translate-x-2 translate-y-2"></div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed px-2">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>


    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-blue-50 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Our Mission
              </h2>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              To foster unity, cooperation, and mutual support among the Ewe 
              community in Lashibi and beyond, promoting spiritual, moral, and social 
              well-being through meaningful discussions, interactions, and community-driven 
              initiatives.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-yellow-50 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Our Vision
              </h2>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              To build a strong, inclusive, and empowered Ewe community in Lashibi, 
              where individuals actively participate in social and spiritual development, 
              uphold moral values, and contribute to the collective growth and 
              harmony of society.
            </p>
          </div>
        </div>

      </div>
    </div>

    <Leaders />

    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Message from Our President
          </h2>
        </div>

        {/* Message Card */}
        <div className="bg-blue-600 bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white border-opacity-20">
          

          {/* Quote Text */}
          <blockquote className="text-center mb-8">
            <p className="text-white text-xl md:text-2xl leading-relaxed font-light italic">
              "As we look toward the future, I am filled with immense pride in what our community has 
              achieved and excitement for what lies ahead. LECA represents the best of our traditions while 
              embracing the opportunities of tomorrow. Together, we are not just preserving our heritage - 
              we are building a legacy for generations to come."
            </p>
          </blockquote>

          {/* President Profile */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            
            {/* Profile Image */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white border-opacity-30">
                <img
                  src="/more_images/leader.png"
                  alt="Daniel Lord Aflakpui-Tamakloe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* President Info */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-1">
                Daniel Lord Aflakpui-Tamakloe
              </h3>
              <p className="text-blue-100 font-medium">
                Leader & Founder
              </p>
            </div>
          </div>
        </div>

      
      </div>
    </div>

     </>
  );
};

export default About;