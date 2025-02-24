let timer;
let timeLeft;

// Cats
async function getCatFact() {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    document.getElementById('catFact').textContent = data.fact;
}

function startCount() {
    if (timer) return;

    timeLeft = parseInt(document.getElementById('timerInput').value);
    if (timeLeft < 1) return;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('countdown').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timer = null;
        }
    }, 1000);
}

function stopCount() {
    clearInterval(timer);
    document.getElementById('countdown').textContent = "Taimers apturēts";
    timer = null;
}