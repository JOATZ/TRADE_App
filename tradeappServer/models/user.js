const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    addres: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true }
    },
    role: { type: String, required: true, default: 'user' },
    signupdate: { type: Date, default: Date.now },
    lastLogin: { type: Date }
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema)
