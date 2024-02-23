/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    
    let ipObj = JSON.parse(body);
    let ipAddress = ipObj.ip;
    callback(null, ipAddress);
    
    
  });
};

const fetchCoordsByIP = function(ipAddress, callback) {
  request(`https://ipwho.is/${ipAddress}`, (error, response, body) => {
    let bodyObj = JSON.parse(body);
    let long = bodyObj.longitude;
    let lat = bodyObj.latitude;
    
    let data = {
      long,
      lat,
    }

    callback(null, data);
    
  })
};



module.exports = { fetchMyIP, fetchCoordsByIP };