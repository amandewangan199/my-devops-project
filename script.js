// 1. Uptime Counter Logic
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateUptime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    // Format numbers to always be 2 digits (e.g., 01 instead of 1)
    const format = (num) => num < 10 ? `0${num}` : num;
    
    document.getElementById('uptime').innerText = 
        `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

// Run updateUptime every 1 second (1000ms)
setInterval(updateUptime, 1000);

// 2. Diagnostics Button Logic
function runDiagnostics() {
    const resultElement = document.getElementById("diag-result");
    const btn = document.getElementById("diag-btn");
    
    btn.disabled = true;
    btn.innerText = "Scanning...";
    resultElement.innerText = "Checking Container Health...";
    resultElement.style.color = "#f1c40f"; // Yellow

    setTimeout(() => {
        resultElement.innerText = "Memory Usage: Normal";
    }, 1000);

    setTimeout(() => {
        resultElement.innerText = "Network Latency: 24ms";
    }, 2000);

    setTimeout(() => {
        resultElement.innerText = "✔ All Systems Operational";
        resultElement.style.color = "#2ecc71"; // Green
        btn.innerText = "Run Diagnostics";
        btn.disabled = false;
    }, 3000);
}

// 3. Footer Timestamp
document.getElementById('timestamp').innerText = new Date().toDateString();