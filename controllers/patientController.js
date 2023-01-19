const Patient = require("../models/patientModel");

const getPatientRecord = async (req, res) => {
  const _id = req.params.id;

  try {
    const result = await Patient.findById(_id);
    if (!result) {
      throw new Error("result not found");
    }
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: "data could not be fetched",
      err: err.message,
    });
  }
};

const createPatientRecord = async (req, res) => {
  const patientRecord = new Patient({
    patientName: req.body.patientName,
    contactNo: req.body.contactNo,
    disease: req.body.disease,
    doctor: req.body.doctor,
  });

  patientRecord.save((err, doc) => {
    if (!err) {
      res.status(200).send(
        JSON.stringify({
          message: "data saved",
          id: doc._id,
        })
      );
    } else {
      res.status(400).send(
        JSON.stringify({
          message: "data not saved",
          err: err,
        })
      );
    }
  });
};

const updatePatientRecord = async (req, res) => {
  const _id = req.params.id;

  const update = {
    ...req.body,
  };

  try {
    const result = await Patient.findByIdAndUpdate(_id, update, {
      overwrite: true,
    });

    res.status(200).send({
      message: "record updated",
    });
  } catch (err) {
    res.status(400).send({
      message: "could not update data",
      err,
    });
  }
};

const deletePatientRecord = async (req, res) => {
  const _id = req.params.id;
  try {
    const result = await Patient.findByIdAndDelete(_id);

    res.status(200).send({
      message: "data deleted",
      result,
    });
  } catch (err) {
    res.status(400).send({
      message: "could not delete data",
      err,
    });
  }
};

module.exports = {
  getPatientRecord,
  createPatientRecord,
  updatePatientRecord,
  deletePatientRecord,
};

// patientNo
// contactNo
// disease
// doctor
