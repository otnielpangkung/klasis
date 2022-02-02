'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('KelompokMAs',
      [
        {
          namaKelMa: "Persembahan Rutin",
          JenisTransaksiId: 1,
          JemaatId: 1,
          code: "1.1.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {
          namaKelMa: "Persembahan Non Rutin",
          JenisTransaksiId: 1,
          JemaatId: 1,
          code: "1.2.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {
          namaKelMa: "Persembahan Diakonia",
          JenisTransaksiId: 1,
          JemaatId: 1,
          code: "1.3.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {

          namaKelMa: "Persembahan Dana Saling Membantu",
          JenisTransaksiId: 1,
          JemaatId: 1,
          code: "1.4.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {
          namaKelMa: "Pesembahan Pengembangan/Pengelolaan Aset",
          JenisTransaksiId: 1,
          JemaatId: 1,
          code: "1.5.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {
          namaKelMa: "Persembahan Dana Transit",
          JenisTransaksiId: 1,
          JemaatId: 1,
          code: "1.6.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {
          namaKelMa: "Penerimaan Lain - Lain",
          JenisTransaksiId: 1,
          JemaatId: 1,
          code: "1.7.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {
          namaKelMa: "Belanja Personalia",
          JenisTransaksiId: 2,
          JemaatId: 1,
          code: "2.1.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {
          namaKelMa: "Belanja Transport dan Perjalanan Dinas",
          JenisTransaksiId: 2,
          JemaatId: 1,
          code: "2.2.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {

          namaKelMa: "Belanja Administrasi dan Langganan",
          JenisTransaksiId: 2,
          JemaatId: 1,
          code: "2.3.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {

          namaKelMa: "Belanja Rapat, Pertemuan dan Kesejahteraan Sekretariat",
          JenisTransaksiId: 2,
          JemaatId: 1,
          code: "2.4.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {

          namaKelMa: "Belanja Iuran Tetap",
          JenisTransaksiId: 2,
          JemaatId: 1,
          code: "2.5.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {

          namaKelMa: "Belanja Pembinaan Warga Jemaat dan PI",
          JenisTransaksiId: 2,
          JemaatId: 1,
          code: "2.6.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {

          namaKelMa: "Belanja Pemberdayaan Warga Jemaat",
          JenisTransaksiId: 2,
          JemaatId: 1,
          code: "2.7.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {

          namaKelMa: "Belanja Pelayanan Diakonia",
          JenisTransaksiId: 2,
          JemaatId: 1,
          code: "2.8.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {

          namaKelMa: "Belanja Pelayanan DSM",
          JenisTransaksiId: 2,
          JemaatId: 1,
          code: "2.9.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {

          namaKelMa: "Belanja Pengelolaan Aset dan Keuangan",
          JenisTransaksiId: 2,
          JemaatId: 1,
          code: "2.10.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {

          namaKelMa: "Belanja Pengembangan Kesekretariatan dan Penatalayanan",
          JenisTransaksiId: 2,
          JemaatId: 1,
          code: "2.11.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {

          namaKelMa: "Belanja Penerusan Dana Transit",
          JenisTransaksiId: 2,
          JemaatId: 1,
          code: "2.12.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        },
        {

          namaKelMa: "Belanja Lain - Lain",
          JenisTransaksiId: 2,
          JemaatId: 1,
          code: "2.13.",
          createdAt: "2021-01-01 00:00:00+08",
          updatedAt: "2021-01-01 00:00:00+08"
        }
      ]
    );

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('KelompokMAs', null, {});

  }
};
