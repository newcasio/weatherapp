const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,
      default: '32 Badajoz Road, Ryde, New South Wales 2113'
    }
  })
  .help()
  .alias('help','h')
  .argv;

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}&key=AIzaSyBfdeYzd23jyR3fKx0oRtdlqCDK-NEzwcI`;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find address.');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/a78b928c9519d0a225ee63381c9f1bec/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl).then((response)=>{
    console.log(`The temperature is currently ${response.data.currently.temperature} degrees, but it feels like ${response.data.currently.apparentTemperature} degrees`);
    console.log(`Forecast: ${response.data.daily.summary}.`);
  });


}).catch((e)=>{
  if (e.code === "ENOTFOUND"){
    console.log('Unable to connect to API server.')
  }else{
    console.log(e.message);
  }
});
