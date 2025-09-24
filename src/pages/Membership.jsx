import React from 'react';
import { Users, Heart, TrendingUp, Shield, Book, Handshake, Download } from 'lucide-react';

import Banner from "../components/Banner"
import MembershipCriteria from '../components/MembershipCriteria';
import HowToApply from '../components/HowToApply';


const UserIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const BenefitItem = ({ children }) => (
  <div className="flex items-start space-x-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
    <div className="flex-shrink-0 mt-1">
      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
        <CheckIcon />
      </div>
    </div>
    <p className="text-gray-700 text-sm font-medium leading-relaxed">{children}</p>
  </div>
);


const Membership = () =>{
    const benefits = [
    {
      id: 1,
      icon: <Users className="h-8 w-8" />,
      title: "Community Connection",
      description: "Connect with like-minded individuals who share your cultural heritage and values.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      icon: <Heart className="h-8 w-8" />,
      title: "Cultural Preservation",
      description: "Play an active role in preserving and promoting Ewe culture for future generations.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Personal Growth",
      description: "Access opportunities for personal and professional development through our programs.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

   const benefitList = [
    "Access to all LECA events and activities",
    "Networking opportunities with community leaders", 
    "Access to emergency support fund",
    "Mentorship and guidance programs",
    "Cultural education for children",
    "Business development support", 
    "Healthcare assistance program",
    "Educational scholarship opportunities"
  ];

    return(
        <>
         <Banner title="Membership" message="Join our growing community and be part of something bigger than yourself" />      
       
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Become a Member?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Discover the compelling reasons to join LECA and become part of our vibrant community
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto ${benefit.bgColor} rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}>
                  <div className={benefit.iconColor}>
                    {benefit.icon}
                  </div>
                </div>
                {/* Background circle for depth */}
                <div className={`absolute inset-0 w-24 h-24 mx-auto ${benefit.bgColor} opacity-30 rounded-full -z-10 group-hover:opacity-50 transition-opacity duration-300 transform translate-x-2 translate-y-2`}></div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed px-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

  
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Membership Benefits
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Enjoy exclusive benefits and opportunities available only to LECA members
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitList.map((benefit, index) => (
            <BenefitItem key={index}>
              {benefit}
            </BenefitItem>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200">
            Join LECA Today
          </button>
        </div>
      </div>
    </div>




 
      </div>
    </div>

    <MembershipCriteria />
    <HowToApply />

      <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Join Us?
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
          Take the first step towards becoming part of our vibrant community. Your 
          journey with LECA starts here.
        </p>
        
        {/* CTA Button */}
       <button className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
        <UserIcon />
         Register Now
        </button> | &nbsp;

<button className="inline-flex items-center gap-3 border border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg shadow-md transition-all duration-200">
  <Download />
  Download Form
</button>

      </div>
    </div>


        </>

        
    )
}


export default Membership
