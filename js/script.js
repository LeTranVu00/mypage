let btn = document.getElementById("btn");
let message = document.getElementById("message");

let count = 0;
let maxClick = 1000;

let lastClickTime = 0;
let hovered = false;

btn.addEventListener("mouseover", function () {
    hovered = true;
});

btn.addEventListener("click", function () {
    let now = Date.now();
    let diff = now - lastClickTime;
    lastClickTime = now;

    if (!hovered) {
        message.innerText = "Ê 😏 phải đưa chuột vào nút đã!";
        return;
    }

    hovered = false;

    let randomDelay = Math.random() * 150;
    if (diff < 120 + randomDelay) {
        message.innerText = "Click nhanh quá 😡 dùng tool hả?";
        return;
    }

    count++;

    if (count >= maxClick) {
        message.innerText = "Chúc mừng bạn đã khám phá hết bí mật 😈";
        btn.style.display = "none";
    } else {
        if (count === 30) {
            message.innerText = "Cố lên mọi bí mật sắp được phơi bày 😈";
        } 
        else if (count === 50) {
            message.innerText = "Cố lên sắp tới rồi đó 😈";
        } 
        else if (count < 30) {
            message.innerText = "khi nhấn đủ 30 lần thì bí mật sẽ được tiết lộ 😈";
        } 
        else {
            message.innerText = "Nhanh lênnn 😈";
        }

        moveButton();
    }
});

function moveButton() {
    let maxX = window.innerWidth - btn.offsetWidth;
    let maxY = window.innerHeight - btn.offsetHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
}
