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

document.getElementById('home').addEventListener('click', () => displayTemples(temples));
document.getElementById('old').addEventListener('click', () => {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0], 10);
        return year < 1900;
    });
    displayTemples(oldTemples);
});

document.getElementById('new').addEventListener('click', () => {
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0], 10);
        return year > 2000;
    });
    displayTemples(newTemples);
});

document.getElementById('large').addEventListener('click', () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
});

document.getElementById('small').addEventListener('click', () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
});

//    Temple object data
const temples = [
{
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},
{
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},
{
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},
{
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},
{
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},
{
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},
{
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},
{
    templeName: "Rexburg Idaho",
    location: "Rexburg, Idaho",
    dedicated: "2005, July, 30",
    area: 57504,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-775365-wallpaper.jpg"
},
{
    templeName: "Louisville Kentucky",
    location: "Crestwood, Kentucky",
    dedicated: "1999, May, 29",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/louisville-kentucky/400x250/louisville-temple-lds-408094-wallpaper.jpg"
},
{
    templeName: "Mount Timpanogos Utah",
    location: "American Fork, Utah",
    dedicated: "1993, October, 9",
    area: 107240,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mount-timpanogos-utah/400x250/mount-timpanogos-temple-lds-994445-wallpaper.jpg"
},
];


// Temple cards
const templeContainer = document.getElementById('temple-container');

function displayTemples(filteredTemples) {
    templeContainer.innerHTML = '';
    filteredTemples.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');

    templeCard.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Size:</strong> ${temple.area.toLocaleString()} square feet</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

        templeContainer.appendChild(templeCard);
    });

}

displayTemples(temples);