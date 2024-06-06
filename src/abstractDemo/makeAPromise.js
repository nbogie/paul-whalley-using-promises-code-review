//you don't need to know how to make promises for this set of exercises
//Here we make one for use in a demo - a promise which resolves after at least 4 seconds, resolving to the number 42.
/**
 * Simulates work being done asynchronously.
 * @returns {Promise<number>} wait at least 4 seconds then return a number
 */
function someAsyncFunction() {
    const eventualResult = 42;
    return new Promise((resolve, reject) =>
        setTimeout(() => resolve(eventualResult), 4000)
    );
}

module.exports = { someAsyncFunction };
