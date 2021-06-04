/**
 * Get the most efficient winnable paths
 *
 * @param {array} data An original array of integers
 *
 * @return {array} Returns an array of winnable paths or empty array if the goal is not reachable
 */
const getWinnablePaths = (data) => {
  let winnablePaths = [];

  // Do not continue if provided parameter is not array or just single number
  if (!Array.isArray(data) || data.length <= 1) return winnablePaths;

  let pathsInQueue = getAvailablePaths(data);

  // Iterate through paths in the paths queue one by one
  do {
    pathsInQueue.forEach((currentPath, index) => {
      // Remove the path from the paths queue
      pathsInQueue.splice(index, 1);

      // Do not continue if there is already a more efficient winnable path
      if (
        winnablePaths.length &&
        winnablePaths[winnablePaths.length - 1].length < currentPath.length
      )
        return;

      // Add current path to winnable paths if the goal was reached
      if (currentPath[currentPath.length - 1] >= data.length - 1)
        return winnablePaths.push(currentPath);

      // Discover more paths based on the current path
      let discoveredPaths = getAvailablePaths(
        data,
        currentPath,
        currentPath[currentPath.length - 1]
      );

      // Add discovered paths to the paths queue if there are any
      if (discoveredPaths.length)
        pathsInQueue = pathsInQueue.concat(discoveredPaths);
    });
  } while (pathsInQueue.length);

  return winnablePaths;
};

/**
 * Get all available paths based on parameters
 *
 * @param {array} data An original array of integers
 * @param {array} path An array of current path progress
 * @param {int} level Current index (level) inside original array
 *
 * @return {array} Returns all available paths or empty array if there are no paths
 */
const getAvailablePaths = (data, path = [0], level = 0) => {
  let discoveredPaths = [];
  let availableSteps = data[level];

  // Iterate through all steps
  while (availableSteps !== 0) {
    // Define the next level which can be reached
    const nextLevel = availableSteps + level;

    // Add discovered path if the path is not out of original array bounds
    if (nextLevel >= 0 && nextLevel < data.length)
      discoveredPaths.push(path.concat([nextLevel]));

    // Decrease available steps
    availableSteps -= Math.sign(availableSteps);
  }

  return discoveredPaths;
};

export default getWinnablePaths;
