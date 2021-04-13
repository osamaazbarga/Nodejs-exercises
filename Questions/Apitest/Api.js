const axios=require('axios')
const request=require('request')
const fetch = require('node-fetch')

let url='https://dog.ceo/api/breeds/image/random'
axios.get(url).then(function (response) {
    console.log(response.data);
})


request({url:url,json:true},(error,responce)=>{
      if(error){
        console.log('Unable to connect to the api url');
    }
    else{
        console.log(responce.body);
    }
})

fetch(url).then(res => res.json())
    .then(json => console.log(json))
.catch(err => {
	console.error(err);
});

// async function getapi(){
//     let res=await fetch(url);
//     let data=await res.json();
//     console.log(data)
// }

// getapi();




