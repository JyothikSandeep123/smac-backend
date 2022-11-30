const express = require("express");
const router = express.Router();
const {
  postFacultyRegistration,
  postStudentRegistration,
} = require("../controller/smac");
router.route("/student").post(postStudentRegistration);
router.route("/faculty").post(postFacultyRegistration);
module.exports = router;
