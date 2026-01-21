import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "recruiter", ""], default: "" },

    // ---------------- STUDENT DETAILS ----------------
    studentDetails: {
      name: {
        firstName: { type: String, default: "" },
        middleName: { type: String, default: "" },
        lastName: { type: String, default: "" },
      },
      contact: {
        country: { type: String, default: "" },
        address: { type: String, default: "" },
        phone: { type: String, default: "" },
        email: { type: String, default: "" },
      },
      skills: { type: [String], default: [] },
      resumePath: { type: String, default: "" }, // file path of uploaded PDF
    },

    // ---------------- COMPANY DETAILS ----------------
    companyDetails: {
      companyName: { type: String, default: "" },
      companyWebsite: { type: String, default: "" },
      companyType: { type: String, default: "" },
      location: { type: String, default: "" },
      contactPerson: { type: String, default: "" },
      contactPhone: { type: String, default: "" },
      description: { type: String, default: "" },
      logoPath: { type: String, default: "" },      // for uploaded logo
      documentPath: { type: String, default: "" },  // for uploaded DOCX/PDF
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
