const express = require("express");
const router = express.Router();
const statistics = require("./controllers/statistics");
const students = require("./controllers/students");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// Swagger
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

// Students routes
router.route(["/", "/students"]).get((req, res) => {
  const list = students.getAllStudents(req.query);

  res.send(list);
});

router.route(["/students/approved"]).get((req, res) => {
  const list = students.getAllStudents(req.query);

  res.send(statistics.approvedStudents(list));
});

router.route(["/students/failed"]).get((req, res) => {
  const list = students.getAllStudents(req.query);

  res.send(statistics.failedStudents(list));
});

router.route(["/students/best"]).get((req, res) => {
  const list = students.getAllStudents(req.query);

  res.send(statistics.bestStudents(list));
});

router.route(["/students/average"]).get((req, res) => {
  const list = students.getAllStudents(req.query);

  res.send(statistics.average(list).toString());
});

router.route(["/students"]).get((req, res) => {
  const list = students.getAllStudents(req.query);

  res.send(statistics.average(list).toString());
});

// Single student routes
router.route(["/student/:dni"]).get((req, res) => {
  const dni = req.params.dni.trim().toUpperCase();
  const student = students.getSingleStudentByDni(dni, req.query);

  res.send(student);
});

module.exports = router;
