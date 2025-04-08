


// Event Listeners
document.addEventListener("DOMContentLoaded", (event) => {
    const today = new Date();
    document.getElementById("currentYear").innerText = today.getFullYear();
    const text = document.lastModified;
    document.getElementById("lastModified").innerHTML = text;
})