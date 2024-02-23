const { fetchMyIP, fetchCoordsByIP, fetchISSFlyoverTimes, nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index');

nextISSTimesForMyLocation()
.then((times) => {
  printPassTimes(times);
})
.catch((error) => {
  console.log("It didn't work: ", error.message);
});