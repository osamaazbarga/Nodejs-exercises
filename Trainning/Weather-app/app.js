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
const url='http://api.weatherstack.com/current?access_key=032e643702f00e0656e6a90fdc664d78&&query=37.8267,-122.4233&units=m'

request({url:url,json:true},(error,responce)=>{
    // const data=JSON.parse(responce.body)
    // console.log(data.current)
    //console.log(responce.body.current);
    //console.log(responce.body.current.weather_descriptions[0]+'. it Is currently '+responce.body.current.temperature+'  '+' degress out. it feels like '+responce.body.current.feelslike);
    if(error){
        console.log('Unable to connect to weather service!');
    }
    else{
    console.log(responce.body.current.weather_descriptions[0]+'. it Is currently '+responce.body.current.temperature+'  '+' degress out. it feels like '+responce.body.current.feelslike);

    }
})