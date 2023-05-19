const checkVehiclePlate = function (plateNumber) {
  // Eliminasi tipe data string dengan regex
  const plateDigits = plateNumber.match(/\d+/g);

  // Check apakah data berupa string atau number
  if (plateDigits === null) {
    return "Invalid";
  } else {
    // Mengubah data number namun masih berupa string kedalam tipe data number
    const convertedDigits = plateDigits.map(digit =>
      /[13579]$/.test(digit) ? parseInt(digit) : digit
    );

    // Mengambil nilai akhir dari kumpulan data number
    const lastDigit = parseInt(convertedDigits[convertedDigits.length - 1]);

    // Check apakah lastDigit berupa ganjil atau genap apalagi bukan tipe data number
    if (isNaN(lastDigit)) {
      return "Invalid";
    } else {
      const isLastDigitOdd = lastDigit % 2 !== 0;
      return isLastDigitOdd ? "Ganjil" : "Genap";
    }
  }
};

// Data test dummy
const plateNumbers = {
  plate1: "B 2149 SLM",
  plate2: "D 3732 NKL",
  plate3: "Z 8001 FGH",
  plate4: "G 9999 ABC",
  plate5: "X 1234 XYZ",
  plate6: "ABCDEF",
};

for (let plate in plateNumbers) {
  console.log(`${plate}: ${checkVehiclePlate(plateNumbers[plate])}`);
}
