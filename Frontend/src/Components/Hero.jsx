import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 h-screen flex items-center justify-center text-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600 mb-6">
          We create simple, beautiful websites that are user-friendly and minimalistic.
        </p>
        <a
          href="#services"
          className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
