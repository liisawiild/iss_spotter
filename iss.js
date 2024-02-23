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
    if (error) {
      callback(null, error);
      return;
    }

    let bodyObj = JSON.parse(body);

    if (bodyObj.success === false) {
      let ipErrorMsg = `The success status was "${bodyObj.success}", and the message was "${bodyObj.message}" when searching for this IP: ${bodyObj.ip}.`;
      callback(null, ipErrorMsg);
    } else {
      let longitude = bodyObj.longitude;
      let latitude = bodyObj.latitude;
      
      let coords = {
        latitude,
        longitude,
      };
  
      callback(null, coords);

    }
  });
};

const fetchISSFlyoverTimes = function(coords, callback) {
  request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }; 
    
    if (response.statusCode !== 200) {
      let msg = `Status Code ${response.statusCode} when fetching ISS pass times. Response ${body}`;
      callback(Error(msg), null);
      return;

    }; 

    let bodyObj = JSON.parse(body);
    let passTimes = bodyObj.response;
    callback(null, passTimes);
    
  });
};


const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ipAddress) => {
    if (error) {
      callback(error, null);
      return;
    }

    fetchCoordsByIP(ipAddress, (error, coords) => {
      if (error) {
        callback(error, null);
        return;
      }

      fetchISSFlyoverTimes(coords, (error, passTimes) => {
        if (error) {
          callback(error, null);
          return;
        }

        callback(null, passTimes);
      });
    });
  });
};






module.exports = { nextISSTimesForMyLocation };
// fetchMyIP, fetchCoordsByIP, fetchISSFlyoverTimes,