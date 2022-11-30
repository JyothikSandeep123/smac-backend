const mongoose = require("mongoose");

const StudentRegisterschema = new mongoose.Schema({
  full_name: {
    type: String,
    required: [true, "must provide name"],
    maxlenght: [20, "name cannot be more than 20 letters"],
  },
  jntu_number: {
    // required: [true, "must provide name"],
    type: String,
  },
  mobile_number: {
    //required: [true, "must provide name"],
    type: String,
  },
});
const FacultyRegistrationSchema = new mongoose.Schema({
  full_name: {
    type: String,
  },
  faculty_registration_number: {
    type: String,
  },
});
module.exports = mongoose.model("StudentRegistration", StudentRegisterschema);
module.exports = mongoose.model(
  "FacultyRegistration",
  FacultyRegistrationSchema
);
