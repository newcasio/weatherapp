const request = require('request');

var getWeather= (lat, lng, callback) =>{
  request({
    url:`https://api.darksky.net/forecast/a78b928c9519d0a225ee63381c9f1bec/${lat},${lng}`,
    json: true
    }, (error, response,body) =>{
      if(!error && response.statusCode ===200){
        callback(undefined,{
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      }else{
        callback('Unable to fetch weather.', undefined);
      }
  });
};


module.exports={
  getWeather
};
