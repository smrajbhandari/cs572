const express = require('express');
const router = express.Router();


router.get('/find/:c', (req,res, next)=>{

    const collection = req.app.locals.db.collection('locations');

    collection.find({
        category:`${req.params.c}`,
        location : { $near : [-91.9665342, 41.017654] }
    })
    .limit(3).toArray((err,result)=>{
        if(err){
            return res.status(500).json({err});
        }
        return res.status(200).json(result);
    });

});


router.post('/insert', (req,res, next)=>{

    const newLocation = {
        name: req.body.name,
        category: req.body.category,
        location: [req.body.long,req.body.lat]
      };

      
    const collection = req.app.locals.db.collection('locations');
    collection.insertOne(newLocation,(err,insertedLocation)=>{
        if(err) return res.status(500).json({err});
        collection.createIndex({location: '2d'});
        return res.status(201).json(insertedLocation);
    });
    
    
});

module.exports = router;