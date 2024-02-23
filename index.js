const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('64.180.44.26', (error, data) => {
  if (error) {
    console.log("It didn't work! Error: ", error);

  }
  console.log(data);
});