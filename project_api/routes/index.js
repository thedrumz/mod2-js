const express = require("express");
const router = express.Router();

const studentRoutes = require('./student');
const studentsRoutes = require('./students');
const swaggerRoutes = require('./swagger');

router.use('/student', studentRoutes);
router.use('/students', studentsRoutes);
router.use('/swagger', swaggerRoutes);

module.exports = router;