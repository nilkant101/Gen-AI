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

authRouter.post("/login",authController.loginUserController)


/**
 * @route GET/ api/auth/logout
 * @descriptio
 * @access public
*/

authRouter.get("/logout", authController.logoutUserController)




module.exports = authRouter;