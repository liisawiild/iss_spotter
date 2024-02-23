// const {  nextISSTimesForMyLocation  } = require('./iss');
// fetchMyIP, fetchCoordsByIP, fetchISSFlyoverTimes

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('64.180.44.26', (error, coords) => {
//   if (error) {
//     console.log("It didn't work! Error: ", error);
//     return;
//   }
//   console.log(coords);
// });

// fetchISSFlyoverTimes({latitude: 49.2837626, longitude: -122.7932065}, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work! Error: ", error);
//     return;
//   }
//   console.log(passtimes);
// });

const { nextISSTimesForMyLocation } = require('./iss');


const printPassTimes = function(passTimes) {
  for (let appearance of passTimes) {
    const date = new Date(appearance.risetime * 1000).toString();
    // console.log(date);
    console.log(`Next pass at ${date} for ${appearance.duration} seconds`);
  }  
};


nextISSTimesForMyLocation((error, passTimes) =>{
  if (error) { 
    return console.log("It didn't work!", error);
  }

  printPassTimes(passTimes);

});