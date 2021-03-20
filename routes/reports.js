
const express = require('express');
const router = express.Router();
const passport = require('passport');
const report_api = require("../controllers/reportsapi");

router.get('/:status',passport.authenticate('jwt',{session: false}),report_api.reports);
router.get('/', report_api);
module.exports = router;