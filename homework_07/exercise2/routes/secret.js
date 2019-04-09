const express = require('express');
const router = express.Router();

// var key = 'Need a key';

// const encryptor = require('simple-encryptor')(key);

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01');


router.get('/', (req, res, next) => {
    client.connect(function (err) {

        const db = client.db('homework01');
        const collection = db.collection('data');
        const data = collection.find({}).project({ key: 1, message: 1, _id: 0 }).toArray(function (error, documents) {
            if (err) throw error;
            res.send(documents);
        });
        console.dir("done");
    });


});

module.exports = router;