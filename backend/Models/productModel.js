const {Schema,model} = require('../connection');
const mySchema = new Schema(
    {
        name:{type:String,required:true},
        image:{type:String,required:true},
        category:{type:String,default:'Unknown'},
        price:{type:Number,required:true},
        createdAt:{type:Date,default:Date.now}
    }
);

module.exports = model('product',mySchema);
