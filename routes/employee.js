const express = require('express');
const router = express.Router();
const {
    index,
    show,
    Store,
    Update,
    destroy
} = require('../controllers/EmployesControllers');

router.get('/', index); 
router.get('/:id', show); 
router.post('/', Store); 
router.put('/:id', Update); 
router.delete('/:id', destroy);
module.exports = router;
