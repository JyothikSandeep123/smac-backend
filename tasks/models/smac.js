const mongoose = require("mongoose");

const StudentRegisterschema = new mongoose.Schema({
  full_name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlenght: [20, "name cannot be more than 20 letters"],
  },
  jntu_number: {
    type: String,
    required: [true, "must provide"],
    trim: true,
  },
  mobile_number: {
    type: String,
    required: [true, "must provide name"],

    trim: true,
  },
});
const FacultyRegistrationSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: [true, "must provide name"],
  },
  faculty_registration_number: {
    type: String,
    required: [true, "must provide registration number"],
  },
});
const studentRegistration = mongoose.model(
  "StudentRegistration",
  StudentRegisterschema
);
const facultyRegistration = mongoose.model(
  "FacultyRegistration",
  FacultyRegistrationSchema
);
module.exports = {
  studentRegistration,
  facultyRegistration,
};
// module.exports = mongoose.model(

// );
// postman validation
//student schema
// {

//     "full_name":"1dfdsjfb",
//     "jntu_number":"566",
//     "mobile_number":"9182499199"

// }
