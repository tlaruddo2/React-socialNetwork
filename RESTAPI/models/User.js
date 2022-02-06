const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        
        //restriction
        require: true,
        min: 3,
        max:20,
        unique: true,
    },
    email:{
        type: String,
        require: true,
        max:50,
        unique: true,
    },
    password:{
        type:String,
        require: true,
        min:6
    },
    rpofilePricture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},
    {timestamps: true }
);

//export
//("name", data)
module.exports = mongoose.model("User", UserSchema);