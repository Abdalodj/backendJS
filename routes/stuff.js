const express = require('express');
const stuffCtrl = require('../controllers/stuff');

const router = express.Router();

router.post('/', stuffCtrl.createThing);

router.put('/:id', stuffCtrl.modifyThing);

router.delete('/:id', stuffCtrl.deleteThing);

router.get('/:id', stuffCtrl.getOneThing);

router.get('/', stuffCtrl.getAllThings);

module.exports = router;