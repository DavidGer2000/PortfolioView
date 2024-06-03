const jwt = require("jsonwebtoken");
const { config } = require("../data/secret");

exports.auth = (req, res, next) => {
  let { access_token } = req.cookies;
  if (!access_token) {
   return res.json(null)
  }
  try {
    const decode = jwt.verify(access_token, config.jwtSecret);
    req.tokenData = decode;
    next();
  }
  catch (err) {
    res.json(null)
  }
}