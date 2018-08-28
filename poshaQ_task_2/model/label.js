const mongoose = require('mongoose');

const labelSchema = mongoose.Schema({
    labelName: {
        type: String,
        required: true       
    }
});

const lModel = mongoose.model('label', labelSchema);

//Functions for label operations
exports.createLabel = (label) => {
    return lModel.create(label)
}

exports.getLabel = () => {
  return lModel
    .find({})
    .exec();
};


exports.editLabel = (id, labelName) => {
    return lModel.findByIdAndUpdate({
        _id: id
    }, labelName, {
        runValidators: true
    })
}
exports.deleteLabel = (id) => {
    return lModel.findByIdAndRemove({
        _id: id
    }).exec()
}
exports.lModel = lModel