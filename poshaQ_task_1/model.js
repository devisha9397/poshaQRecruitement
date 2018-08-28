//Added mongoose
var mongoose=require('mongoose');
//Created Schema for category
const categorySchema = mongoose.Schema({
    category: {
        type: String   
    }

});

const categoryModel = mongoose.model('categorys', categorySchema);
exports.categoryModel = categoryModel;

exports.findCategory=()=>{
    return categoryModel.find().sort("category");
}