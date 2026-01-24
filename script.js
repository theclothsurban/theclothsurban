function welcome() {
    alert("Welcome to TheClothsUrban! Hamara naya collection jald hi aa raha hai.");
}

// Jab page load ho toh ek welcome message console mein dikhaye (sirf testing ke liye)
console.log("TheClothsUrban is Live!");

// Chota sa animation effect jab button par click ho
document.querySelector('.btn').addEventListener('click', function() {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 100);
});

document.querySelector('.subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert("Shukriya! " + email + " hamari VIP list mein add ho gaya hai. Launch par aapko update mil jayega.");
    this.reset();
});
