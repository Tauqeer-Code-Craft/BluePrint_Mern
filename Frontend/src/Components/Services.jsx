import React from 'react';

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Design</h3>
            <p className="text-gray-600">
              We craft beautifully designed websites with a focus on user experience and responsive design.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h3>
            <p className="text-gray-600">
              Our developers build high-performance, secure websites using the latest web technologies.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">SEO Optimization</h3>
            <p className="text-gray-600">
              We optimize websites for search engines to increase traffic and improve online visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
