const express = require("express");
require("dotenv").config();
const cors = require("cors");
const adminRouter = require("./routes/Admins.Route");
const ambulanceRouter = require("./routes/Ambulances.Route");
const appointmentRouter = require("./routes/Appointments.Route");
const doctorRouter = require("./routes/Doctors.Route");
const hospitalRouter = require("./routes/Hospitals.Route");
const patientRouter = require("./routes/Patients.Route");
const prescriptionRouter = require("./routes/Prescriptions.Route");
const reportRouter = require("./routes/Reports.Route");

const app = express();
const db = require("./configs/db");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Healthcare System");
});

app.use("/admin", adminRouter);
app.use("/ambulances", ambulanceRouter);
app.use("/appointments", appointmentRouter);
app.use("/doctors", doctorRouter);
app.use("/hospitals", hospitalRouter);
app.use("/patients", patientRouter);
app.use("/prescriptions", prescriptionRouter);
app.use("/reports", reportRouter);

// Fix 1: Use PORT (uppercase) and provide fallback
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    // Fix 2: Better database connection testing using Promise-based approach
    const result = await db.query("SELECT NOW()");
    console.log("Connected to the database at", result.rows[0].now);
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    console.error("Full error:", error);
  }
  console.log(`Server listening at port ${PORT}`);
});