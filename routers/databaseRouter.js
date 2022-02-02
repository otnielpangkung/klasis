const databaseRouter = require("express").Router()
// const { getOig } = require("../controller/databaseController")
const DataBaseController = require("../controller/databaseController")
const bedaharaAuth = require("../middleware/userAuthorization")
const Authentication = require("../middleware/authentication")
// dilakukan oleh bendahara
databaseRouter.post("/kelompokma", bedaharaAuth, DataBaseController.addKelompokMa)
databaseRouter.post("/mataanggaran", bedaharaAuth, DataBaseController.addMataAnggaran)
databaseRouter.put("/mataanggaran/:id", bedaharaAuth, DataBaseController.editMataAnggaran)
databaseRouter.put("/kelompokma/:id", bedaharaAuth, DataBaseController.editKelMa)

// databaseRouter.get("/oig", DataBaseController.getOig)
// databaseRouter.get("/oig/:id", DataBaseController.getOig1)


databaseRouter.get("/saldo", Authentication, DataBaseController.getSaldo)
databaseRouter.delete("/saldo/:id", Authentication, DataBaseController.deleteSaldo)
databaseRouter.put("/saldo/:id", Authentication, DataBaseController.resetSaldo)
databaseRouter.get("/jenistransaksi", DataBaseController.getJenisTransaksi)
databaseRouter.get("/kelma", Authentication, DataBaseController.getAllKelMa)
databaseRouter.get("/mataanggaran", Authentication, DataBaseController.getMataAnggaran)
// databaseRouter.post("/oig", DataBaseController.addOig)
// databaseRouter.post("/jenistransaksi", DataBaseController.addJenisTransaksi)

module.exports = databaseRouter