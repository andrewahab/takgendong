// Ambil elemen tombol navigasi dan elemen-elemen bagian
const navAbout = document.getElementById('sectionAbout');
const navServices = document.getElementById('sectionServices');
const aboutUs = document.getElementById('about-us');
const services = document.getElementById('services');

// Sembunyikan semua bagian kecuali bagian pertama (section1)
services.style.display = 'none';

// Tambahkan event listener untuk tombol navigasi
navAbout.addEventListener('click', function () {
  aboutUs.style.display = 'block';
  services.style.display = 'none';
});

navServices.addEventListener('click', function () {
  aboutUs.style.display = 'none';
  services.style.display = 'block';
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

// Calculator //
function calculateTotal() {
  const service = document.getElementById('services-button').value;
  const jarak = parseInt(document.getElementById('jarak').value);
  const berat = parseInt(document.getElementById('berat').value);

  let startHarga, hargaPerKg;
  if (service === 'Anterin' || service === 'Jemputin') {
    startHarga = 10000;
    hargaPerKg = 8000;
  } else if (service === 'Gendongin') {
    startHarga = 20000;
    hargaPerKg = 10000;
  }

  const hargaJarak = Math.ceil(jarak / 5) * 5000; //kelipatan 5 km charge 5000
  const totalHarga = startHarga + hargaJarak + hargaPerKg * berat;

  document.getElementById('totalHarga').innerHTML = `Total Biaya: Rp ${totalHarga}`;
}
