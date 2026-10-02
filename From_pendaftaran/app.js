// Script Form Handling & Client-Side Validation
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah reload halaman
  // Mengambil Nilai Input
  const fullName = document.getElementById('fullName').value.trim();
  const nis = document.getElementById('nis').value.trim();
  const studentClass = document.getElementById('studentClass').value;
  const division = document.getElementById('division').value;
  // Validasi Sederhana
  if(fullName === '' || nis === '') {
    alert('Harap isi seluruh data formulir dengan lengkap!');
    return;
  }
  // Tampilkan Hasil Konfirmasi Pendaftaran
  const resultCard = document.getElementById('resultCard');
  const resultDetails = document.getElementById('resultDetails');
  resultDetails.innerHTML = `
    Selamat ${fullName} (${nis}) dari kelas ${studentClass}.
    Kamu resmi terdaftar pada divisi ${division} Coding Club.
  `;
  resultCard.classList.remove('hidden');
});