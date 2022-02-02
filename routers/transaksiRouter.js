const transaksiRouter = require("express").Router()
const TransaksiController = require("../controller/transaksiController")
const bedaharaAuth = require("../middleware/userAuthorization")
const AdminAutenticate = require("../middleware/AdminAutenticate")
const verAuthenticate = require("../middleware/varifikasiAuth")
const Authentication = require("../middleware/authentication")

transaksiRouter.get("/", Authentication, TransaksiController.getAll)
transaksiRouter.post("/", bedaharaAuth, TransaksiController.addTransaksi)
transaksiRouter.get("/jemaat", Authentication, TransaksiController.transaksiUser)
transaksiRouter.delete("/:id", bedaharaAuth, TransaksiController.deleteTransaksi)
transaksiRouter.put("/:id", bedaharaAuth, TransaksiController.updateTransaksi)

transaksiRouter.post("/anggaran", bedaharaAuth, TransaksiController.addAnggaran)
transaksiRouter.get("/anggaran", Authentication, TransaksiController.getAnggaran)
transaksiRouter.delete("/anggaran/:id", bedaharaAuth, TransaksiController.deleteAnggaran)
transaksiRouter.put("/anggaran/:id", bedaharaAuth, TransaksiController.editAnggaran)


module.exports = transaksiRouter