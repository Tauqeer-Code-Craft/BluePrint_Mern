import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          We are a team of passionate designers and developers dedicated to creating beautiful and functional websites.
        </p>
        <div className="flex justify-center space-x-8">
          <div className="bg-gray-100 p-8 rounded-xl shadow-md max-w-xs">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To make the web a more beautiful and accessible place by providing simple, elegant design solutions.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-xl shadow-md max-w-xs">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              We envision a future where technology and design work in harmony to create seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
