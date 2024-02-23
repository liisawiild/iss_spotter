const { fetchMyIP, fetchCoordsByIP } = require('./iss_promised');

fetchMyIP()
  .then((body) => console.log(body));