let btn = document.getElementById("btn");
let message = document.getElementById("message");

let count = 0;
let maxClick = 70;

let lastClickTime = 0;
let hovered = false;

// Desktop: hover chuột
btn.addEventListener("pointerenter", function () {
    hovered = true;
});

// Mobile: chạm
btn.addEventListener("touchstart", function () {
    hovered = true;
});

btn.addEventListener("click", function () {
    let now = Date.now();
    let diff = now - lastClickTime;
    lastClickTime = now;

    if (!hovered) {
        message.innerText = "Ê 😏 phải nhấn vào nút đã!";
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
        message.innerText = "Chúc mừng bạn đã khám phá hết bí mật 😈, bí mật chính là khả năng kiên trì và chịu đựng của bạn, nó đã đánh thức con người tiềm ẩn bên trong bạn, chúc bạn 1 ngày vui :D";
        btn.style.display = "none";
    } else {
        if (count === 30) {
            message.innerText = "Cố lên mọi bí mật sắp được phơi bày 😈";
        } 
        else if (count === 50) {
            message.innerText = "Cố lên sắp tới rồi đó 😈";
        }
        else if (count === 60) {
            message.innerText = "gần đến đích rồi 😈"; 
        }
        else if (count === 40) {
            message.innerText = "cố lên 😈"; 
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
    const buffer = 20;

    let maxX = document.documentElement.clientWidth - btn.offsetWidth - buffer;
    let maxY = document.documentElement.clientHeight - btn.offsetHeight - buffer;

    let randomX = buffer + Math.random() * maxX;
    let randomY = buffer + Math.random() * maxY;

    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
}
