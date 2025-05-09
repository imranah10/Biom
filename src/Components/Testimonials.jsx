import React, { useState } from 'react';

const testimonials = [
  {
    name: 'John Doe',
    comments: [
      {
        message: 'This platform helped me improve my credit score and get a loan easily!',
        image: 'https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg',
      },
    ],
  },
  {
    name: 'Jane Smith',
    comments: [
      {
        message: 'I love the user-friendly interface and quick BI rating results.',
        image: 'https://as1.ftcdn.net/v2/jpg/10/75/26/12/1000_F_1075261230_MNjUQKrkXzO1TriHUuSzmEN7I6vKf6Wy.jpg',
      },
    ],
  },
  {
    name: 'Akash Patel',
    comments: [
      {
        message: 'Very helpful tool for understanding loan eligibility!',
        image: 'https://as1.ftcdn.net/v2/jpg/06/39/67/50/1000_F_639675081_5lDyGaMwxUwUDRfsYMI7TNE6vONfg2Yb.jpg',
      },
    ],
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">What Our Clients Say</h2>

        <div className="relativer">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ease-in-out ${
                index === activeIndex ? 'opacity-100 relative' : 'opacity-0 absolute top-0 left-0 w-full'
              }`}
            >
              <div className=" bg-[#15201d] border-1 border-yellow-600 p-6 rounded-2xl shadow-md mx-auto max-w-3xl text-center">
                {testimonial.comments.map((comment, i) => (
                  <div key={i} className="flex flex-col items-center mb-4">
                    <img
                      src={comment.image}
                      alt={`Comment ${i}`}
                      className="w-20 h-20 rounded-full object-cover mb-3"
                    />
                    <p className="text-white italic">"{comment.message}"</p>
                  </div>
                ))}
                <h5 className="text-lg font-semibold italic text-yellow-600">{testimonial.name}</h5>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
