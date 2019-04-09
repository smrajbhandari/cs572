const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://swagat:swagat@homework3-g4j1s.mongodb.net/MWA?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
let index;


router.use(function (req, res, next) {
  client.connect(err => {
    const collection = client.db("MWA").collection("lectures");
    const indexData = collection.find({}).sort({ _id: -1 }).limit(1).toArray(function (error, documents) {
      if (err) throw error;
      if (documents != null)
        index = documents[0]._id;
      else
        index = 0;
    })
    next();
  });
});


// Get list of grades
router.get('/', function (req, res, next) {
  client.connect(err => {
    const collection = client.db("MWA").collection("lectures");
    const data = collection.find({}).toArray(function (error, documents) {
      if (err) throw error;
      res.send(documents);
      // res.json(data);
    })
  });
});

// Add new grade
router.post('/', function (req, res, next) {
  console.log("index----- " + index);

  if (index == null)
    index = 0;

  const newGrade = {
    _id: ++index,
    course: req.body.course,
    lecture: req.body.lecture
  };

  client.connect(err => {
    const collection = client.db("MWA").collection("lectures");
    collection.insert(newGrade);
    res.status(201).json(newGrade);
  });

});
// findby parameter
router.post('/search/:q', function (req, res, next) {

  client.connect(err => {
    const collection = client.db("MWA").collection("lectures");
    collection.find({lecture: {$regex : `^.*${req.params.q}.*$`}}).toArray(function (error, documents) {
      console.log(documents);
      if (err) throw error;
      res.send(documents);
    })
  });

});

// Update grade
router.put('/:id', function (req, res, next) {

  const updatedGrade = {
    _id: parseInt(req.params.id),
    course: req.body.course,
    lecture: req.body.lecture
  };

  client.connect(err => {
    const collection = client.db("MWA").collection("lectures");
    collection.save(updatedGrade);
    res.status(202).json(updatedGrade);
  });
});


// Delete grade
router.delete('/:id', function (req, res, next) {


  client.connect(err => {
    const collection = client.db("MWA").collection("lectures");
    collection.remove({ _id: parseInt(req.params.id) });
    res.status(200).json({ msg: 'The Grade deleted successfully.' });
  });

});

module.exports = router;