const request = require('request');

// const fetchMyIP = function(callback) {
//   request('https://api.ipify.org/?format=json', (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }
    
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
//       callback(Error(msg), null);
//       return;
//     }
    
//     let ipObj = JSON.parse(body);
//     let ipAddress = ipObj.ip;
//     callback(null, ipAddress);
    
    
//   });
// };

// const fetchCoordsByIP = function(ipAddress, callback) {
//   request(`https://ipwho.is/${ipAddress}`, (error, response, body) => {
//     if (error) {
//       callback(null, error);
//       return;
//     }

//     let bodyObj = JSON.parse(body);

//     if (bodyObj.success === false) {
//       let ipErrorMsg = `The success status was "${bodyObj.success}", and the message was "${bodyObj.message}" when searching for this IP: ${bodyObj.ip}.`;
//       callback(null, ipErrorMsg);
//     } else {
//       let long = bodyObj.longitude;
//       let lat = bodyObj.latitude;
      
//       let data = {
//         lat,
//         long,
//       };
  
//       callback(null, data);

//     }
//   });
// };

// const fetchISSFlyoverTimes = function(coords, callback) {
//   request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }; 
    
//     if (response.statusCode !== 200) {
//       let msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
//       callback(Error(msg), null);
//       return;

//     }; 

//     let bodyObj = JSON.parse(body);
//     let data = bodyObj.response;
//     callback(null, data);
    
//   });
// };


const nextISSTimesForMyLocation = function(callback) {

};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyoverTimes, nextISSTimesForMyLocation };
