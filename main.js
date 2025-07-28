
function startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let time = 24 * 60 * 60;
    setInterval(() => {
        time--;
        let hours = String(Math.floor(time / 3600)).padStart(2, '0');
        let minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
        let seconds = String(time % 60).padStart(2, '0');
        countdownElement.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}
window.onload = startCountdown;
