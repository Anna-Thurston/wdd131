// Element storage and variables
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Event Listeners
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('open');
	hambutton.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", (event) => {
    const today = new Date();
    document.getElementById("currentYear").innerText = today.getFullYear();
    const text = document.lastModified;
    document.getElementById("lastModified").innerHTML = text;
   });