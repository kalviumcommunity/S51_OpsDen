const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    id :  {type: Number, required: true},
    name: { type: String, required: true },
    email: {type:String,required:true},
    feedback: {type:String,required:true}
},{

    timestamps: true
})

const OpsDen = mongoose.model('feedback', FeedbackSchema);
module.exports=OpsDen;

