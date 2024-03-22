const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const travelerRoutes = require('./travelerRoutes');
const tripRoutes = require('./tripRoutes');

router.use('/locations', locationRoutes);
router.use('/travelers', travelerRoutes);
router.use('/trips', tripRoutes);