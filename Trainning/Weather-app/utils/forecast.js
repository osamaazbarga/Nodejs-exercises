const request = require("request")

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=032e643702f00e0656e6a90fdc664d78&&query='+latitude+','+longitude+'&units=m'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to weather service',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)

        }else{
            callback(undefined,console.log(responce.body.current.weather_descriptions[0]+'. it Is currently '+responce.body.current.temperature+'  '+' degress out. it feels like '+responce.body.current.feelslike))

        }
    })
}

module.exports=forecast