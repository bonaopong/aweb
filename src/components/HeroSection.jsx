import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const HeroSection = () => {
  // Sample images - replace with your actual images
  const slides = [
    {
      id: 1,
      image: "/sliders/slide-a.jpg",
      title: "Community Development",
      subtitle_one: "Growing Together as One",
      subtitle: "Empowering our community through education, cultural preservation, and economic development initiatives.",
    },
    {
      id: 2,
      image: "/sliders/slide-b.jpg",    
      title: "Unity and Progress",
      subtitle_one: "Moving Forward Together",
      subtitle: "Building bridges of understanding and cooperation for sustainable development in Lashibi and beyond."
    },
    {
      id: 3,
      image: "/sliders/slide-c.jpg",
      title: "Cultural Heritage",
      subtitle_one: "Preserving Our Rich Traditions",
      subtitle: "Celebrating and maintaining the beautiful customs, language, and traditions of the Ewe people."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
 

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slider Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
           <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`   }}>
           </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-4xl text-center mx-auto">

                  {/* Main Title - Large and Bold */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
                    {slide.title}
                  </h1>

                  {/* Subtitle One - Medium size */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-relaxed">
                    {slide.subtitle_one}
                  </h2>
                  
                  {/* Description - Smaller text */}
                  <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    {slide.subtitle}
                  </p>
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-red-500 scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default HeroSection;