const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function (body) {
  let ipAddress = JSON.parse(body).ip;
  return request(`https://ipwho.is/${ipAddress}`);
};

module.exports = { fetchMyIP, fetchCoordsByIP };
