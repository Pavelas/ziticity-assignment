import React, { useState } from 'react';

const Result = ({ isReachable, numbersArray, winnablePaths }) => {
  const [showValues, setShowValues] = useState(true);

  const formattedResult = showValues
    ? winnablePaths.map((path) => path.map((index) => numbersArray[index]))
    : winnablePaths;

  if (!isReachable || !winnablePaths || !numbersArray)
    return (
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-red-400"
              data-todo-x-description="Heroicon name: data-todo-x-circle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              Whoops! It seems that the goal is unreachable...
            </h3>
            <div className="mt-2 text-sm text-red-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>Try to update numbers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-green-400"
            data-todo-x-description="Heroicon name: check-circle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">
            Success! The goal is reachable in {winnablePaths[0].length - 1}{' '}
            steps.
          </h3>
          <div className="mt-2 text-sm text-green-700">
            <p>The most efficient path(-s):</p>
          </div>
          <div className="mt-2 text-sm text-green-700">
            <ul className="list-disc pl-5 space-y-1">
              {formattedResult.map((path, index) => (
                <li key={index} className="tracking-widest">
                  {JSON.stringify(path)}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <div className="-mx-2 -my-1.5 flex">
              <button
                onClick={() => setShowValues(true)}
                className="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
              >
                Show values
              </button>
              <button
                onClick={() => setShowValues(false)}
                className="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
              >
                Show indexes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
