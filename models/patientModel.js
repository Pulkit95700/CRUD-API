const mongoose = require("mongoose");

const patient = mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
  },
  disease: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
});

const Patient = mongoose.model("patient", patient);

module.exports = Patient;
