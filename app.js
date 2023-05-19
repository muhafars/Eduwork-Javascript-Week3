const kelas12B = {
  jumlah: 30,
  ranks: 1,
  major: "IPS",
  waliKelas: {
    nama: "Marlyn Sihaan",
    umur: 42,
  },
  perwakilanKelas: {
    ketuaKelas: "Muhammad Fajri Assidiq",
    wakilKetuaKelas: "Nur Aisya",
  },
  perlengkapanKelas: ["Spidol", "Penghapus", "Papan Tulis", "Proyektor"],
  siswaRankings: {
    1: "Muhammad Fajri Assidiq",
    2: "Muhammad Alpin Ramadhan",
  },
};

const {
  jumlah: anggota, //menginisialisasi dengan nama lainya
  ranks,
  major,
  waliKelas,
  perwakilanKelas: { ketuaKelas }, // mengambil salah 1 object properties
  perlengkapanKelas: [benda1, benda2, ...bendaLainya], // bermain dengan destructuring aray
  ...lainya //mencetak sisanya
} = kelas12B;
console.log(anggota, ranks, major, waliKelas, ketuaKelas, benda1, bendaLainya, lainya);
