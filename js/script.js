"use strick"

window.onload = () => {
    func();
}


// -------------------------- Date and greeting --------------------------
let time = document.querySelector('.time');
let date = document.querySelector('.date');

const greeting = document.querySelector('.greeting');
let day;
let month;

switch (new Date().getDay()) {
    case 0: 
        day = "Sunday"; 
        break;
    case 1: 
        day = "Monday"; 
        break;
    case 2: 
        day = "Tuesday"; 
        break;
    case 3: 
        day = "Wednesday"; 
        break;
    case 4: 
        day = "Thursday"; 
        break;
    case 5: 
        day = "Friday"; 
        break;
    case 6: 
        day = "Saturday"; 
        break;
}

switch (new Date().getMonth()) {
    case 0: 
        month = "January"; 
        break;
    case 1: 
        month = "February"; 
        break;
    case 2: 
        month = "March"; 
        break;
    case 3: 
        month = "April"; 
        break;
    case 4: 
        month = "May"; 
        break;
    case 5: 
        month = "June"; 
        break;
    case 6: 
        month = "July"; 
        break;
    case 7: 
        month = "August"; 
        break;
    case 8: 
        month = "September"; 
        break;
    case 9: 
        month = "October"; 
        break;
    case 10: 
        month = "November"; 
        break;
    case 11: 
        month = "December"; 
        break;
        
}

setInterval(() => {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    
    time.innerHTML = `${hour.toString().length === 1 ? `0${hour}` : hour}:${minute.toString().length === 1 ? `0${minute}` : minute}:${second.toString().length === 1 ? `0${second}` : second}`;
    
    if (hour <=6) {
        greeting.innerHTML = "Good morning";
    } else if (hour < 12) {
        greeting.innerHTML = "Good day";
    } else if ( hour <= 21) {
        greeting.innerHTML = "Good evening";
    } else {
        greeting.innerHTML = "Good night";
    }
    date.innerHTML = `${day}, ${month} ${now.getDate()}`;
});

const saveName = document.querySelector('.name');
saveName.value = localStorage.getItem('name');
saveName.addEventListener ("input", () => {
    localStorage.setItem("name", saveName.value)
})

// -------------------------- Carousel --------------------------
let funLoad = () => {
    const randNum = Math.floor(Math.random() * 20)+1;
    const imgNum = (randNum.toString().length) === 1 ? `0${randNum}` : randNum;
    const timeOfDay = (greeting.textContent).split(" ");
    document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay[1]}/${imgNum}.jpg)`; 
    document.body.style.backgroundSize = "cover";
}


let count = 1;
const slidePrev = document.querySelector('.slide-prev')
slidePrev.onclick = function() {
    const timeOfDay = (greeting.textContent).split(" ");
    count--;
    if (count === 21) {
        count = 1;
    } else if (count === 0){
        count = 20;
    }

    document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay[1]}/${(count.toString().length) === 1 ? `0${count}` : count}.jpg)`; 
    document.body.style.backgroundSize = "cover";
}

const slideNext = document.querySelector('.slide-next')
slideNext.onclick = function() {
    const timeOfDay = (greeting.textContent).split(" ");
    count++;
    if (count === 21) {
        count = 1;
    } else if (count === 0){
        count = 20;
    }

    document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay[1]}/${(count.toString().length) === 1 ? `0${count}` : count}.jpg)`; 
    document.body.style.backgroundSize = "cover";
}


// -------------------------- Weather widget --------------------------
let city = document.querySelector('.city');


city.value = "Минск";
city.value = localStorage.getItem('city');
city.addEventListener ("input", () => {
    localStorage.setItem("city", city.value)
    func ();
    
})

// API ключ
let apiKey = "a280267f7e682556010b5827de34d19f";
let url;

async function func () {
    
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&units=metric&appid=${apiKey}`
    const request = await fetch(url);
    const productsArray = await request.json();
    
    if (productsArray.id) {
        renderProducts(productsArray)
    } else {
        const temperature = document.querySelector('.temperature').innerHTML = productsArray.message;
        const wind = document.querySelector('.wind').classList.add("none");
        const humidity = document.querySelector('.humidity').classList.add("none");
        const weatherIcon = document.querySelector('.weather-icon').classList.add("none");
        const weatherDescription = document.querySelector('.weather-description').classList.add("none");
    }
    
}

function renderProducts (productsArray) {
    const wind = document.querySelector('.wind').classList.remove("none");
    const humidity = document.querySelector('.humidity').classList.remove("none");
    let weatherIcon = document.querySelector('.weather-icon').src = `http://openweathermap.org/img/wn/${productsArray.weather[0].icon}@2x.png`;
    const temperature = document.querySelector('.temperature').innerHTML = parseInt(productsArray.main.temp)  + "°C";  
    let weatherDescription = document.querySelector('.weather-description').innerHTML = productsArray.weather[0].description;
    const windCount = document.querySelector('.windCount').innerHTML = parseInt(productsArray.wind.speed) + " m/s";
    const humidityCount = document.querySelector('.humidityCount').innerHTML = parseInt(productsArray.main.humidity) + "%";
    weatherIcon = document.querySelector('.weather-icon').classList.remove("none");
    weatherDescription = document.querySelector('.weather-description').classList.remove("none");
    
}







