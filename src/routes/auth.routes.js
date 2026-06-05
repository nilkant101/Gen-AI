const {Router} = require('express');
const authController = require("../controllers/auth.controller")

const authRouter = Router();

/**
 * @routed POST/api/auth/register
 * @description Register a new user
 * @access public
 */

authRouter.post("/register",authController.registerUserController)

module.exports = authRouter;

 