const mongoose=require('mongoose')
const validator=require('validator')


const product=mongoose.model('product',{
    name:{
        type:String,
        unique: true
    },
    // email:{
    //     type:String,
    //     trim:true,
    //     lowercase:true,
    //     unique: true,
    //     validate(value){
    //         if(!validator.isEmail(value)){
    //             throw new Error('Email is invalid')
    //         }
    //     }
    // },

    // password:{
    //    type:String,
    //    require:true,
    //    minlength:7,
    //    trim:7,
    //    validate(value){
    //        if(value.includes('password')){
    //             throw new Error('password cannot contain "password"')
    //        }
    //    } 
    // },
    category:{
        type:String,
        required: true
    },
    isActive:{
        type:Boolean
    },
    details:{
        description:{
            type:String,
            required: true,
            validate(value){
                if(value.length<10){
                    throw new Error('desc is small')
                }
            }

        },
        price:{
            type:Number,
            required: true,
            validate(value){
                if(value<0){
                    throw new Error('price is unlegal')
                }
            }
        },
        discount:{
            type:Number,
            required: false,
            default:0
            
        },
        pic:{

        },
        phone:{
            type:String,
            validate: {
                validator: function(v) {
                  return /\d{10}/.test(v);
                },
                message: props => `${props.value} is not a valid phone number!`
              },
              required: [true, 'User phone number required']
            
        },
        DateAdded:{
            type:Date,
            default: Date.now

        }

    }

})


module.exports=product
