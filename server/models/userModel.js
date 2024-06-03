const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const {config} = require("../data/secret")

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true  
    },
    password: String,
    date: {
        type: Date, default: Date.now
    }
})

exports.UserModel = mongoose.model("users", userSchema);

exports.createToken = (user_id) =>{
    const token = jwt.sign({_id:user_id},config.jwtSecret,{expiresIn:"1h"})
    return token;
}

exports.validateSignUp = (_reqBody) => {
    const joiSchema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        email: Joi.string().min(2).max(100).email().required(),
        password: Joi.string().min(6).max(100).required()
    })
    return joiSchema.validate(_reqBody)
}

exports.validateLogin = (_reqBody) => {
    const joiSchema = Joi.object({
        email: Joi.string().min(2).max(100).email().required(),
        password: Joi.string().min(6).max(100).required()
    })
    return joiSchema.validate(_reqBody)
}