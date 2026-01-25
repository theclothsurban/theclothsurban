const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.innerText = document.body.classList.contains('dark-theme') ? "☀️ Light Mode" : "🌙 Dark Mode";
});

document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('payment-modal').style.display = "block";
    });
});

function closeModal() {
    document.getElementById('payment-modal').style.display = "none";
}

function sendToWhatsApp() {
    const msg = encodeURIComponent("Hi Raj! Maine theclothsurban par payment kar di hai. Ye raha mera screenshot.");
    window.open(`https://wa.me/917046290518?text=${msg}`, '_blank');
}

window.onclick = (event) => {
    if (event.target == document.getElementById('payment-modal')) closeModal();
};
