const express = require("express");
const router = express.Router();
const students = require("../controllers/students");

router.route(["/:dni"]).get((req, res) => {
  const dni = req.params.dni.trim().toUpperCase();
  const student = students.getSingleStudentByDni(dni, req.query);

  res.send(student);
});

module.exports = router;
