'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('MataAnggarans', [
      {

        namaMataAnggaran: "Persembahan Kolekte Pundi I Kebaktian Hari Minggu",
        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 1,
        code: "1.1.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Pundi IV Kebaktian Hari Minggu",
        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 1,
        code: "1.1.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Keb. Hari Raya/Khusus Gerejawi",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 1,
        code: "1.1.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Pundi I Kebaktian Keluarga",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 1,
        code: "1.1.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Baptisan Kudus",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 1,
        code: "1.1.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Perjamuan Kudus",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 1,
        code: "1.1.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Bulanan",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 1,
        code: "1.1.7.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Pundi I Keb. Insidentil Keluarga",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Kebaktian Paskah Keluarga",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Kebaktian Natal Keluarga",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Kebaktian Tutup Tahun Keluarga",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Keb. Perayaan Paskah Jemaat",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Keb. Perayaan Natal Jemaat",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Keb. Pemberkatan Nikah",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.7.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Kebaktian lainnya di Gereja",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.8.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Peneguhan Sidi",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.9.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Pemberkatan/Peneguhan Nikah",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.10.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Natal",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.11.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Tahunan",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.12.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Insidentil untuk Pelayanan Jemaat",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.13.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Perpuluhan",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.14.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Kotak Keluarga",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.15.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Lelang pada Kebaktian Jemaat",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.16.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Jasa Administrasi",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.17.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Aksi Pencarian Dana Intern",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.18.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Aksi Pencarian Dana Ekstern",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.19.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Lainnya",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 2,
        code: "1.2.20.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Pundi III Keb. Hari Minggu",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 3,
        code: "1.3.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Diakonia (Amplop Khusus)",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 3,
        code: "1.3.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Insidentil untuk pelayanan Diakonia",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 3,
        code: "1.3.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Iuran Dana Sehat",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 3,
        code: "1.3.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Pundi Kasih/Pundi Bolong",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 3,
        code: "1.3.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Les Kedukaan",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 3,
        code: "1.3.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Penerimaan Dana Diakonia Lainnya",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 3,
        code: "1.3.7.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Kotak Khusus di Gereja",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 4,
        code: "1.4.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Insidentil untuk DSM",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 4,
        code: "1.4.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Pengadaan Rumah Pastori",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 5,
        code: "1.5.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Insidentil untuk Pembangunan",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 5,
        code: "1.5.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Lelang untuk Pembangunan",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 5,
        code: "1.5.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Penerimaan Dana Pembangunan Lainnya",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 5,
        code: "1.5.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kolekte Pundi II Kebaktian Hari Minggu",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 6,
        code: "1.6.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Syukur Aksi Pangiu'",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 6,
        code: "1.6.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Kotak Khusus di gereja untuk BPSW-4",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 6,
        code: "1.6.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Persembahan Dana Transit Lainnya",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 6,
        code: "1.6.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Penerimaan Jasa Bank",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 7,
        code: "1.7.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Penerimaan Lainnya",

        JenisTransaksiId: 1,
        JemaatId: 1,
        KelompokMAId: 7,
        code: "1.7.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Jaminan Hidup Pengerja Gereja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 8,
        code: "2.1.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Iuran Pensiun Pengerja Gereja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 8,
        code: "2.1.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Pengobatan Pengerja Gereja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 8,
        code: "2.1.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "THR Pengerja Gereja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 8,
        code: "2.1.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Tunggakan Iuran Pensiun Pengerja Gereja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 8,
        code: "2.1.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Kontrak/sewa Rumah Pastori 2",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 8,
        code: "2.1.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Transport Tetap Pendeta Jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 9,
        code: "2.2.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Transport Pimpinan Majelis Gereja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 9,
        code: "2.2.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Transport Pimpinan Komisi Pelayanan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 9,
        code: "2.2.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Transport Koordinator Sektor Pelayanan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 9,
        code: "2.2.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Transport Guru Sekolah Minggu",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 9,
        code: "2.2.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Transport Perjalanan Dinas",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 9,
        code: "2.2.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Alat Tulis Kantor",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Fotocopy, Jilid dan cetakan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Penyusunan Program Kerja, Anggaran dan Laporan Kerja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Pengadaan Buku Panduan Pelayanan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Pengadaan Buku Perpustakaan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Pengandaan Alkitab untuk Pengantin",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rekening Telepon Kantor Jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.7.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rekening Telepon Gereja Rappocini",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.8.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rekening Telepon Pastori 1",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.9.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rekening Telepon Pastori 2",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.10.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja SMS Centre Jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.11.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rekening Listrik Gereja Dadi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.12.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rekening Listrik Gereja Rappocini",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.13.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rekening Listrik Pastori 1",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.14.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rekening Listrik Pastori 2",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.15.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rekening Air Gereja Dadi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.16.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rekening Air Gereja Rappocini",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.17.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rekening Air Pastori 1",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.18.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rekening Air Pastori 2",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.19.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja PBB/Retribusi Kebersihan Gereja Rappocini",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.20.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja PBB/Retribusi Kebersihan Pastori 1",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.21.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja PBB/Retribusi Kebersihan Pastori 2",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 10,
        code: "2.3.22.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rapat Pimpinan Majelis Gereja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 11,
        code: "2.4.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rapat Komisi Pelayanan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 11,
        code: "2.4.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rapat Koordinasi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 11,
        code: "2.4.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Rapat Panitia/Tim Kerja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 11,
        code: "2.4.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Sidang Majelis Gereja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 11,
        code: "2.4.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Sidang Majelis Gereja yang Diperluas",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 11,
        code: "2.4.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Pertemuan Pelayan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 11,
        code: "2.4.7.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja kesejahteraan Sekretariat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 11,
        code: "2.4.8.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Iuran Tetap ke BPK Makassar",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 12,
        code: "2.5.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Partisipasi Belanja Program Kerja BPK Makassar",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 12,
        code: "2.5.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Partisipasi Belanja Program Kerja BVK Makassar",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 12,
        code: "2.5.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "Belanja Dana Paket ke BPS-GT",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 12,
        code: "2.5.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "- Menyusun materi pembinaan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "- Menyusun jadwal pembinaan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "- Melaksanakan pembinaan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "- Mengevaluasi materi/pelaksanaan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "- Memanfaatkan Membangun Jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "- Memanfaatkan Buku Renungan Harian Toraya (ReHaT)",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {
        namaMataAnggaran: "- Menggunakan Buku Katekisasi Sidi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.7.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyiapkan bahan bacaan Alkitab harian",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.8.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyiapkan renungan harian/mingguan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.9.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pembentukan sel binaan/kelompok PA",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.10.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan pembinaan Gerakan Cinta Alkitab secara bertahap",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.11.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan evaluasi pengetahuan Alkitab warga jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.12.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan Kebaktian Hari Minggu",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.13.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan Kebaktian Hari Raya Gerejawi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.14.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan Kebaktian Khusus Gerejawi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.15.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan Kebaktian Keluarga",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.16.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan Kebaktian Insidentil Keluarga",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.17.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan Kebaktian OIG",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.18.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan Kebaktian - Kebaktian Khusus Lainnya :",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.19.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Kebaktian Penyegaran Iman",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.19.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Kebaktian Peneguhan/Pemberkatan Nikah",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.19.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Kebaktian Paskah Keluarga",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.19.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Kebaktian Natal Keluarga",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.19.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Kebaktian Tutup Keluarga",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.19.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Kebaktian Penghiburan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.19.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Perayaan Paskah Jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.19.7.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Perayaan Natal Jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.19.8.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan latihan lagu-lagu baru",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.20.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Memandu nyanyian jemaat dalam ibadah (kebaktian) jemaat :",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.21.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Kebaktian Hari Minggu",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.21.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Kebaktian Hari Raya Gerejawi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.21.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Kebaktian Khusus Gerejawi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.21.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Kebaktian-kebaktian khusus lainnya",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.21.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Kebaktian penyegaran iman",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.21.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Kebaktian peneguhan/pemberkatan nikah",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.21.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Kebaktian penghiburan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.21.7.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyusun nyanyian liturgi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.22.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan latihan kantoria/organis",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.23.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan pembinaan kantoria/organis",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.24.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengaktivkan latihan paduan suara/VG (Paduan Suara Jemaat)",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.25.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menjemaatkan pemahaman liturgi GT",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.26.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mensosialisasikan simbol dalam liturgi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.27.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menggunakan simbol dalam liturgi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.28.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan studi banding liturgi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.1.29.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Memfasilitasi ibadah keluarga",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.2.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyiapkan renungan harian keluarga",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.2.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan bimbingan orang tua untuk pembinaan anak dlm kel.",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.2.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan bimbingan orang tua menjadi GSM dalam rumah tangga",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.2.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan pendampingan pastoral keluarga",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.2.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan pembinaan orang tua ttg. pembentukan karakter sejak usia dini",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.2.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pembekalan orang tua yang akan membaptis anaknya",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.2.7.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pengajaran kelas katekisasi secara tuntas",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.2.8.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Katekisasi nikah kepada calon pengantin",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.2.9.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Ibadah orang tua bersama anak pada Kebaktian Hari Minggu/HRG",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.2.10.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Ibadah bersama orang tua dan anak dalam kebaktian keluarga/    ibadah keluarga",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.2.11.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Konvensi, refleksi atau retreat pendeta",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.3.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pembinaan Penatua dan Diaken sebelum diteguhkan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.3.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pembinaan/pembekalan Penatua/Diaken",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.3.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Konsultasi, refleksi atau retreat penatua",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.3.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Konsultasi, refleksi atau retreat diaken",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.3.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pemberlakuan disiplin gerejawi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.3.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pemilihan Penatua/Diaken sesuai Tata Gereja Toraja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.3.7.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "#NAME?",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.3.8.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pelatihan khotbah",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.4.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pelatihan pastoral",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.4.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pelatihan manajemen ibadah",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.4.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pelatihan manajemen gerejawi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.4.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pelatihan resolusi konflik",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.4.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pelatihan komunikasi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.4.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pembinaan untuk TOT",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.4.7.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menjemaatkan hasi konsultasi Pekabaran Injil Gereja Toraja (PI-GT)",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.5.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengalokasikan anggaran untuk Pekabaran Injil Gereja Toraja (PI-GT)",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.5.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menjemaatkan lokasi dan kebutuhan Pekabaran Injil Gereja Toraja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.6.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan bulan PI Gereja Toraja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.6.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengumpulkan dan menyalurkan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.6.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan pelatihan GCA untuk PPGT",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.7.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan pelatihan GCA untuk PWGT",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.7.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan pelatihan GCA untuk PKBGT",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.7.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan pelatihan GCA untuk SMGT",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.7.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menerapkan model pelatihan GCA PPGT",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.7.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menerapkan model pelatihan GCA PWGT",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.7.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menerapkan model pelatihan GCA PKBGT",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.7.7.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menggunakan Pedoman Sekolah Minggu sebagai bahan ajar di SMGT",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.7.8.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan pendampingan persidangan OIG",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.7.9.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan pendampingan rapat kerja OIG",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.7.10.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Meningkatkan kesadaran Majelis Gereja tentang tanggung jawab pelaksanaan program OIG",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.7.11.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan sosialisasi ibadah lintas generasi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.7.12.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan pendampingan pelaksanaan ibadah lintas generasi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.7.13.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyusun program kerja dan anggaran jemaat dgn melibatkan Pengurus Organisasi Intra Gerejawi (OIG)",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.8.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengintegrasikan program kerja dan anggaran Organisasi Intra Gerejawi  ke dalam program kerja dan anggaran jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.8.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengkoordiasikan pelaksanaan program kerja dan anggaran OIG",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.8.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan sharing dan pemahaman bersama hasil konsultasi OIG",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.9.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan pertemuan berkala Majelis Gereja dengan Pengurus OIG",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 13,
        code: "2.6.9.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Meningkatkan pemahaman warga jemaat ttg. persoalan korupsi dan  eksesnya dan upaya penanggulangannya dari sudut padang Alkitab",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.1.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Meningkatkan pemahaman warga jemaat ttg. persoalan korupsi dan  eksesnya dan upaya penanggulangannya dari sudut padang Alkitab  sosial budaya",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.1.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mendorong warga jemaat memiliki kesadaran hidup dengan budaya    taat hukum",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.1.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Koordinasi dengan pemerintah dan aparat keamanan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.2.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pendampingan petugas pemerintah dan aparat keamanan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.2.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Merumuskan penegasan sikap terkait penegakan supremasi hukum  dalam kehidupan bermasyarakat, berbangsa dan bernegara",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.2.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan pemahaman warga jemaat tentang hidup dalam   masyarakat majemuk dari sudut pandang Alkitab",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.3.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan pemahaman warga jemaat tentang hidup dalam   masyarakat majemuk dari sudut pandang sosial budaya",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.3.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan pemahaman warga jemaat tentang keterlibatan  gereja dalam bidang politik dari sudut pandang Alkitab",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.4.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan pemahaman warga jemaat tentang keterlibatan  gereja dalam bidang politik dari sudut pandang sosial budaya",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.4.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menjemaatkan hasil rumusan ucapan-ucapan protokoler rambu tuka'  dan rambu solo'",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.5.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menjemaatkan buku petunjuk pelaksanaan rambu tuka' dan  rambu solo' dalam terang injil",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.5.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyamakan persepsi dan pemahaman tentang aluk dan adat  di kalangan warga jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.5.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menjemaatkan konsep teologi Gereja Toraja tentang pelestarian  budaya Toraja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.5.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Membiasakan penggunaan bahasa Toraja sebagai alat komunikasi   (dalam keluaga dan sesuku)",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.5.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Membuat rumusan dan atau menjemaatkan penegasan sikap gereja   terkait dengan penyakit sosial dalam masyarakat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.6.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mendorong warga jemaat mebiasakan hidup menjauhkan diri dari  penyakit sosial masyarakat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.6.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan kesamaan sikap di antara semua pihak dalam  menghadapi budaya kekerasan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.7.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menjemaatkan penegasan sikap terkait dengan keterlibatan gereja dalam penanggulangan budaya kekerasan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.7.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menjemaatkan rumusan sistem atau pola pernyataan suara kenabian  yang efektiv dalam mengatasi masalah-masalah sosial budaya",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.8.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Memfasilitasi atau mendampingi warga jemaat atau kelompok  pemerhati masalah sosial budaya",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.8.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan pemahaman tentang keutuhan ciptaan dari  sudut pandang Alkitab",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.9.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan pemahaman tentang tanggung jawab warga jemaat  terhadap pemeliharaan lingkungan hidup (menjemaatkan dokumen   Gereja Toraja Go Green)",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.9.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Seminar/lokakarya dampak negatif TIK dalam keluarga",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.10.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Sosialisasi dan penjemaatan hasil seminar/lokakarya",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.10.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pelatihan warga jemaat sadar TIK",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.10.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pembuatan/penetapan akun resmi jemaat dan Pengurus OIG   di media sosial",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.11.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pendataan penggunaan fasilitas media sosial oleh anggota Majelis Gereja, Pengurus OIG dan warga jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.11.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pengelolaan akun resmi jemaat dan Pengurus OIG secara optimal",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 14,
        code: "2.7.11.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembankan pemahaman warga jemaat tentang bekarja/kegiatan ekonomi yang benar adalah amanah dan pengamalan iman",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.1.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan kemampuan dan kemauan pengelola jemaat untuk mendorong dan memfasilitasi usaha-usaha produktif warga jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.1.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Fasilitasi pemberian informasi lowongan pekerjaan bagi warga jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.1.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Peningkatan perhatian/dukungan warga jemaat terhadap anggota  jemaat kategori kurang mampu pada usia tidak produktif",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.2.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Peningkatan perhatian/pelayanan bagi anggota jemaat yang sakit/ mengalami musibah",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.2.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Peningkatan perhatian/pelayanan bagi  sesama yang mengalami musibah/bencana",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.2.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menjemaatkan PA tentang lingkungan hidup",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menjemaatkan produk-produk oikumene tentang lingkungan hidup",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Memfasilitasi warga jemaat mengikuti pelatihan pelestarian lingkungan hidup",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.3",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan bulan lingkungan hidup",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan gerakan peduli lingkungan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan penyuluhan/ceramah kesehatan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.6.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan pelayanan klinik kesehatan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.7.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Membudayakan gerakan rumah/pekarangan bebas sampah",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.8.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Memfasilitasi kegiatan senam/olah raga bersama",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.9.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mempraktekkan penggunaan kertas-kertas bekas di kantor gereja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.10.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Percontohan sekretariat ramah lingkungan di kantor gereja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.11.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan kegiatan rapat yang bebas sampah plastik, khususnya air minum kemasan botol dan styrofoam)",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.12.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menerapkan gerakan \"paperless\" pada administrasi kantor jemaat/  sekretariat OIG",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.13.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyepakati/menyetujui keabsahan pengiriman informasi melalui surat elektronik, sms, website dan akun remi jemaat di media sosial",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 15,
        code: "2.8.3.14.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Peningkatan perhatian/dukungan bagi jemaat terpencil",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 16,
        code: "2.9.1.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pemberian bantuan/dukungan melalui Dana Saling Membantu",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 16,
        code: "2.9.1.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan inventarisasi/pendataan seluruh aset yang dimiliki jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.1.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan pengurusan bukti kepemilikan aset jemaat yang sah secara hukum",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.1.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyusun rencana pengembangan aset secara prioritas",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.2.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyusun perencanaan pengembangan fungsi lahan dan gedung Gereja Dadi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.2.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyusun perencanaan pengembangan fungsi lahan dan gedung Gereja Rappocini",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.2.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengadakan barang inventaris sesuai skala prioritas dan kebutuhan pelayanan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.2.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Merencanakan pembangunan rumah pastori",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.2.5.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan inventarisasi aset yang layak pakai",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.3.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengoptimalkan pemanfaatan aset jemaat mendukung pelayanan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.3.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengusulkan penghapusan aset jemaat yang tidak layak pakai",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.3.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan penilaian aset jemaat (nilai setara kas) setiap tahun",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.3.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melaksanakan pemeliharaan rutin/berjangka waktu aset jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.4.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan perbaikan aset yang mengalami kerusakan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.4.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Memperbaharui daftar aset jemaat setiap akhir tahun",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.4.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Penggalangan dana donasi dari luar jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.5.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Penggalangan dana donasi dari dalam jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.5.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengatur/menjadwalkan pencarian dana secara kreatif dalam jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.5.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengatur/menjadwalkan pencarian dana secara kreatif ke luar jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.5.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyiapkan sistem dan perangkat pengelolaan keuangan secara transporan dan akuntabel",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.6.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengkoordinasikan dengan Panitia Anggaran penyusunan Rencana Anggaaran Pendapatan dan Belanja Jemaat tahunan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.6.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Membuat konsep materi pembinaan bendahara/pemegang kas yang relevan dengan sistem tata kelola keuangan jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.7.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengkoordinasikan dengan BVJ Klasis Mks/BVGT untuk mengundang fasilitator/pemateri pembinaan bendahara/pemegang kas",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.7.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan pendampingan para bendahara/pemegang kas sesuai kebutuhan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.7.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyelenggarakan administrasi keuangan yang didukung dengan kesatuan perangkat yang ditentukan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.8.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyajikan laporan dan pertanggungjawaban pengelolaan keuangan dengan memenuhi standar laporan yang ditentukan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.8.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menginventarisasi dan menata dokumen-dokumen/surat-surat berharga jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.9.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyimpan surat-surat berharga jemaat secara aman",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 17,
        code: "2.10.9.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan komunikasi dengan jemaat-jemaat dari denominasi  gereja yang seajaran untuk pemahaman bersama tentang urgensi  kemitraan ekumenis",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.1.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan komunikasi dengan jemaat-jemaat dari denominasi  gereja yang tidak seajaran untuk pemahaman bersama tentang urgensi kemitraan ekumenis",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.1.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan penjejakan kemungkinan bentuk-bentuk kerjasama ekumenis dengan jemaat/gereja yang seajaran",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.1.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan penjejakan kemungkinan bentuk-bentuk kerjasama   ekumenis dengan jemaat/gereja yang tidak seajaran",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.1.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan pemahaman dan kesadaran warga jemaat tentang hak dan kewajiban warga negara",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.2.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Memfasilitasi dan memberikan dorongan bagi warga jemaat untuk  terlibat dalam acara-acara atau kegiatan-kegiatan yang  diselenggarakan oleh pemerintah",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.2.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Melakukan penjejakan kemungkinan dilakukannya komunikasi lintas  agama (dialog antar agama, pelatihan kader lintas agama, dll.)",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.2.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pemahaman bersama tentang Tata Gereja Toraja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.3.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pemahaman bersama mengenai esensi dan etika persidangan gerejawi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.3.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Penjemaatan Keputusan SSA, RKGT, Rapat Kerja BPSW-4,  Sidang Klasis Makassar dan Rapat Kerja Klasis Makassar",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.3.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Penjabaran tema SSA, Visi, Misi, PPTPGT, GBPP dan PIGT dalam program kerja periodik/tahunan jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.3.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan pemahaman Majelis Gereja tentang sistem presbiterial sinodal secara komprehensif dan penerapan praktis dalam tata kelola jemaat",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.4.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan pemahaman anggota Majelis Gereja tentang substansi Tata Gereja Toraja dan Peraturan Khusus serta keputusan  persidangan lainnya",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.4.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Mengembangkan pemahaman bersama tentang tugas dan tanggung jawab pengelola/pelaksana keputusan persidangan gerejawi",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.4.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyiapkan materi persidangan/rapat secara secara komprehensif",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.5.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menetapkan dan memberlakukan secara konsekuen tata tertib persidangan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.5.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menindaklanjuti hasil keputusan persidangan/rapat secara cepat, tepat dan konsekuen",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.5.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Meng-update database jemaat berbasis Sistem Informasi Gereja (SIG)",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.116.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Membuat risalah kebutuhan TIK mendukung pelaksanaan fungsi kesekretariatan dan penatalayanan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.6.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Memfasilitasi pemberdayaan dan peningkatan kualitas SDM pengelola",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.6.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyusun tugas pokok dan fungsi ketatausahaan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.7.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyusun tugas pokok dan fungsi masing-masing personalia",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.7.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Pemahaman tugas bersama",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.7.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menata dokmentasi/arsip keputusan persidangan dan arsip jemaat lainnya",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.7.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menyusun standar operasional prosedur (SOP) kegiatan pelayanan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.8.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Memfasilitasi informasi dan komunikasi antar pihak terkait yang mengeksekusi program kerja/pelayanan",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.8.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "- Menerapkan sistem monitoring dan evaluasi pelaksanaan program kerja/pelayanan secara efektif",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 18,
        code: "2.11.8.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "Setoran Kolekte Pundi II ke BPS Gereja Toraja",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 19,
        code: "2.12.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "Setoran Persembahan Syukur Aksi Pangiu' ke BKGT",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 19,
        code: "2.12.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "Setoran Persembahan Kotak Khusus ke BPSW-4",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 19,
        code: "2.12.3.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "Setoran Dana Transit Lainnya",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 19,
        code: "2.12.4.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "Biaya Administrasi/Pajak Bank",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 20,
        code: "2.13.1.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      },
      {

        namaMataAnggaran: "Belanja Tak Disangka",

        JenisTransaksiId: 2,
        JemaatId: 1,
        KelompokMAId: 20,
        code: "2.13.2.",
        createdAt: "2021-01-01 00:00:00+08",
        updatedAt: "2021-01-01 00:00:00+08"
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('MataAnggarans', null, {});

  }
};
