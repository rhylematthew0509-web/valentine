const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
    window.location.href = "newpage.html";
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});