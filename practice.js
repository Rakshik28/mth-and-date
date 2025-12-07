let otp = Math.floor(1000 + Math.random() * 9000);
console.log("OTP:", otp);

console.log(Math.PI.toFixed(4));

console.log(Math.min(2, 4, 6, 8, 10));

console.log(Math.max(2, 4, 6, 8, 10));

function printTime() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    console.log(`${h}:${m}:${s}`);
}

printTime();

let box = document.getElementById("myInput");

box.addEventListener("focus", function () {
    box.style.background = "blue";
});

box.addEventListener("blur", function () {
    box.style.background = "red";
});


function changeBlue() {
    document.getElementById("box").style.background = "blue";
}

function changeRed() {
    document.getElementById("box").style.background = "red";
}
