// Replace this with your new tunnel URL
const API_BASE = "https://surrounding-permitted-prepare-poor.trycloudflare.com";

async function checkMetrics() {
    const output = document.getElementById("metrics-output");
    output.innerHTML = "Loading...";

    try {
        const res = await fetch(`${API_BASE}/metrics`);
        const data = await res.json();
        output.innerHTML = JSON.stringify(data, null, 2);
    } catch (e) {
        output.innerHTML = "❌ Error: Cannot reach backend.";
    }
}

async function predict() {
    const pair = document.getElementById("pair-select").value;
    const output = document.getElementById("predict-output");
    output.innerHTML = "Loading...";

    try {
        const res = await fetch(`${API_BASE}/predict/${pair}`);
        const data = await res.json();
        output.innerHTML = JSON.stringify(data, null, 2);
    } catch (e) {
        output.innerHTML = "❌ Error: Cannot reach backend.";
    }
}