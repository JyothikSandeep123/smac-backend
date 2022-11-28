const { rawListeners } = require("process");
const StudentRegistration = require("../models/smac");
const FacultyRegistration = require("../models/smac");

const postStudentRegistration = async (req, res) => {
  try {
    console.log(req.body);
    const student_details = await StudentRegistration.create(req.body);
    console.log(student_details);
    res.status(201).json({ student_details });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // res.send("student registration schema")
};
const postFacultyRegistration = async (req, res) => {
  try {
    const faculty_details = await FacultyRegistration.create(req.body);
    res.status(201).json({ faculty_details });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // res.send('Faculty Registration details')
};

module.exports = {
  postStudentRegistration,
  postFacultyRegistration,
};
