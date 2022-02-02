const { KelompokMA, Saldo, MataAnggaran, Transaksi, Jemaat, User, JenisTransaksi, Anggaran } = require("../models")
const moment = require("moment")


class TransaksiController {
    static addTransaksi(req, res) {
        // console.log(req.body);+
        let total = 0
        if (req.body.JenisTransaksiId == 2) {
            total = -req.body.jumlah
        } else total = req.body.jumlah

        // console.log("masuuk", req.loggedUser.JemaatId);
        // console.log(req.body, "req.body===================");
        let tanggal = req.body.tanggalTransaksi
        let bulan = moment(tanggal).get("month") + 1
        let tahun = moment(tanggal).get("year")
        // console.log(bulan, tahun, tanggal);
        Transaksi.create({
            namaTransaksi: req.body.namaTransaksi,
            keterangan: req.body.keterangan,
            tanggalTransaksi: tanggal,
            MataAnggaranId: +req.body.MataAnggaranId,
            jumlah: req.body.jumlah,
            status: "close",
            JenisTransaksiId: +req.body.JenisTransaksiId,
            KelompokMAId: +req.body.KelompokMAId,
            JemaatId: +req.loggedUser.JemaatId
        })
            .then(data => {
                // console.log(bulan, tahun, "============");
                Saldo.findOne({
                    where: {
                        bulan: bulan,
                        tahun: tahun,
                        JemaatId: +req.loggedUser.JemaatId
                    }
                })
                    .then(res => {
                        // console.log(res, "Reeeees");
                        if (!res) {
                            return Saldo.create({
                                bulan: bulan,
                                tahun: tahun,
                                JemaatId: +req.loggedUser.JemaatId,
                                jmlhSaldo: total
                            })
                        } else {
                            let updateSaldo = +res.jmlhSaldo
                            // console.log(updateSaldo, "saldooo awal");
                            if (req.body.JenisTransaksiId == 1) {
                                updateSaldo = updateSaldo + req.body.jumlah
                            } else if (req.body.JenisTransaksiId == 2) {
                                updateSaldo = updateSaldo - req.body.jumlah
                            }
                            // console.log(updateSaldo, "Saaaldo");
                            return Saldo.update({
                                jmlhSaldo: updateSaldo
                            }, {
                                where: {
                                    bulan: bulan,
                                    tahun: tahun,
                                    JemaatId: +req.loggedUser.JemaatId
                                }
                            })
                        }
                    })
            })

            .then(data => {
                res.status(201).json(data)
            })

            .catch(err => {
                res.status(401).json(err)
            })

    }
    static updateTransaksi(req, res) {
        let saldoBaru = 0

        Transaksi.findOne({
            where: {
                id: req.params.id,
                // status: "open",
                JemaatId: req.loggedUser.JemaatId
            }
        })
            .then(res => {
                if (!res) {
                    res.send(404).json("Tidk ada")
                } else {

                    Saldo.findOne({
                        where: {
                            bulan: moment(res.tanggalTransaksi).get("month") + 1,
                            tahun: moment(res.tanggalTransaksi).get("year"),
                            JemaatId: +req.loggedUser.JemaatId
                        }
                    })
                        .then(data => {
                            // console.log(res.JenisTransaksiId, "=========");
                            if (res.JenisTransaksiId == 1) {
                                saldoBaru = (Number(data.jmlhSaldo) - Number(res.jumlah))
                            } else if (res.JenisTransaksiId == 2) {
                                saldoBaru = (Number(data.jmlhSaldo) + Number(res.jumlah))
                            }

                            return Saldo.update({
                                jmlhSaldo: saldoBaru
                            }, {
                                where: {
                                    bulan: moment(res.tanggalTransaksi).get("month") + 1,
                                    tahun: moment(res.tanggalTransaksi).get("year"),
                                    JemaatId: +req.loggedUser.JemaatId
                                }
                            })
                        })
                        .then(data => {
                            return Saldo.findOne({
                                where: {
                                    bulan: moment(req.body.tanggalTransaksi).get("month") + 1,
                                    tahun: moment(req.body.tanggalTransaksi).get("year"),
                                    JemaatId: +req.loggedUser.JemaatId
                                }
                            })
                                .then(res => {
                                    if (!res) {
                                        return Saldo.create({
                                            bulan: moment(req.body.tanggalTransaksi).get("month") + 1,
                                            tahun: moment(req.body.tanggalTransaksi).get("year"),
                                            JemaatId: +req.loggedUser.JemaatId,
                                            jmlhSaldo: Number(req.body.jumlah)
                                        })
                                    } else {
                                        let updateSaldo = Number(res.jmlhSaldo)
                                        // console.log(updateSaldo, "saldooo awal");
                                        if (req.body.JenisTransaksiId == 1) {
                                            updateSaldo = Number(updateSaldo) + Number(req.body.jumlah)
                                        } else if (req.body.JenisTransaksiId == 2) {
                                            updateSaldo = Number(updateSaldo) - req.body.jumlah
                                        }
                                        // console.log(updateSaldo, "Saaaldo");
                                        return Saldo.update({
                                            jmlhSaldo: Number(updateSaldo)
                                        }, {
                                            where: {
                                                bulan: moment(req.body.tanggalTransaksi).get("month") + 1,
                                                tahun: moment(req.body.tanggalTransaksi).get("year"),
                                                JemaatId: +req.loggedUser.JemaatId
                                            }
                                        })
                                    }
                                })
                        })
                        .then(data => {
                            return Transaksi.update({
                                namaTransaksi: req.body.namaTransaksi,
                                keterangan: req.body.keterangan,
                                tanggalTransaksi: req.body.tanggalTransaksi,
                                MataAnggaranId: +req.body.MataAnggaranId,
                                jumlah: Number(req.body.jumlah),

                                JenisTransaksiId: +req.body.JenisTransaksiId,
                                KelompokMAId: +req.body.KelompokMAId,
                            }, {
                                where: {
                                    id: req.params.id,
                                    // status: "open",
                                    JemaatId: req.loggedUser.JemaatId
                                }
                            })
                        })
                }
            })
            .then(data => {
                res.status(201).json(data)
            })

            .catch(err => {
                res.status(401).json(err)
            })
    }


    static deleteTransaksi(req, res) {
        console.log("=================================")
        let saldoBaru = 0
        Transaksi.findOne({
            where: {
                id: req.params.id,
                // status: "open"
            }
        })
            .then((data) => {
                // console.log(+req.loggedUser.JemaatId, ".........");
                Saldo.findOne({
                    where: {
                        bulan: moment(data.tanggalTransaksi).get("month") + 1,
                        tahun: moment(data.tanggalTransaksi).get("year"),
                        JemaatId: +req.loggedUser.JemaatId,

                    }
                })
                    .then(res => {
                        // console.log(res, "=========");
                        if (data.JenisTransaksiId == 1) {
                            saldoBaru = (Number(res.jmlhSaldo) - Number(data.jumlah))
                        } else if (data.JenisTransaksiId == 2) {
                            saldoBaru = (Number(res.jmlhSaldo) + Number(data.jumlah))
                        }
                        // console.log(saldoBaru, "saldo");

                        return Saldo.update({
                            jmlhSaldo: Number(saldoBaru)
                        }, {
                            where: {
                                bulan: res.bulan,
                                tahun: res.tahun,
                                JemaatId: +req.loggedUser.JemaatId
                            }
                        })
                    })

            })
            .then(data => {
                return Transaksi.destroy({
                    where: {
                        id: req.params.id,
                        // status: "open"
                    }
                })
            })
            .then(data => {
                res.status(201).json(data)
            })

            .catch(err => {
                res.status(401).json(err)
            })
    }

    static getAll(req, res) {
        Transaksi.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset,
            include: [Jemaat],
            order: [["id", "desc"]]
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static transaksiUser(req, res) {
        Transaksi.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset,
            include: [KelompokMA, MataAnggaran],
            order: [["tanggalTransaksi", "desc"]],
            where: {
                JemaatId: req.loggedUser.JemaatId
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static changeStatus(req, res) {
        Transaksi.update({
            // status: "open"
        }, {
            where: {
                // status: "close",
                id: req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static addAnggaran(req, res) {
        Anggaran.findOne({
            where: {
                MataAnggaranId: req.body.MataAnggaranId,
                tahun: req.body.tahun,
                JemaatId: req.loggedUser.JemaatId,
            }
        })
            .then(data => {
                if (data) {
                    res.status(400).json({ msg: "Data Sudah ada" })
                } else if (!data) {
                    return Anggaran.create({
                        JenisTransaksiId: req.body.JenisTransaksiId,
                        KelompokMAId: req.body.KelompokMAId,
                        MataAnggaranId: req.body.MataAnggaranId,
                        tahun: req.body.tahun,
                        JemaatId: req.loggedUser.JemaatId,
                        jumlah: req.body.jumlah,
                    })
                        .then(data => {
                            res.status(200).json(data)
                        })
                        .catch(err => {
                            res.status(404).json(err)
                        })
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static editAnggaran(req, res) {
        Anggaran.update({
            JenisTransaksiId: req.body.JenisTransaksiId,
            KelompokMAId: req.body.KelompokMAId,
            MataAnggaranId: req.body.MataAnggaranId,
            tahun: req.body.tahun,
            jumlah: req.body.jumlah,
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static deleteAnggaran(req, res) {
        Anggaran.destroy({
            where: {
                id: req.params.id,
                JemaatId: req.loggedUser.JemaatId,
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static getAnggaran(req, res) {
        Anggaran.findAll({
            include: [MataAnggaran, KelompokMA],
            order: [["tahun", "asc"], ["id", "desc"]],
            where: {
                JemaatId: req.loggedUser.JemaatId,
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
}

module.exports = TransaksiController