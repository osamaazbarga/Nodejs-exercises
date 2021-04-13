const http=require("http")
const url=require("url")
const fs=require('fs')

const port=8001

 const newarr=[{id:0,name:"osama",Email:"o.s.2@hotmail.com"}]
const server=http.createServer((req,res)=>{
    fs.writeFileSync('users.json',bookJSON)
    const q=url.parse(req.url,true).query;





    if(req.method==='GET'){
        // if(req.url==='/getUser'){
        //     res.write('welcome')
        // }
        if(req.url==='/sayhello'){
            res.write('hello')
        }
        else if(req.url==="/users"){
            // res.write(users[0].name)
            res.write(JSON.stringify(users))
        }
        else if(req.url.includes('user')){
            res.write(JSON.stringify(users[q.id]))
        }
        res.end()
        

    }
    
    // if(req.method==='POST'){
    //     res.write('post') 
    // }


})
server.listen(port,()=>{
    console.log("server run at port"+port);
})
