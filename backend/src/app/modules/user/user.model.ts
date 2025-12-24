import mongoose, { Model, Schema } from 'mongoose';
import { hashPassword } from '../../../utils/auth';
import { IUser } from './user.interface';


// Define the schema for the user
const UserSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  image: {
    required: false,
    type: String
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

// Hash password before saving the user
/* UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      //  only run if password is modified, otherwise it will change every time we save the user!
      return next();
    }
    this.password = await hashPassword(this.password);
    next();
  }); */

  UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    if (!this.password.startsWith('$2b$')) { // Check if already hashed
        this.password = await hashPassword(this.password);
    }
    next();
});

const User: Model<IUser> = mongoose.models.User ?? mongoose.model<IUser>('User', UserSchema);

export default User;
