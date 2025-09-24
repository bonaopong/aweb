import React from 'react';
import { Camera } from 'lucide-react';

const GalleryImages = () => {
  const galleryImages = [
    {
      id: 1,
      src: "./more_images/7.jpg",
      alt: "Community Meeting "
    },
    {
      id: 2,
      src: "/more_images/8.jpg",
      alt: "Community Gathering 2"
    },
    {
      id: 3,
      src: "/more_images/9.jpg",
      alt: "Cultural Event"
    },
    {
      id: 4,
      src: "/more_images/7.jpg"  
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Community Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Capturing moments that define our community spirit
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Camera className="h-6 w-6 text-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center">
          <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            <Camera className="h-5 w-5 mr-2" />
            View Full Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;