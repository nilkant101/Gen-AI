const {Router} = require('express');
const authController = require("../controllers/auth.controller")

const authRouter = Router();

/**
 * @routed POST/api/auth/register
 * @description Register a new user
 * @access public
 */

authRouter.post("/register", authController.registerUserController)

/**
 * @routed POST/api/auth/login
 * @description login user with email or pass
 * @access public
 */

authRouter.post("/api/login",authController.loginUserController)

module.exports = authRouter;

 