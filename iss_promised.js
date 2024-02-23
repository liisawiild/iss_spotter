const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function (body) {
  let ipAddress = JSON.parse(body).ip;
  return request(`https://ipwho.is/${ipAddress}`);
};

const fetchISSFlyoverTimes = function(body) {
  let coords = JSON.parse(body);
  request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`);
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyoverTimes  };
