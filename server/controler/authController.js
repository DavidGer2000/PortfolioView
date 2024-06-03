const bcrypt = require("bcrypt");
const { UserModel, validateSignUp, validateLogin, createToken } = require("../models/userModel");

exports.signUp =  async (req, res) => {

    let validBody = validateSignUp(req.body);
  
    if (validBody.error) {
      return res.status(400).json(validBody.error.details)
    }
    try {
  
      let user = UserModel(req.body);
      user.password = await bcrypt.hash(user.password, 10);
      await user.save();
      const newToken = createToken(user._id)
      user.password = "******"
      res.cookie("access_token",newToken,{
        httpOnly:false,
        expires: new Date(Date.now() + 1000 * 60 * 60)
      }).
      json(user);
    }
    catch (err) {
  
      if (err.code == 11000) {
        return res.status(400).json({ msg: "Email already in system", code: 11000 })
      }
      console.log(err);
      res.status(502).json({ err })
    }
  
  }
  
  exports.login = async (req,res) => {
  
    let validBody = validateLogin(req.body);
    if(validBody.error){
      return res.status(400).json(validBody.error.details)
    }
    try{
  
      let user = await UserModel.findOne({ email: req.body.email })
      if (!user) {
        return res.json({ err: "Email or password wrong" }).status(401);
      }

      const validPass = await bcrypt.compare(req.body.password, user.password);
      if (!validPass) {
        return res.status(401).json({ err: "Email or password wrong" });
      }
      const newToken = createToken(user._id)
      user.password = "******"
      res.cookie("access_token",newToken,{
        secure: true,
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60)
      }).
      json(user,)
    } 
    catch(err){
      res.status(502).json({ err })
    }
  
  }
  
  exports.authProfile =  async (req, res) => {
     let user = await UserModel.findOne({ _id: req.tokenData._id},{password:0})
     res.json(user);
  }

  exports.logout =  async (req, res) => {
    let { access_token } = req.cookies;
    res.cookie("access_token",access_token,{
      httpOnly:false,
      expires: new Date( Date.now() - 999999 )
    }).
    json({msg:"logout successful"},)
 }