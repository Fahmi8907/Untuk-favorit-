function masuk() {
  // Efek miring dan love seperti sebelumnya
  const tombol = document.getElementById("tombol");
  tombol.style.transform = "rotate(-10deg) scale(1.1)";
  // Tambahkan efek love jatuh
  for (let i = 0; i < 20; i++) {
    let love = document.createElement("div");
    love.className = "love";
    love.innerText = "💖";
    love.style.left = Math.random() * 100 + "vw";
    love.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(love);

    setTimeout(() => {
      love.remove();
    }, 5000);
  }
}