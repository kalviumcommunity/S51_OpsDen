const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    id :  {type: String, required: true},
    name: { type: String, required: true },
    email: {type:String,required:true},
    feedback: {type:String,required:true}
},{

    timestamps: true
})

const OpsDen = mongoose.model('feedback', FeedbackSchema);
module.exports=OpsDen;

