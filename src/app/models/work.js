const { Schema, default: mongoose } = require("mongoose");

const workSchema = new Schema({
    Workname:{
        type:String,
        required:[true,"Name is required"]
    },
    entity:{
        type:String,
        required:[true,"entity is required"]
    },
    description:{
        type:String,
        required:[true,"description is required"]
    },
    usecomments:{
        type:Boolean,
        required:[true,"usecomments is required"]
    },
    progress:{
        type:Number,
        required:[true,"progress is required"]

    } 
    
})

// create a model using a schema
export const WorkDataemploye = mongoose.models.WorkData || mongoose.model("WorkData", workSchema);