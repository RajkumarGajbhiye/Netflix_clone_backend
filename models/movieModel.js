const mongoose= require("mongoose");

const MovieSchema = new mongoose.Schema({
    title:{
       type:String,
       required:true,
       unique:true 
    },
    description:{
        type:String, 
    },
    imageBackground:{
        type:String   
    },
    imageTitle:{
        type:String,
    },
    imagePicture:{
        type:String,
    },
    trailer:{
        type:String,
    },
    video:{
        type:String,
    },
    year:{
        type:String,
    },
    limit:{
        type:Number,
    },
    genre:{
        type:String,
    },
    isSeries:{
        type:Boolean,
        default:false
    },
},
{timestamps:true}
)

const Movie = mongoose.model("movie",MovieSchema,"movies");

module.exports = Movie