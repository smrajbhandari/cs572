const express = require('express');
const router = express.Router();



const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01');


router.get('/', (req, res, next) => {
    client.connect(function (err) {

        const db = client.db('homework01');
        const collection = db.collection('data');
        const data = collection.find({}).project({ key: 1, message: 1, _id: 0 }).toArray(function (error, documents) {
            if (err) throw error;
            var key = documents[0].key;
            const encryptor = require('simple-encryptor')(key);
            res.send(encryptor.decrypt(documents[0].message));
        });
        console.dir("done");
    });


});

module.exports = router;