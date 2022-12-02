const { rawListeners } = require("process");
const asyncWrapper = require("../middleware/async");
const { studentRegistration, facultyRegistration } = require("../models/smac");
// const FacultyRegistration = require("../models/smac");

const postStudentRegistration = asyncWrapper(async (req, res) => {
  console.log(req.body);
  const student_details = await studentRegistration.create(req.body);
  console.log(student_details);
  res.status(201).json({ student_details });
});
const postFacultyRegistration = asyncWrapper(async (req, res) => {
  const faculty_details = await facultyRegistration.create(req.body);
  res.status(201).json({ faculty_details });
});

// const postStudentRegistration = async (req, res) => {
//   try {
//     console.log(req.body);
//     const student_details = await StudentRegistration.create(req.body);
//     console.log(student_details);
//     res.status(201).json({ student_details });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
//   // res.send("student registration schema")
// };

module.exports = {
  postStudentRegistration,
  postFacultyRegistration,
};
