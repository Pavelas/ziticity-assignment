import React, { useState, useCallback } from 'react';
import _ from 'lodash';

import getWinnablePaths from '../utils/arrayFunctions';

import Result from './Result';
import Loading from './Loading';

const ArrayGame = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [numbersInput, setNumbersInput] = useState('');
  const [numbersOutput, setNumbersOutput] = useState('[]');
  const [winnablePaths, setWinnablePaths] = useState([]);

  const filterInputToArray = (input) =>
    input
      .trim()
      .split(',')
      .filter((item) => parseInt(item) == item)
      .map((item) => parseInt(item));

  const handleNumbersInput = (e) => {
    // Reset winnable paths
    setWinnablePaths([]);

    // Update numbers input value
    const value = e.target.value;
    setNumbersInput(value);

    // Filter numbers input to array
    const filteredInput = filterInputToArray(value);
    setNumbersOutput(JSON.stringify(filteredInput));

    if (!filteredInput.length) return;

    setIsLoading(true);
    debouncePathsSolving(filteredInput);
  };

  const debouncePathsSolving = useCallback(
    _.debounce((data) => {
      setWinnablePaths(getWinnablePaths(data));
      setIsLoading(false);
    }, 1000),
    []
  );

  return (
    <div>
      <div>
        <label
          htmlFor="array"
          className="block text-sm font-medium text-gray-600"
        >
          Please enter numbers separated by comma
        </label>

        <div className="mt-1">
          <input
            type="text"
            name="numbersInput"
            className="block w-full px-4 py-3 border border-gray-200 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded"
            placeholder="For example: 1, 2, 0, 3, 5, 9, 1"
            value={numbersInput}
            onChange={handleNumbersInput}
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="array"
          className="block text-sm font-medium text-gray-600"
        >
          Filtered array based on your input
        </label>

        <div className="mt-1">
          <input
            type="text"
            name="generatedArray"
            className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-300 focus:outline-none sm:text-sm tracking-widest rounded"
            value={numbersOutput}
            readOnly={true}
          />
        </div>
      </div>

      {isLoading || !numbersInput.length ? null : (
        <div className="mt-6">
          <Result
            isReachable={winnablePaths.length > 0}
            numbersArray={JSON.parse(numbersOutput)}
            winnablePaths={winnablePaths}
          />
        </div>
      )}

      {isLoading && (
        <div className="flex justify-center mt-12">
          <Loading isLoading={isLoading} />
        </div>
      )}
    </div>
  );
};

export default ArrayGame;
