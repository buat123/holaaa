const tombol = document.getElementById("btn");

function klik() {
  const btn = document.createElement("a");
  btn.textContent = "iyaaaa sayang";
  tombol.append(btn)
  alert('ehhhh.. bukan tombol yang ini.. yang sebelahnya 😁')
  btn.style.backgroundColor = "blue";
  btn.style.color = "white";
  btn.style.border = "1px solid black"
  btn.href = '#section3';
}

const message = [
    "maafin aku lah sayang :)",
    "pikir-pikir lagi atuh sayang :(",
    "plissss lahh sayangggggg",
    "sayangggg maafin akuuuuu"
]

let awal= 0;

function tak() {
    alert(message[awal]);
    awal = (awal + 1) % message.length;
}