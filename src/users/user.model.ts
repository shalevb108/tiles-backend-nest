import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: false },
});

export interface User {
  fullName: string;
  address: string;
  email: string;
  role: string;
  password?: string;
}
