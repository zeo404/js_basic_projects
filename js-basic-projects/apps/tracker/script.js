var kisiArttir = document
  .getElementById("kisiArttir")
  .addEventListener("click", function () {
    var sayi = document.getElementById("sayi").innerHTML;
    sayi = parseInt(sayi);
    sayi = sayi + 1;
    document.getElementById("sayi").innerHTML = sayi;
    if (sayi == 15) {
    }
    var toplamKisi = (document.getElementById("toplamKisi").innerHTML =
      "Gunluk Toplam Musteri: " + sayi);
  });
var kisiAzalt = document
  .getElementById("kisiAzalt")
  .addEventListener("click", function () {
    var sayi = document.getElementById("sayi").innerHTML;
    sayi = parseInt(sayi);
    sayi = sayi - 1;
    document.getElementById("sayi").innerHTML = sayi;
  });

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
