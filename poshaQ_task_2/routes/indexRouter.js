const express = require('express');
const router = express.Router();
const lModel=require('../model/label');
const tModel=require('../model/task');

//Label is inserted
router.post('/labelcreate', function(req,res,next){
    lModel.createLabel(req.body).then((labelData)=>{
        res.send(labelData);
    }).catch(err=>{
        res.send(err);
    })
});

//To delete label by id passed
router.delete('/labeldelete/:id',function(req,res,next){
    lModel.deleteLabel(req.params.id).then((data)=>{
        res.send("Successful");
    }).catch(err=>{
        res.send(err);
    })

});

//To edit label values
router.put('/labelupdate/:id',function(req,res,next){
    lModel.updateLabel(req.params.id,req.body).then((data)=>{
        res.send(data);
    }).catch(err=>{
        res.send(err);
    })
});

//New Task are added with refrence to label id
router.post('/taskcreate', function(req,res,next){
    tModel.createtask(req.body).then((labelData)=>{
        res.send(labelData);
    }).catch(err=>{
        res.send(err);
    })
});

//To delete task
router.delete('/taskdelete/:id',function(req,res,next){
    tModel.deletetask(req.params.id).then((data)=>{
        res.send("Successfully Deleted");
    }).catch(err=>{
        res.send(err);
    })

});
//Edit task values
router.put('/taskupdate/:id',function(req,res,next){
    tModel.edittask(req.params.id,req.body).then((data)=>{
        res.send(data);
    }).catch(err=>{
        res.send(err);
    })
});

//Multiple Update
router.put('/taskmove/:id',function(req,res,next){
    tModel.movetask(req.params.id,req.body).then((data)=>{
        res.send(data);
    }).catch(err=>{
        res.send(err);
    })
});

//View LAbel values
router.get("/labeldisplay", function(req, res, next) {
  lModel
    .getLabel()
    .then(labelData => {
      if (labelData && labelData.length) {
        res.send(labelData); //Display data from collection
      }
    })
    .catch(err => {
      res.send(err);
    });
});

//View values
router.get("/labeldisplay", function(req, res, next) {
  lModel
    .getLabel()
    .then(labelData => {
      if (labelData && labelData.length) {
        res.send(labelData); //Display data from collection
      }
    })
    .catch(err => {
      res.send(err);
    });
});

//View task values
router.get("/taskdisplay", function(req, res, next) {
  tModel
    .getTask()
    .then(labelData => {
      if (labelData && labelData.length) {
        res.send(labelData); //Display data from collection
      }
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports  = router;