import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 5;

  // Loan carousel data with real image URLs
  const slides = [
    {
      title: "Personal Loans",
      description: "Low interest rates starting at 4.99% APR",
      imageUrl: "https://plus.unsplash.com/premium_photo-1680396766429-ccfb5626a40d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Personal loan advertisement"
    },
    {
      title: "Home Mortgages",
      description: "Finance your dream home with competitive rates",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGxvYW58ZW58MHx8MHx8fDA%3D",
      alt: "Home mortgage advertisement"
    },
    {
      title: "Auto Loans",
      description: "Drive away today with flexible financing options",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661775983935-579b5c94e2c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Auto loan advertisement"
    },
    {
      title: "Student Loans",
      description: "Invest in your future with affordable education financing",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661444028056-5c0784d3aed0?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Student loan advertisement"
    },
    {
      title: "Business Loans",
      description: "Grow your business with tailored financial solutions",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661369101030-c74173442a8e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Business loan advertisement"
    }
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  // Function to set active slide directly (for indicators)
  const goToSlide = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto">
      <div id="loan-carousel" className="relative w-full" aria-label="Loan options carousel">
        {/* Carousel Items */}
        <div className="relative h-64 overflow-hidden md:h-96 bg-gray-800">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                activeSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.imageUrl}
                className="absolute block w-full h-full object-cover"
                alt={slide.alt}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg md:text-xl">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                activeSlide === index ? 'bg-white' : 'bg-gray-300'
              }`}
              aria-current={activeSlide === index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;