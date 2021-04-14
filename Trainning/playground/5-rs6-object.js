const name="osama"
const userAge=26
const user={
    name,
    age:userAge,
    location:'philadelphia'
}

console.log(user)


const product={
    label:'Red jaket',
    price:3,
    stock:201,
    salePrice:undefined,
    rating:4.2
}

// const {label:productLabel,stock,rating=5}=product
// console.log(productLabel)

// // console.log(label)
// console.log(stock)
// console.log(rating)

const transaction=(type,{label,stock})=>{
    console.log(type,label,stock)

}

transaction('order',product)

