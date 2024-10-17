const express = require('express');
const data = require('../controllers/datacontroller');
const shema = require('../schema');
const router = express.Router();

router.get('/', data.getdata);
router.get('/:id', data.getdatabyid);
router.post('/data', data.adddata);
router.put('/update', data.updatedata);
router.delete('/delete/:id', data.deletedata);


module.exports= router;
