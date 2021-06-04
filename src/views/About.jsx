import React from 'react';

import Layout from '../components/Layout';

const About = () => {
  return (
    <React.Fragment>
      <Layout title="About">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <div>
              <h1 className="text-gray-800 text-4xl font-bold">
                Technical assignment for Frontend developer
              </h1>

              <h2 className="mt-6 text-gray-800 text-2xl font-bold">Goal</h2>
              <p className="mt-3 text-gray-800">
                Determine if you can reach the last element on a numbers array{' '}
                <span className="italic">
                  (numbers can be negative and positive)
                </span>
                , according to these rules:
              </p>
              <ul className="mt-2 ml-6 list-disc text-gray-800">
                <li>You start at the first element.</li>
                <li>
                  Current element value indicates how many steps you can take at
                  most.
                  <br />
                  (Example: if the value is 3 you can take 0, 1, 2 or 3 steps).
                </li>
                <li>You have to end up on the last array element.</li>
              </ul>

              <h2 className="mt-6 text-gray-800 text-2xl font-bold">Task</h2>
              <p className="mt-3 text-gray-800">Write a function that would:</p>
              <ul className="mt-2 ml-6 list-disc text-gray-800">
                <li>Accept array as input parameter.</li>
                <li>Determine if the goal is reachable.</li>
                <li>Provide the most efficient path.</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default About;
