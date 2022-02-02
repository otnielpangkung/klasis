const router = require("express").Router()
const databaseRouter = require("./databaseRouter")
const transaksiRouter = require("./transaksiRouter")
const userRouter = require("./userRouter")




router.use("/database", databaseRouter)
router.use("/transaksi", transaksiRouter)
router.use("/user", userRouter)

module.exports = router