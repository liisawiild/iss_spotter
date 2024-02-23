const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function(body) {
  let ipAddress = JSON.parse(body).ip;
  return request(`https://ipwho.is/${ipAddress}`);
};

const fetchISSFlyoverTimes = function(body) {
  const coords = JSON.parse(body);
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`);
};

const nextISSTimesForMyLocation = function(body) {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyoverTimes)
  .then((body) => {
    const times = JSON.parse(body).response;
    return times;
  })
}

module.exports = { nextISSTimesForMyLocation };
