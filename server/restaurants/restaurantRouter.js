
const logger = require('./../../applogger');
const router = require('express').Router();
const Restaurant = require('./restaurantEntity').restaurant;

router.post('/add', function(req, res) {
    logger.debug("Inside restaurant add post");
    let newRestaurant = new Restaurant(req.body);

    newRestaurant.save().then((doc)=>{
      res.send(doc);
    },(err)=>{
      res.send(err);
    });
});

router.patch('/update/:id', function(req, res) {
    logger.debug("Inside restaurant update post");
    let id = req.params.id;
    Restaurant.findByIdAndUpdate(id,{$set:{"comments":req.body.comments}},{new:true}).then((doc)=>{
      res.send(doc);
    },(err)=>{
      res.send(err);
    });
});

router.delete('/delete', function(req, res) {
    logger.debug("Inside restaurant delete post");
    // let id = req.params.id;
    Restaurant.remove({_id:req.body.resId}).then((doc)=>{
      res.send(doc);
    },(err)=>{
      res.send(err);
    });
});

router.get('/', function(req, res) {
  logger.debug('Inside get');
  Restaurant.find().then((docs)=>{
    res.send(docs);
  },(err)=>{
    res.send(err);
  });
});

module.exports = router;
