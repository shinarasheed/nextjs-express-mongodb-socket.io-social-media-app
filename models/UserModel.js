const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true, select: false },

    username: { type: String, required: true, unique: true, trim: true },

    profilePicUrl: { type: String },

    newMessagePopup: { type: Boolean, default: true },

    unreadMessage: { type: Boolean, default: false },

    unreadNotification: { type: Boolean, default: false },

    role: { type: String, default: 'user', enum: ['user', 'root'] },

    //password reset token
    resetToken: { type: String },

    //time for password reset token to expire
    expireToken: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
