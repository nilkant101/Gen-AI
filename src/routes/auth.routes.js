const {Router} = require('express');
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middleware/auth.middleware")

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
 * @description clear token added token in blacklist
 * @access public
*/


/**
 * @route GET/ api/auth/logout
 * @description get the current logged in uer derails
 * @access public
*/

authRouter.get("/logout", authController.logoutUserController)

/**
 * @route GET/ api/auth/get-me
 * @description to get the current logged in uer details
 * @access public
*/

authRouter.get('/get-me',authMiddleware.authUser, authController.getMeController)

module.exports = authRouter;