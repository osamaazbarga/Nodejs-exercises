const mongodb=require('mongodb')
const MongoClint=mongodb.MongoClient
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='findMyRestaurant2'

MongoClint.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology: true},(error,client)=>{
    if(error){
        return console.log('unable to connect to database')
    }
    console.log('connected')
    const db = client.db(databaseName)
    // db.collection('restaurants').insertMany([
    //     {
    //       name: "bombay",
    //       address: {
    //         city: "Holon",
    //         street: "Herzel 15",
    //         coordinates: [-77.46574, 40.6774],
    //       },
    //       cuisine: "indian",
    //       kosher: true,
    //       reviews: [
    //         {
    //           date: new Date("2016-01-01"),
    //           score: 7,
    //         },
    //         {
    //           date: new Date("2019-01-01"),
    //           score: 3,
    //         },
    //         {
    //           date: new Date("2018-01-01"),
    //           score: 8,
    //         },
    //       ],
    //     },
    //     {
    //       name: "falafel 5 shekels",
    //       address: {
    //         city: "Bat-Yam",
    //         street: "Histradrut 85",
    //         coordinates: [-70.46574, 10.6774],
    //       },
    //       cuisine: "street food",
    //       kosher: false,
    //       reviews: [
    //         {
    //           date: new Date("2019-01-01"),
    //           score: 3,
    //         },
    //         {
    //           date: new Date("2016-01-01"),
    //           score: 8,
    //         },
    //         {
    //           date: new Date("2020-01-01"),
    //           score: 4,
    //         },
    //       ],
    //     },
    //     {
    //       name: "asian delight",
    //       address: {
    //         city: "Tel Aviv",
    //         street: "Balfur 15",
    //         coordinates: [-10.46574, 30.6774],
    //       },
    //       cuisine: "asian",
    //       kosher: true,
    //       reviews: [
    //         {
    //           date: new Date("2020-01-01"),
    //           score: 3,
    //         },
    //         {
    //           date: new Date("2018-01-01"),
    //           score: 8,
    //         },
    //         {
    //           date: new Date("2016-01-01"),
    //           score: 9,
    //         },
    //       ],
    //     },
    //     {
    //       name: "coconut jam",
    //       address: {
    //         city: "Tel Aviv",
    //         street: "Stam Adress 15",
    //         coordinates: [20.46574, -40.6774],
    //       },
    //       cuisine: "african",
    //       kosher: true,
    //       reviews: [
    //         {
    //           date: new Date("2017-01-01"),
    //           score: 10,
    //         },
    //         {
    //           date: new Date("2016-01-01"),
    //           score: 8,
    //         },
    //         {
    //           date: new Date("2019-01-01"),
    //           score: 6,
    //         },
    //       ],
    //     },
    //     {
    //       name: "rice and noodles",
    //       address: {
    //         city: "Holon",
    //         street: "Bla Bla 15",
    //         coordinates: [20.46574, 10.6774],
    //       },
    //       cuisine: "asian",
    //       kosher: false,
    //       reviews: [
    //         {
    //           date: new Date("2016-01-01"),
    //           score: 1,
    //         },
    //         {
    //           date: new Date("2019-01-01"),
    //           score: 6,
    //         },
    //         {
    //           date: new Date("2019-01-01"),
    //           score: 2,
    //         },
    //       ],
    //     },
    //     {
    //       name: "thailand paradise",
    //       address: {
    //         city: "Holon",
    //         street: "Bla 13",
    //         coordinates: [-77.46574, 40.6774],
    //       },
    //       cuisine: "asian",
    //       kosher: false,
    //       reviews: [
    //         {
    //           date: new Date("2020-01-01"),
    //           score: 7,
    //         },
    //         {
    //           date: new Date("2019-01-01"),
    //           score: 6,
    //         },
    //         {
    //           date: new Date("2020-01-01"),
    //           score: 2,
    //         },
    //       ],
    //     },
    //   ])

//prints all cities
    //db.collection('restaurants').find().forEach( (myDoc)=> {console.log( "city: " + myDoc.address.city ); } );
    //db.collection('restaurants').find().sort({name:1}).forEach( (myDoc)=> {console.log( "city: " + myDoc.name ); } )
    let i=0;
    // db.collection('restaurants').find().forEach( (myDoc)=>{ myDoc.reviews.forEach((review)=>{if(review.date==='2019-01-01T00:00:00.000Z'){
    //     console.log(review.date)
    // }}) } );
    db.collection('restaurants').find({reviews:{$elemMatch:{date:{$gte:new Date("2000-01-01")}}}})

})

// if(myDoc.reviews.date=='2019-01-01 00:00:00.000Z'){
//     console.log( "city: " + myDoc.name )
// }