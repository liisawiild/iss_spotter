const {  fetchISSFlyoverTimes } = require('./iss');
// fetchMyIP, fetchCoordsByIP,

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('64.180.44.26', (error, data) => {
//   if (error) {
//     console.log("It didn't work! Error: ", error);
//     return;
//   }
//   console.log(data);
// });

fetchISSFlyoverTimes({latitude: 49.2837626, longitude: -122.7932065}, (error, data) => {
  if (error) {
    console.log("It didn't work! Error: ", error);
    return;
  }
  console.log(data);
});


