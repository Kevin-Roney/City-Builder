// import functions and grab DOM elements
//images and counter
const waterImg = document.getElementById('waterImage');
const skylineImg = document.getElementById('skylineImage');
const natureImg = document.getElementById('natureImage');
const counter = document.getElementById('imageChangeCount');

//city name
const cityNm = document.getElementById('cityName');
const cityNmInput = document.getElementById('cityNameInput');

//dropdowns
const waterDropdown = document.getElementById('waterSelector');
const skylineDropdown = document.getElementById('skylineSelector');
const natureDropdown = document.getElementById('natureSelector');

//slogans
const slgInput = document.getElementById('sloganInput');
const slgButton = document.getElementById('sloganButton');
const slg = document.getElementById('slogans');

// let state
let waterCount = 0;
let skylineCount = 0;
let natureCount = 0;

//slogans
const slogans = [];
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

waterDropdown.addEventListener('change', () => {
    const water = waterDropdown.value;
    waterCount++;
    waterImg.src = `./assets/${water}.jpg`;
    displayCountStats();
});
skylineDropdown.addEventListener('change', () => {
    const skyline = skylineDropdown.value;
    skylineCount++;
    skylineImg.src = `./assets/${skyline}.jpg`;
    displayCountStats();
});
natureDropdown.addEventListener('change', () => {
    const nature = natureDropdown.value;
    natureCount++;
    natureImg.src = `./assets/${nature}.jpg`;
    displayCountStats();
});
slgButton.addEventListener('click', () => {
    const newSlogan = slgInput.value;
    slogans.push(newSlogan);
    slgInput.value = '';
    displaySlogan();
});
//city name input event listener goes here
cityNmInput.addEventListener('input', () => {
    const newCity = cityNmInput.value;
    cityNm.textContent = newCity;
});
function displaySlogan() {
    slg.textContent = '';
    for (let slogan of slogans) {
        const pTag = document.createElement('p');
        pTag.classList.add('slogan');
        pTag.textContent = slogan;
        slg.append(pTag);
    }
}
function displayCountStats() {
    counter.textContent = `You have changed the head ${waterCount} times, the middle ${skylineCount} times and the bottom ${natureCount} times!`;
}