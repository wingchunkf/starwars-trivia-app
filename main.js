var apiDiv = document.querySelector('.api-container');
var mainContent = document.querySelector('.main-content');
var divWrap = document.querySelector('.wrapper');
var iconSection = document.querySelector('.sw-icon-section');
var apiResponseDiv = document.querySelector('.api-response');
var newSection = document.querySelector('.new-section');
var divWrap = document.querySelector('.wrapper');
var inputs = document.getElementsByClassName('searchCharInput');
var placeholder = document.querySelector('input::placeholder');
var homeButton = document.querySelector('.back');
var homeLink = document.querySelector('a');
var rumble = new Audio('sound/rumbleshort.wav');

/* ---------------------------------------------------------------
REPLACES HOME PAGE WITH API SEARCH PAGE
--------------------------------------------------------------- */

function removeMain() {
    rumble.pause();
    mainContent.style.display = "none";
    apiDiv.classList.add('fadeIn');
    apiDiv.style.opacity = 1;
    apiDiv.style.height = "50rem";
    iconSection.style.display = "none";
    divWrap.classList.remove('move-up');
}

/* ---------------------------------------------------------------
ADDS HOME BUTTON UNDERNEATH API CONTAINER
--------------------------------------------------------------- */

function showHome() {
    setTimeout(function() {
        homeButton.style.opacity = 1; 
    }, 2000);
}

/* ---------------------------------------------------------------
FADES IN API RESPONSE DIV
--------------------------------------------------------------- */

function swapDivs() {
    mainContent.classList.add('fadeOut');
    apiDiv.classList.add('fadeIn');
    showHome();
}

/* ---------------------------------------------------------------
GIVES AUDITORY RESPONSE TO USER INPUT OR LACK OF USER INPUT
--------------------------------------------------------------- */

function speech() {
    setTimeout(function () {
        var speech = new SpeechSynthesisUtterance("Retrieving data");
        speechSynthesis.speak(speech);
    }, 400);
}

function dataNotFound() {   
    setTimeout(function () {
        var speech = new SpeechSynthesisUtterance("Sorry, no data found");
        speechSynthesis.speak(speech);
    }, 200);        
}

function pleaseEnterSearch() {
    setTimeout(function () {
        var speech = new SpeechSynthesisUtterance("Please enter search query");
        speechSynthesis.speak(speech);
    }, 200);    
}

/* ---------------------------------------------------------------
FADES IN SW TRIVIA QUESTION AND ANSWER SECTION
--------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {

    var firstQuestion = document.querySelector('.question1');
    var secondQuestion = document.querySelector('.question2');
    var thirdQuestion = document.querySelector('.question3');
    var firstAnswer = document.querySelector('.answer1');
    var secondAnswer = document.querySelector('.answer2');
    var thirdAnswer = document.querySelector('.answer3');
    var questions = document.querySelector('.question-section');
    var questionsAnswers = [firstQuestion, secondQuestion, thirdQuestion, firstAnswer, secondAnswer, thirdAnswer];
    var transitionDelay = [firstQuestion, secondQuestion, thirdQuestion, firstAnswer, secondAnswer, thirdAnswer];

    (function FadingIn(array, item) {
        questionsAnswers.forEach(function (item) {
            item.classList.add('fadeIn');
            setTimeout(function () {
                divWrap.classList.add('move-up');
                rumble.play();
            }, 8000);
        })
    })();   

    firstQuestion.style.transitionDelay = "0.75s";
    secondQuestion.style.transitionDelay = "1.50s";
    thirdQuestion.style.transitionDelay = "2.25s";
    firstAnswer.style.transitionDelay = "2.75s";
    secondAnswer.style.transitionDelay = "3.25s";
    thirdAnswer.style.transitionDelay = "4s";
    questions.style.transitionDelay = "6s";
    questions.classList.add('fadeOut');

/* ---------------------------------------------------------------
API CALL BY CHARACTER
--------------------------------------------------------------- */
    var charInputField = document.querySelector('.charInput');        
    var searchChar = document.querySelector('.searchButtonChar');
    var charInputField = document.querySelector('.charInput');    
    var charStatButton = document.querySelector('.char-stats');

    function apiCallChar() {

        var userSearchChar = charInputField.value;
        var peopleUrl = "https://swapi.co/api/people/";
        var queryChar = '?search=' + userSearchChar;
        
        axios.get(peopleUrl + queryChar)
            .then(function (response) {   
                
                if (response.data.count !== 1) {

                    dataNotFound(); 
                    apiResponseDiv.style.opacity = 0;
                    charInputField.value = "";
                } else {
                
                apiResponseDiv.innerHTML = "<p>Full name: " + response.data.results[0].name + " </p>" + "<p>Birth year: " + response.data.results[0].birth_year + " </p>" +
                    "<p>Eye color: " + response.data.results[0].eye_color + " </p>" + "<p>Skin color: " + response.data.results[0].skin_color + " </p>" + "<p>Hair color: " + response.data.results[0].hair_color + " </p>" +
                    "<p>Height: " + response.data.results[0].height + " cm </p>";

                        speech();
                        charInputField.value = "";
                }
            })                  
    }
/* --------------------------------------------------------------
CHARACTER SEARCH BUTTON EVENT LISTENER - CALLS API FUNCTION
--------------------------------------------------------------- */

        searchChar.addEventListener('click', function () {
        
            if (charInputField.value !== "") {            
                apiCallChar();                

            } else {
                pleaseEnterSearch();
                charInputField.value = "";
                return false;
            }
        })

/* ---------------------------------------------------------------
INPUT FIELD EVENT LISTENER THAT TRIGGERS CALL WHEN ENTER KEY PRESSED
--------------------------------------------------------------- */

        charInputField.addEventListener('keyup', function (event) {
            if (event.which === 13 && charInputField.value !== "") {
                searchChar.click();
            }
        })

    /* ---------------------------------------------------------------
CHARACTER STAT BUTTON EVENT LISTENER - TRANSITIONS TO API RESPONSE PAGE
--------------------------------------------------------------- */

        charStatButton.addEventListener("click", function () {   
            
            swapDivs();
            setTimeout(removeMain, 1500);
            searchChar.style.display = "block";
            charInputField.style.display = "block";
            starshipInputField.style.display = "none";
        });
    })

/* ---------------------------------------------------------------
API CALL BY SPECIES
--------------------------------------------------------------- */

var speciesStatButton = document.querySelector('.species-stats');
var speciesInputField = document.querySelector('.speciesInput');
var searchSpecies = document.querySelector('.searchButtonSpecies');

function apiCallSpecies() {

    var userSearchSpecies = speciesInputField.value;
    var querySpecies = '?search=' + userSearchSpecies;
    var speciesUrl = "https://swapi.co/api/species/";

    axios.get(speciesUrl + querySpecies)
        .then(function (response) {
            console.log(response)
            if (response.data.count !== 1) {

                dataNotFound(); 
                apiResponseDiv.style.opacity = 0;
                speciesInputField.value = "";
            } else {

            apiResponseDiv.innerHTML = "<p>Designation: " + response.data.results[0].designation + " </p>" + "<p>Classification: " + response.data.results[0].classification + " </p>" +
                "<p>Language: " + response.data.results[0].language + " </p>" + "<p>Average height: " + response.data.results[0].average_height + " cm </p>" + "<p>Average lifespan: " + response.data.results[0].average_lifespan + " years </p>";

            speciesInputField.value = "";
            speech();

            }
        })
    }

/* ---------------------------------------------------------------
SPECIES SEARCH BUTTON EVENT LISTENER - CALLS API FUNCTION
--------------------------------------------------------------- */

    searchSpecies.addEventListener('click', function () {
        if (speciesInputField.value !== "") {
            apiCallSpecies();            
        } else {
            pleaseEnterSearch();
            speciesInputField.value = "";
            return false;
        }
    })

/* ---------------------------------------------------------------
INPUT FIELD EVENT LISTENER THAT TRIGGERS CALL WHEN ENTER KEY PRESSED
--------------------------------------------------------------- */

    speciesInputField.addEventListener('keyup', function (event) {
        if (event.which === 13 && speciesInputField.value !== "") {
            searchSpecies.click();
        }
    })

/* ---------------------------------------------------------------
SPECIES STAT BUTTON EVENT LISTENER - TRANSITIONS TO API RESPONSE PAGE
--------------------------------------------------------------- */

    speciesStatButton.addEventListener("click", function () {
        swapDivs();
        setTimeout(removeMain, 1500);
        searchSpecies.style.display = "block";
        speciesInputField.style.display = "block";
        starshipInputField.style.display = "none";
    });

/* ---------------------------------------------------------------
API CALL BY PLANET
--------------------------------------------------------------- */

var planetsStatButton = document.querySelector('.planet-stats');
var planetInputField = document.querySelector('.planetInput');
var searchPlanets = document.querySelector('.searchButtonPlanets');

function apiCallPlanets() {

    var userSearchPlanets = planetInputField.value;
    var queryPlanets = '?search=' + userSearchPlanets;
    var planetsUrl = "https://swapi.co/api/planets/";

    axios.get(planetsUrl + queryPlanets)
        .then(function (response) {

            if (response.data.count !== 1) {

                dataNotFound(); 
                apiResponseDiv.style.opacity = 0;
                planetInputField.value = "";
            } else {

            apiResponseDiv.innerHTML = "<p>Climate: " + response.data.results[0].climate + " </p>" + "<p>Terrain: " + response.data.results[0].terrain + " </p>" +
                "<p>Population: " + response.data.results[0].population + " </p>" + "<p>Diameter: " + response.data.results[0].diameter + " km </p>" + "<p>Rotation period: " + response.data.results[0].average_lifespan + " hours </p>";

            planetInputField.value = "";
            speech();
            }
        })
    }

/* ---------------------------------------------------------------
PLANET SEARCH BUTTON EVENT LISTENER - CALLS API FUNCTION
--------------------------------------------------------------- */

    searchPlanets.addEventListener('click', function () {

        if (planetInputField.value !== "") {
            apiCallPlanets();            

        } else {
            pleaseEnterSearch();
            planetInputField.value = "";
            return false
        }
    })

/* ---------------------------------------------------------------
INPUT FIELD EVENT LISTENER THAT TRIGGERS CALL WHEN ENTER KEY PRESSED
--------------------------------------------------------------- */

    planetInputField.addEventListener('keyup', function (event) {
        if (event.which === 13 && planetInputField.value !== "") {
            searchPlanets.click();
        }
    })

/* ---------------------------------------------------------------
PLANET STAT BUTTON EVENT LISTENER - TRANSITIONS TO API RESPONSE PAGE
--------------------------------------------------------------- */

    planetsStatButton.addEventListener("click", function () {
        swapDivs();
        setTimeout(removeMain, 1500);
        searchPlanets.style.display = "block";
        planetInputField.style.display = "block";
        starshipInputField.style.display = "none";
    });

/* ---------------------------------------------------------------
API CALL STARSHIPS
--------------------------------------------------------------- */

var starshipsStatButton = document.querySelector('.starship-stats');
var starshipInputField = document.querySelector('.starshipInput');
var searchStarships = document.querySelector('.searchButtonStarships');

function apiCallStarships() {

    var userSearchStarships = starshipInputField.value;
    var queryStarships = '?search=' + userSearchStarships;
    var starshipsUrl = "https://swapi.co/api/starships/";

    axios.get(starshipsUrl + queryStarships)
        .then(function (response) {

            if (response.data.count !== 1) {

                dataNotFound(); 
                apiResponseDiv.style.opacity = 0;
                starshipInputField.value = "";
            } else {

            apiResponseDiv.innerHTML = "<p>Cargo capacity: " + response.data.results[0].cargo_capacity + " kg </p>" + "<p>Manufacturer: " + response.data.results[0].manufacturer + " </p>" +
                "<p>Passengers: " + response.data.results[0].passengers + " </p>" + "<p>Cost: " + response.data.results[0].cost_in_credits + " credits </p>" + "<p>Length: " + response.data.results[0].length + " meters </p>" + "<p>Model: " + response.data.results[0].model + " </p>";

            starshipInputField.value = "";
            speech();
            }
        })
    }

/* ---------------------------------------------------------------
STARSHIP SEARCH BUTTON EVENT LISTENER - CALLS API FUNCTION
--------------------------------------------------------------- */

    searchStarships.addEventListener('click', function () {

        if (starshipInputField.value !== "") {
            apiCallStarships();
            

        } else {
            pleaseEnterSearch();
            starshipInputField.value = "";
            return false
        }
    });

/* ---------------------------------------------------------------
INPUT FIELD EVENT LISTENER THAT TRIGGERS CALL WHEN ENTER KEY PRESSED
--------------------------------------------------------------- */

    starshipInputField.addEventListener('keyup', function (event) {
        if (event.which === 13 && starshipInputField.value !== "") {
            searchStarships.click();
        }
    });

/* ---------------------------------------------------------------
STARSHIP STAT BUTTON EVENT LISTENER - TRANSITIONS TO API RESPONSE PAGE
--------------------------------------------------------------- */

    starshipsStatButton.addEventListener("click", function () {
        swapDivs();
        setTimeout(removeMain, 1500);
        starshipInputField.style.display = "block";    
        searchStarships.style.display = 'block';
    });

/* ---------------------------------------------------------------
API CALL VEHICLES
--------------------------------------------------------------- */

var vehicleStatButton = document.querySelector('.vehicle-stats');
var vehicleInputField = document.querySelector('.vehicleInput');
var searchVehicles = document.querySelector('.searchButtonVehicles');

function apiCallVehicles() {

    var userSearchVehicles = vehicleInputField.value;
    var queryVehicles = '?search=' + userSearchVehicles;
    var vehicleUrl = "https://swapi.co/api/vehicles/";

    axios.get(vehicleUrl + queryVehicles)
        .then(function (response) {

            if (response.data.count !== 1) {

                dataNotFound();
                apiResponseDiv.style.opacity = 0; 
                vehicleInputField.value = "";
            } else {

            apiResponseDiv.innerHTML = "<p>Cargo capacity: " + response.data.results[0].cargo_capacity + " kg </p>" + "<p>Manufacturer: " + response.data.results[0].manufacturer + " </p>" +
                "<p>Passengers: " + response.data.results[0].passengers + " </p>" + "<p>Cost: " + response.data.results[0].cost_in_credits + " credits </p>" + "<p>Length: " + response.data.results[0].length + " meters </p>" + "<p>Model: " + response.data.results[0].model + " </p>";

            vehicleInputField.value = "";
            speech();
            }
        })
    }

/* ---------------------------------------------------------------
VEHICLE SEARCH BUTTON EVENT LISTENER - CALLS API FUNCTION
--------------------------------------------------------------- */

    searchVehicles.addEventListener('click', function () {

        if (vehicleInputField.value !== "") {
            apiCallVehicles();            

        } else {
            pleaseEnterSearch();
            vehicleInputField.value = "";
            return false
        }
    });

/* ---------------------------------------------------------------
INPUT FIELD EVENT LISTENER THAT TRIGGERS CALL WHEN ENTER KEY PRESSED
--------------------------------------------------------------- */

    vehicleInputField.addEventListener('keyup', function (event) {
        if (event.which === 13 && vehicleInputField.value !== "") {
            searchVehicles.click();
        }
    });

/* ---------------------------------------------------------------
VEHICLE STAT BUTTON EVENT LISTENER - TRANSITIONS TO API RESPONSE PAGE
--------------------------------------------------------------- */

    vehicleStatButton.addEventListener("click", function () {
        swapDivs();
        setTimeout(removeMain, 1500);
        vehicleInputField.style.display = "block";
        starshipInputField.style.display = "none";
        searchVehicles.style.display = 'block';
    });

/* ---------------------------------------------------------------
API CALL FILMS
--------------------------------------------------------------- */

var filmStatButton = document.querySelector('.film-stats');
var filmInputField = document.querySelector('.filmInput');
var searchFilms = document.querySelector('.searchButtonFilms');

function apiCallFilms() {

    var userSearchFilms = filmInputField.value;
    var queryFilms = '?search=' + userSearchFilms;
    var filmUrl = "https://swapi.co/api/films/";

    axios.get(filmUrl + queryFilms)
        .then(function (response) {
            if (response.data.count !== 1) {

                dataNotFound();
                apiResponseDiv.style.opacity = 0; 
                filmInputField.value = "";
            } else {

            apiResponseDiv.innerHTML = "<p>Release date: " + response.data.results[0].release_date + " </p>" + "<p>Created: " + response.data.results[0].created + " </p>" + "<p>Producer: " + response.data.results[0].producer + " </p>" + "<p>Director: " + response.data.results[0].director + " </p>" + "<p>Episode: " + response.data.results[0].episode_id + " </p>";

            filmInputField.value = "";
            speech();
            }
        })
    }

/* ---------------------------------------------------------------
FILM SEARCH BUTTON EVENT LISTENER - CALLS API FUNCTION
--------------------------------------------------------------- */

    searchFilms.addEventListener('click', function () {

        if (filmInputField.value !== "") {
            apiCallFilms();            

        } else {
            pleaseEnterSearch();
            filmInputField.value = "";
            return false
        }
    });

/* ---------------------------------------------------------------
INPUT FIELD EVENT LISTENER THAT TRIGGERS CALL WHEN ENTER KEY PRESSED
--------------------------------------------------------------- */

    filmInputField.addEventListener('keyup', function (event) {
        if (event.which === 13 && filmInputField.value !== "") {
            searchFilms.click();
        }
    });

/* ---------------------------------------------------------------
FILM STAT BUTTON EVENT LISTENER - TRANSITIONS TO API RESPONSE PAGE
--------------------------------------------------------------- */

    filmStatButton.addEventListener("click", function () {
        swapDivs();
        setTimeout(removeMain, 1500);

        filmInputField.style.display = "block";
        starshipInputField.style.display = "none";
        searchFilms.style.display = "block";
    });