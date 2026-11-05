const students = [
    { name: "Fais", score: 90 },
    { name: "Jenggot", score: 85 },
    { name: "Aditya", score: 70 },
    { name: "Fadil", score: 95 },
    { name: "Kumis", score: 60 }
];


console.log("=== DAFTAR NILAI SISWA ===");
students.forEach(student => {
    console.log(`Nama: ${student.name}, Nilai: ${student.score}`);
});


const lulus = students.filter(student => student.score >= 75);
console.log("\n=== SISWA YANG LULUS ===");
console.log(lulus);


const namaSiswa = students.map(student => student.name);
console.log("\n=== DAFTAR NAMA SISWA ===");
console.log(namaSiswa);


const nilaiTertinggi = students.find(student => student.score >= 90);
console.log("\n=== SISWA DENGAN NILAI MINIMAL 90 ===");
console.log(nilaiTertinggi);
