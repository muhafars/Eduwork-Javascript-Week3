alert(
  `Selamat datang di game tebak angka. Kamu diminta untuk menebak angka 1 - 3 dan kamu akan bermain dalam 5 ronde. Player yang berhasil mengumpulkan tebakan terbanyak akan menang. SELAMAT BERMAIN!!!`
);

let skorU1 = 0;
let skorU2 = 0;
let ronde = 1;
let stop = true;

while (stop) {
  let p1, p2;

  do {
    p1 = parseInt(prompt("Player 1: masukan angka"));
    p2 = parseInt(prompt("Player 2: masukan angka"));
  } while (!validasi(p1, p2));

  const random = getRandom();

  if (p1 === random) {
    skorU1++;
    alert("Player 1 Win");
  }

  if (p2 === random) {
    skorU2++;
    alert("Player 2 Win");
  }

  if (p1 !== random && p2 !== random) {
    alert("Tidak ada yang benar. Hasil SERI");
  }

  alert(`
  Nilai yang dicari: ${random}
  -----------------------------------
  - Player 1: ${skorU1}
  - Player 2: ${skorU2}`);

  ronde++;

  if (ronde <= 5) {
    stop = window.confirm("Ronde " + ronde + "?");
  } else {
    if (skorU1 > skorU2) {
      alert("Good Jobs Player 1");
    } else if (skorU1 < skorU2) {
      alert("Good Jobs Player 2");
    } else {
      alert(`Wow pertarungan yang sangat sengit`);
    }

    ronde = 1;
    skorU1 = 0;
    skorU2 = 0;
    stop = window.confirm("Mau main lagi?");
  }
}

function validasi(player1, player2) {
  const isInvalid =
    isNaN(player1) ||
    isNaN(player2) ||
    player1 < 1 ||
    player2 < 1 ||
    player1 > 3 ||
    player2 > 3 ||
    player1 === player2;

  if (isInvalid) {
    alert("Tebakan salah. Silahkan coba lagi.");
  }

  return !isInvalid;
}

function getRandom() {
  const range = [1, 2, 3];
  const randomIndex = Math.floor(Math.random() * range.length);

  return range[randomIndex];
}
