const mongoose = require('mongoose');

const OpsDenSchema = new mongoose.Schema({
    id :  {type: Number, required: true},
    name: { type: String, required: true },
    title: { type: String, required: true},
    description: { type: String, required: true},
    image:{data:Buffer,contentType:String},
    publishedAt: { type: String, required: true},
    Like:{type:Number},
    comment:{ type: Array, default: [] }
},{
    timestamps: true
})

const OpsDen = mongoose.model('OpsDen', OpsDenSchema);
module.exports=OpsDen;

