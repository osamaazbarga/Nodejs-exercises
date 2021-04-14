const request=require('request')

const geocode=(address,callback)=>{
    const urlgeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYmR3YW4iLCJhIjoiY2tuZnI3anM1MjQ0ODJwbXJhcWw4NjBicCJ9.fhIBS9EKl0u9PNgpdFQOXA&limit=1'
    request({url:urlgeo,json:true},(error,response)=>{
        if(response.body.features.length===0){
            callback("Unable to find location. Try another search.",undefined)
        } else if(error){
            callback('Unable to connect to location services!',undefined)
        } else {
            callback(undefined,{
                latitude:response.body.features[0].center[0],
                longitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name
            })
        }
    })
}

module.exports=geocode