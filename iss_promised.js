const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function (body) {


};
module.exports = { fetchMyIP, fetchCoordsByIP };
