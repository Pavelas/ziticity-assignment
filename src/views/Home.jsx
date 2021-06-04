import React from 'react';

import Layout from '../components/Layout';
import ArrayGame from '../components/ArrayGame';

const Home = () => {
  return (
    <React.Fragment>
      <Layout title="Home">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <div className="h-96">
              <ArrayGame />
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
