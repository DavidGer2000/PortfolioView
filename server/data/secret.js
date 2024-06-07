require("dotenv").config();

exports.config = {
    mongoUrl : process.env.MONGO_URL,
    port : process.env.PORT,
    jwtSecret : process.env.JWT_SECRET,
    taseKey : process.env.TASE_API_KEY,
    taseSecret : process.env.TASE_API_SECRET
}