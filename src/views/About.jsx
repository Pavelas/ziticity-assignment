import React from 'react';

import Layout from '../components/Layout';

const About = () => {
  return (
    <React.Fragment>
      <Layout title="About">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <p className="p-6">
                This page will include information about assignment.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default About;
