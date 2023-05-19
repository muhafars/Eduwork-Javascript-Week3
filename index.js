let nilai = prompt("Masukkan Nilai anda: ");

if (nilai >= 85 && nilai <= 100) {
  alert("Nilai anda A");
} else if (nilai >= 60 && nilai < 85) {
  alert("Nilai anda B");
} else if (nilai >= 40 && nilai < 60) {
  alert("Nilai anda C");
} else if (nilai >= 20 && nilai < 60) {
  alert("Nilai anda D");
} else {
  alert("Nilai anda E atau anda Belum Memasukkan Nilai");
}
