const result = document.getElementById("result");

function showMessage() {
    showResult(
        "Thank you for clicking yes, and thank you for being the best girlfriend in the whole world! HEHEH I love you so so much and I want to have a date with you on Feb. 14 even if it's only an online date. Thank you for showing up for me even when you're really tired and I'm always proud of you and your efforts, my love. I hope I am doing the same for you. Happy Valentine's Day!💕"
    );
}

function showDate() {
    showResult(
        "Let's watch a movie through Discord since we are not able to go on a physical date(depression).🥰"
    );
}

function showSurprise() {
    showResult(
        "Surprise unlocked: Hugs, Kisses, and a cuddle buddy for your whole life.😘"
    );
}

function showResult(text) {
    result.textContent = text;
    result.style.opacity = "1";
    result.style.transform = "translateY(0)";
}

