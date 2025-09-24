 import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
 import Banner from "../components/Banner"

const ContactUs = () =>{
     const contactInfo = [
    {
      id: 1,
      icon: <MapPin className="h-8 w-8" />,
      title: "Address",
      details: [
        "Lashibi, Accra",
        "Greater Accra Region",
        "Ghana"
      ],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      icon: <Phone className="h-8 w-8" />,
      title: "Phone",
      details: [
        "+233 24 441 9697",
        "+233 50 120 9791"
      ],
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      details: [
        "info@leca.org",
        "president@leca.org"
      ],
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      icon: <Clock className="h-8 w-8" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ],
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  
    return(
        <>
            <Banner title="Contact Us" message="Get in touch with us - we'd love to hear from you and answer any questions" />
           
           
           <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Multiple ways to reach us - choose what works best for you
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((contact) => (
            <div 
              key={contact.id}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto ${contact.bgColor} rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}>
                  <div className={contact.iconColor}>
                    {contact.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {contact.title}
              </h3>

              {/* Details */}
              <div className="space-y-2">
                {contact.details.map((detail, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h3>
              <p className="text-gray-600 text-lg">
                Have a question or want to learn more about joining LECA? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+233 XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default ContactUs