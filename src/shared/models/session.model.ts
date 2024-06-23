import mongoose from "mongoose";

const AuthSessionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    require: true,
  },
}, {timestamps: true});

export const AuthSession = mongoose?.models?.AuthSession || mongoose.model('AuthSession', AuthSessionSchema);
