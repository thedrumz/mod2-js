const express = require("express");
const router = express.Router();
const statistics = require("../controllers/statistics");
const students = require("../controllers/students");

router.route(["/"]).get((req, res) => {
  const list = students.getAllStudents(req.query);

  res.send(list);
});

router.route(["/approved"]).get((req, res) => {
  const list = students.getAllStudents(req.query);

  res.send(statistics.approvedStudents(list));
});

router.route(["/failed"]).get((req, res) => {
  const list = students.getAllStudents(req.query);

  res.send(statistics.failedStudents(list));
});

router.route(["/best"]).get((req, res) => {
  const list = students.getAllStudents(req.query);

  res.send(statistics.bestStudents(list));
});

router.route(["/average"]).get((req, res) => {
  const list = students.getAllStudents(req.query);

  res.send(statistics.average(list).toString());
});

module.exports = router;
