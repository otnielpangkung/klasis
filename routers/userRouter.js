const userRouter = require("express").Router()
const UserController = require("../controller/userController")
const AdminAutenticate = require("../middleware/AdminAutenticate")
const Authentication = require("../middleware/authentication")

userRouter.post("/login", UserController.login)


// hanya bisa dilakukan oleh admin
userRouter.post("/register", AdminAutenticate, UserController.register)
userRouter.get("/", AdminAutenticate, UserController.getAllUser)
userRouter.delete("/:id", AdminAutenticate, UserController.deleteUser)


userRouter.put("/password", Authentication, UserController.changePassword)
userRouter.patch("/password/reset/:id", UserController.resetPass)
userRouter.post("/jemaat", AdminAutenticate, UserController.addJemaat)
userRouter.get("/jemaat", AdminAutenticate, UserController.getAllJemaat)
userRouter.delete("/jemaat/:id", AdminAutenticate, UserController.deleteJemaat)

module.exports = userRouter