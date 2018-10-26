// We want to add express router here

const express = require('express');
const router = express.Router(); //Router is part of express object

//Item Model (to make queries to find things, like item.find, to save etc)
const Item = require('../../models/Item'); // Caps I in Item as it is a Model

// @route   GET api/items
// @desc    Get All Items
// @access Public
router.get('/', (req, res) => {             // in server.js we could do app.get, we just put a '/' here and not '/api/items' as whenever a request is made by an http client, it goes directly to the file since we are using router so we are already in '/api/
    Item.find()
        .sort({date: -1})   // with mongoose we can use .sort, -1 is DESC, 1 is ASC
        .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create a Item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name         //Since this is POST, we get the name value in req(i.e. request) in body which is done with the help of body parser, we do not necessarily need date as that is picked from the system(Check Item model)
    });

    newItem.save().then(item => res.json(item)); //newItem loaded with data which is saved using .save() which is promise based so .then() used, then we take item and spit it out in json
});

// @route   DELETE api/items/:id
// @desc    Delete an Item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json('id not found')); //Delete requires an id, req.param.id fetches id from uri
});


module.exports = router; // We could do 'export default router' i.e. in ES6 fashion, had we been using Babel to transpile our code