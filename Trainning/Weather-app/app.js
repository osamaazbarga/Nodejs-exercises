// console.log('starting')
// setTimeout(()=>{
//     console.log('2 seconds')
// },2000)
// setTimeout(()=>{
//     console.log('0 seconds')
// },0)
// console.log('stopping')
//starting stopping 2 seconds

const request=require('request')
const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')

// const url='http://api.weatherstack.com/current?access_key=032e643702f00e0656e6a90fdc664d78&&query=37.8267,-122.4233&units=m'

// request({url:url,json:true},(error,responce)=>{
//     // const data=JSON.parse(responce.body)
//     // console.log(data.current)
//     //console.log(responce.body.current);
//     //console.log(responce.body.current.weather_descriptions[0]+'. it Is currently '+responce.body.current.temperature+'  '+' degress out. it feels like '+responce.body.current.feelslike);
//     if(error){
//         console.log('Unable to connect to weather service!');
//     }else if(responce.body.error){
//         console.log("403");
//     }
//     else{
//     console.log(responce.body.current.weather_descriptions[0]+'. it Is currently '+responce.body.current.temperature+'  '+' degress out. it feels like '+responce.body.current.feelslike);

//     }
// })


// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmR3YW4iLCJhIjoiY2tuZnI3anM1MjQ0ODJwbXJhcWw4NjBicCJ9.fhIBS9EKl0u9PNgpdFQOXA&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })




geocode("philadelphia",(error,data)=>{
    console.log(data)
    forecast(-75.7088,44.1545,(error,data)=>{
        console.log(data)
    })
})


