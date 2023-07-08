const mongoose=require('mongoose'); 

const habbitSchema= new mongoose.Schema({
    habbit:{
        type:String,
        required:true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    dates: [{
        date: String,
        complete: String
    }]
});

const Habbit=mongoose.model('habbit',habbitSchema);
module.exports=Habbit;
