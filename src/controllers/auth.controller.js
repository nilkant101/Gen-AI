const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs");
const jwt = require


/**
 * @name registerUserController
 * @description Register a new user, expect username, email and password in the request body
 * @access public
 */
async function registerUserController( req, res ){
    const { username, eamil, passworld } = req.body;

   if(!usernmae || !email || !password){
            return res.status(400).json({
            message:"Please provide username, emial And password"
        })
   }

   const isUserAlreadyExists = await userModel.findOne({
      $or: [{username},{email}]
   })

   if(isUserAlreadyExists){
       return res.status(400).json({
         message:"Account already exists with this email"
       })
   }

   const hash = await bcrypt.hash(password, 10);

   const user = await userModel.create({
    username, email, password:hash
   })

    const token = jwt.sign(
    {id:user._id, username: user.username},
    process,env,JWT_SECRET,
    {expresIn: "1d"}
    )
    
    res.cookie("token", token)

    res.status(201).json({
        message: "User registered sucessfully",
        user:{
            id: user._id,
            username: user.username,
            email:user.email
        }
    })

}




module.exports = {
    registerUserController
}