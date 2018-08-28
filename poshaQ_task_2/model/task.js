const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: true
       
    },
    labelId: {
        type: mongoose.Schema.ObjectId,
        ref: "label"
      }
});


const tModel= mongoose.model('task', taskSchema);
exports.tModel = tModel
//Functions for task operations

exports.getTask = () => {
  return tModel
    .find({})
    .exec();
};


exports.createtask = (task) => {
    return tModel.create(task)
}

exports.edittask = (id, taskName) => {
    return tModel.findByIdAndUpdate({
        _id: id
    }, taskName, {
        runValidators: true
    })
}
exports.movetask = (id, taskName) => {
    return tModel.findByIdAndUpdate({
        _id: id
    }, taskName, {
        runValidators: true
    })
}
exports.deletetask = (id) => {
    return tModel.findByIdAndRemove({
        _id: id
    }).exec()
}