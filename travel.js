
let searchBtn = document.querySelector("#search-btn")
let searchForm = document.querySelector(".search-form")
let loginForm = document.querySelector(".login-form")
let menuBar = document.querySelector("#menu-bar")
let amenu = document.querySelector(".navbar")
let vidBtn = document.querySelectorAll(".video-btn")
function searchPage(event) {
    event.preventDefault(); 

    let query = document.querySelector("#search-bar").value.toLowerCase(); 

    let sections = {
        "home": "#home",
        "book": "#book",
        "packages": "#packages",
        "services": "#services",
        "gallary": "#gallary",
        "review": "#review",
        "contact": "#contact"
    };
    if (query === ""){
        alert("Please Enter The Name Of The Section!");
        searchBar.focus();
        return;
    }
    if (sections[query]) {
        window.location.href = sections[query]; 
    } else {
        alert("The section is not found!"); 
    }
    
}

function showbar() {
    searchBtn.classList.toggle("fa-times")
    searchForm.classList.toggle("active")
}
function showform() {
    loginForm.classList.add("active")
}
function hideform() {
    loginForm.classList.remove("active")
}
function showmenu() {
    menuBar.classList.toggle("fa-times")
    amenu.classList.toggle("active")
}
vidBtn.forEach(slide => {
    slide.addEventListener("click", function () {
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");
        let src = slide.getAttribute("data-src");
        document.querySelector("#video-slider").src = src
    })
})
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        deplay: 2500
    },
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});



////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

const validCountries = ["France", "USA", "Germany", "Japan", "Italy", "Lebanon", "Spain", "Canada", "Australia", "Egypt", "Brazil"];


const airports = {
    "France": ["Charles de Gaulle", "Orly", "Nice Côte d'Azur"],
    "USA": ["JFK", "LAX", "ORD", "ATL"],
    "Germany": ["Frankfurt", "Munich", "Berlin"],
    "Japan": ["Narita", "Haneda", "Kansai"],
    "Italy": ["Rome Fiumicino", "Milan Malpensa", "Venice Marco Polo"],
    "Spain": ["Madrid Barajas", "Barcelona El Prat", "Seville"],
    "Canada": ["Toronto Pearson", "Vancouver", "Montreal"],
    "Australia": ["Sydney", "Melbourne", "Brisbane"],
    "Egypt": ["Cairo", "Alexandria", "Luxor"],
    "Brazil": ["São Paulo", "Rio de Janeiro", "Brasília"],
    "Lebanon": ["Rafik el Hariri", "El Klayaat"]
};

function validateCountry() {
    let input = document.getElementById("destination").value;
    let errorSpan = document.getElementById("destination-error");

    if (!validCountries.includes(input)) {
        errorSpan.textContent = "please enter a recognized country!";
    } else {
        errorSpan.textContent = "";
    }
}

function validatePeople() {
    let input = document.getElementById("people").value;
    let errorSpan = document.getElementById("people-error");

    if (input < 1 || input > 10) {
        errorSpan.textContent = "The number must be between 1 and 10!";
    } else {
        errorSpan.textContent = "";
    }
}

function validateArrival() {
    let country = document.getElementById("destination").value;
    let input = document.getElementById("arrival").value;
    let errorSpan = document.getElementById("arrival-error");

    if (!validCountries.includes(country)) {
        errorSpan.textContent = "Please choose a airport first!";
        return;
    }

    if (!airports[country] || !airports[country].includes(input)) {
        errorSpan.textContent = "Please enter a valid airport in this country!";
    } else {
        errorSpan.textContent = "";
    }
}

function validateLeaving() {
    let country = document.getElementById("destination").value;
    let arrival = document.getElementById("arrival").value;
    let input = document.getElementById("leaving").value;
    let errorSpan = document.getElementById("leaving-error");

    if (!validCountries.includes(country)) {
        errorSpan.textContent = "Please choose a airport first!";
        return;
    }

    if (!airports[country] || !airports[country].includes(input)) {
        errorSpan.textContent = "Please choose a airport first!";
    } else if (input === arrival) {
        errorSpan.textContent = " The departure airport can't be the same as the  arrival airport!"
    } else {
        errorSpan.textContent = "";
    }
}
function validateForm(){
    let destination = document.getElementById("destination").value;
    let people = document.getElementById("people").value;
    let arrival = document.getElementById("arrival").value;
    let leaving = document.getElementById("leaving").value;
    let bookButton = document.getElementById("book-btn");
    if(destination === "" || people === "" || arrival === "" || leaving === "" ){
        bookButton.disabled = true;}
        else{
            bookButton.disabled = false;
        }
        
    }



function confirmBooking() {
    let destinationError = document.getElementById("destination-error").textContent;
    let peopleError = document.getElementById("people-error").textContent;
    let arrivalError = document.getElementById("arrival-error").textContent;
    let leavingError = document.getElementById("leaving-error").textContent;

    if (destinationError || peopleError || arrivalError || leavingError) {
        alert("Please correct errors before booking");
        return;
    }
    let destination = document.getElementById("destination").value;
    let people = document.getElementById("people").value;
    let arrival = document.getElementById("arrival").value;
    let leaving = document.getElementById("leaving").value;
    if(destination === "" || people === "" || arrival === "" || leaving === "" ){
        alert("Please fill in the fields first!");
        return;
    }
    
    let bookButton = document.getElementById("book-btn");
    bookButton.textContent = "boocked";
    bookButton.disabled = true;
}
///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let nameInput = document.getElementById("name").value.trim();
    let emailInput = document.getElementById("email").value.trim();
    let passwordInput = document.getElementById("password").value.trim();
    let loginButton = document.getElementById("loginButton");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");


    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    let nameRegex = /^[A-Z][a-zA-Z]{0,9}$/;
    if (!nameRegex.test(nameInput)) {
        nameError.textContent = "The name must be the first capital letter,must not exceed 10 letters,and must not consist of numbers!";
        isValid = false;
    }


    let emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(emailInput)) {
        emailError.textContent = "You must enter a valid email address from Gmail!";
        isValid = false;
    }

    let passwordRegex = /^[A-Z]{3}[0-9]{7}$/;
    if (!passwordRegex.test(passwordInput)) {
        passwordError.textContent = "The password must contain 3 capital letters followed by 7 numbers!";
        isValid = false;
    }


    if (isValid) {
        loginButton.textContent = "Logged in";
        loginButton.disabled = true;
    }
});
////////////////////////////////////////////////////////////////////////////////

        const text = "mohamad el haj + Ghadeer chrayteh";
        let i = 0;
        const time = 180; 
        const element = document.getElementById('typingText');

        function typeWriter() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, time);
            } else {
                setTimeout(function() {
                    element.innerHTML = ''; //element.style.borderRight = "none";//
                    i = 0; 
                    typeWriter();
                }, 500);
            }
        }
        typeWriter();