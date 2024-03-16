import {model, models, Schema} from "mongoose";

const UserSchema = new Schema({
  name: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String,
    required: true, validation:pass =>{
      new Error('password must be at least 5 characters');
    }},
  image: {type: String},
}, {timestamps: true});

export const User = models?.User || model('User', UserSchema);