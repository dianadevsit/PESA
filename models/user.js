const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: "Username is Required"
      },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]},
      applications: [
        {
          type: Schema.Types.ObjectId,
          ref: "Pesa"
        }
      ]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

// module.exports = User;
