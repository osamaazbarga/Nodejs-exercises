const http=require("http")
const url=require("url")
const fs=require("fs")


const port=8001
// const userJson=require('./users.json')
const users=[
    {id:0,name:'osama',capsule:1},
    {id:1,name:'talya',capsule:1},
    {id:2,name:'gilad',capsule:1},
    {id:3,name:'michael',capsule:1},
    {id:4,name:'guy',capsule:1},
    {id:5,name:'shir',capsule:1},
    {id:6,name:'or',capsule:2},
    {id:7,name:'shlomi',capsule:2},
    {id:8,name:'shlomi',capsule:2},
]
// const dataBuffer1=fs.readFileSync('1-jsion.json')

// 



    

const server=http.createServer((req,res)=>{
    // const dataJSON=JSON.stringify(users)
    // fs.writeFileSync('users.json',dataJSON)
    const dataBuffer1=fs.readFileSync('users.json')
    
    const q=url.parse(req.url,true).query;
    if(req.method==='GET'){
        // if(req.url==='/getUser'){
        //     res.write('welcome')
        // }
        if(req.url==="/users"){
            res.write(JSON.stringify(users))
        }
        else if(req.url.includes('user')){
            res.write(JSON.stringify(users[q.id]))
            // res.write(JSON.stringify(q))

        }

        if(req.url==='/capsuls'){
            res.write(JSON.stringify(q)) 
        }
        else if(req.url.includes('capsule')){
            res.write(JSON.stringify(q))
            const bycapsule=users.filter(usr=>{
                    return usr.capsule==q.capsule
            })
            res.write(JSON.stringify(bycapsule))

        }
        
        res.end()
        

    }

})
server.listen(port,()=>{
    // console.log(dataBuffer1.toString())
    console.log("server run at port"+port);
})


