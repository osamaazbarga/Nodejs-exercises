setTimeout(()=>{
    console.log('Two seconds');
},2000)

const names=['osama','foad','jess']
const shoortnames=names.filter((name)=>{
    return name.length<=4
})

const geocode=(address,callback)=>{
    
    setTimeout(()=>{
        const data={
            latitude:0,
            longtude:0
        }
        callback(data)
    },2000)
}
geocode('philadelphia',(data)=>{
    console.log(data)
})


const add=(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },2000)
}

add(1,4,(sum)=>{
    console.log(sum)
})
