const express = require('express');
const router = express.Router();
//rutas routes
router.get('/', (req, res) => {
    res.render('index.html');
});
//par aexportar las rutas
module.exports = router;