const express = require("express");
const {
  getPatientRecord,
  createPatientRecord,
  updatePatientRecord,
  deletePatientRecord,
} = require("../controllers/patientController");

const router = express.Router();

router.get("/:id", getPatientRecord);
router.post("/create/", createPatientRecord);
router.put("/update/:id", updatePatientRecord);
router.delete("/delete/:id", deletePatientRecord);

module.exports = router;
