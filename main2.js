var apiDiv = document.querySelector('.api-container');
var mainContent = document.querySelector('.main-content');
var charStatButton = document.querySelector('.char-stats');
var speciesStatButton = document.querySelector('.species-stats');
var planetsStatButton = document.querySelector('.planet-stats');
var starshipsStatButton = document.querySelector('.starship-stats');
var vehicleStatButton = document.querySelector('.vehicle-stats');
var filmStatButton = document.querySelector('.film-stats');
var divWrap = document.querySelector('.wrapper');
var iconSection = document.querySelector('.sw-icon-section');
var apiResponseDiv = document.querySelector('.api-response');
var charInput = document.querySelector('.charInput');
var searchButtonSpecies = document.querySelector('.searchButtonSpecies');
var searchButtonPlanets = document.querySelector('.searchButtonPlanets');
var searchButtonStarships = document.querySelector('.searchButtonStarships')
var searchButtonVehicles = document.querySelector('.searchButtonVehicles');
var searchButtonFilms = document.querySelector('.searchButtonFilms');
var speciesInput = document.querySelector('.speciesInput');
var apiResponseChar = document.querySelector('.api-response');
var planetInput = document.querySelector('.planetInput');
var starshipInput = document.querySelector('.starshipInputField');
var newSection = document.querySelector('.new-section');
var divWrap = document.querySelector('.wrapper');
var rumble = new Audio('sound/rumbleshort.wav');

/* -----------------------------------

REUSABLE FUNCTIONS (:

----------------------------------- */

// PLAYS 'RETRIEVING DATA' STATEMENT WHILE INFO IS BEING RETRIEVED 

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

function removeMain() {
    console.log('removeMain function')
    rumble.pause();
    mainContent.style.display = "none";
    apiDiv.classList.add('fadeIn');
    apiDiv.style.opacity = 1;
    apiDiv.style.height = "50rem";
    iconSection.style.display = "none";
    divWrap.classList.remove('move-up');
}

function swapDivs() {
    mainContent.classList.add('fadeOut');
    apiDiv.classList.add('fadeIn');
    console.log('what is happening?');
}

function loadTriviaQuestions() {

document.addEventListener('DOMContentLoaded', function () {

    var firstQuestion = document.querySelector('.question1');
    var secondQuestion = document.querySelector('.question2');
    var thirdQuestion = document.querySelector('.question3');
    var firstAnswer = document.querySelector('.answer1');
    var secondAnswer = document.querySelector('.answer2');
    var thirdAnswer = document.querySelector('.answer3');
    var questions = document.querySelector('.question-section');
    var questionsAnswers = [firstQuestion, secondQuestion, thirdQuestion, firstAnswer, secondAnswer, thirdAnswer];

    /* -----------------------------------

IFFE THAT FADES TRIVIA QUESTIONS AND 
    ANSWERS IN A STAGGERED SEQUENCE

----------------------------------- */

    (function FadingIn(array, item) {
        questionsAnswers.forEach(function (item) {
            item.classList.add('fadeIn');
            setTimeout(function () {
                divWrap.classList.add('move-up');
                // rumble.play();
            }, 8000);
        })
    })();

    var transitionDelay = [firstQuestion, secondQuestion, thirdQuestion, firstAnswer, secondAnswer, thirdAnswer];

    firstQuestion.style.transitionDelay = "0.75s";
    secondQuestion.style.transitionDelay = "1.50s";
    thirdQuestion.style.transitionDelay = "2.25s";
    firstAnswer.style.transitionDelay = "2.75s";
    secondAnswer.style.transitionDelay = "3.25s";
    thirdAnswer.style.transitionDelay = "4s";
    questions.style.transitionDelay = "6s";
    questions.classList.add('fadeOut');


    /* -----------------------------------

    CHARACTERS CATEGORY

    ----------------------------------- */


    // API CALL BY CHARACTER CATEGORY

function apiCallChar() {
    
    var charSearchInput = charInput.value;    
    var peopleUrl = "https://swapi.co/api/people/";
    var queryChar = '?search=' + charSearchInput;
    // api call
    axios.get(peopleUrl + queryChar)
        .then(function (response) {
            console.log(response);
            // clear search input
            charSearchInput = "";
            // if search query not found in api database
            if (response.data.count !== 1) {

                dataNotFound();
                console.log('return false')
                return false;

            } else {

                apiResponseChar.innerHTML = "<p>Full name: " + response.data.results[0].name + " </p>" + "<p>Birth year: " + response.data.results[0].birth_year + " </p>" +
                    "<p>Eye color: " + response.data.results[0].eye_color + " </p>" + "<p>Skin color: " + response.data.results[0].skin_color + " </p>" + "<p>Hair color: " + response.data.results[0].hair_color + " </p>" +
                    "<p>Height: " + response.data.results[0].height + " cm </p>";

                charSearchInput = "";
                speech();
            }
        })
    }

    // EVENT LISTENER TO CHECK FOR EMPTY INPUT FIELD WHEN USER CLICKS CHARACTER SEARCH BUTTON

    document.querySelector('.searchButtonChar').addEventListener('click', function () {
        // VOICE INSTRUCTS USER TO INPUT SEARCH QUERY IF FIELD IS BLANK WHEN SEARCH BUTTON IS CLICKED
        if (charInput.value !== "") {
            apiCallChar();

        } else {
            pleaseEnterSearch();
        }
    })

    // EVENT LISTENER TO CHECK FOR EMPTY INPUT FIELD WHEN USER CLICKS ENTER KEY FOR CHARACTER SEARCH

    charInput.addEventListener('keyup', function (event) {

        if (event.which === 13 && charInput.value !== "") {
            console.log('hey')
            apiCallChar();   
            charInput.value = "";       

        }
    })

    // EVENT LISTENER THAT FIRES UPON USER HITTING 'STATS' BUTTON
    // REPLACES HOME PAGE WITH API DIV CONTAINER, INPUT FIELD, AND SEARCH BUTTON

    charStatButton.addEventListener("click", function () {
        console.log('is fade in class being added?')
        swapDivs();
        setTimeout(removeMain, 1500);
        var charSearchButton = document.querySelector('.searchButtonChar');
        charSearchButton.style.display = "block";
        charInput.style.display = "block"
    })
})



/* -----------------------------------

SPECIES CATEGORY

----------------------------------- */




function apiCallSpecies() {

    var speciesInputValue = $(speciesInput).val();
    var querySpecies = '?search=' + speciesInputValue;
    var speciesUrl = "https://swapi.co/api/species/";

    // api call
    axios.get(speciesUrl + querySpecies)
        .then(function (response) {
            // clear search input
            speciesInputValue = "";
            // if search query not found in api database
            if (response.data.count !== 1) {

                dataNotFound();               
                return false;

            } else {
            // api data returned to user
            apiResponseChar.innerHTML = "<p>Designation: " + response.data.results[0].designation + " </p>" + "<p>Classification: " + response.data.results[0].classification + " </p>" +
                "<p>Language: " + response.data.results[0].language + " </p>" + "<p>Average height: " + response.data.results[0].average_height + " cm </p>" + "<p>Average lifespan: " + response.data.results[0].average_lifespan + " years </p>";

            speciesInputValue = "";
            speech();
        }
    })


    //EVENT LISTENER THAT FIRES UPON USER HITTING 'STATS' BUTTON
    //REPLACES HOME PAGE WITH API DIV CONTAINER, INPUT FIELD, AND SEARCH BUTTON
    speciesStatButton.addEventListener("click", function () {
        console.log('swap divs')
        swapDivs();
        setTimeout(removeMain, 1500);
        searchButtonSpecies.style.display = "block";
        speciesInput.style.display = "block";
        })
    }

    StatButton.addEventListener("click", function () {
        console.log('is fade in class being added?')
        swapDivs();
        setTimeout(removeMain, 1500);
        var charSearchButton = document.querySelector('.searchButtonChar');
        charSearchButton.style.display = "block";
        charInput.style.display = "block"
    });

// EVENT LISTENER TO CHECK FOR EMPTY INPUT FIELD WHEN USER CLICKS SPECIES SEARCH BUTTON
searchButtonSpecies.addEventListener('click', function () {

    if (speciesInputValue !== "") {
        apiCallSpecies();
        } else {
            pleaseEnterSearch();
        }      
    })

//EVENT LISTENER TO CHECK FOR EMPTY INPUT FIELD WHEN USER CLICKS ENTER KEY FOR SPECIES SEARCH
speciesInput.addEventListener('keyup', function (event) {

    if (event.which === 13 && speciesInputValue !== "") {
        
        apiCallSpecies();
        speciesInputValue = "";
    }
})
}



/* -----------------------------------

PLANET CATEGORY

----------------------------------- */




// searchButtonPlanets.addEventListener('click', function () {

//     if (planetInput.value !== "") {
//         apiCallPlanets();
//         speech();
//     } else {
//         alert('please enter search query')
//     }
// })

// planetInput.addEventListener('keyup', function (event) {

//     if (event.which === 13) {
//         console.log('hey')
//         apiCallPlanets();
//         speech();
//     }
// })

// planetsStatButton.addEventListener("click", function () {
//     swapDivs();
//     setTimeout(removeMain, 1500);
//     planetInput.style.display = "block";
//     searchButtonPlanets.style.display = "block";
// });

// /* -----------------------------------

// STARSHIPS CATEGORY

// ----------------------------------- */

// function apiCallStarships() {

//     var starshipSearchInput = document.querySelector('.starshipInputField').value;
//     var starshipInput = starshipSearchInput;
//     console.log(starshipSearchInput)
//     var queryStarships = '?search=' + starshipInput;
//     var starshipsUrl = "https://swapi.co/api/starships/";

//     axios.get(starshipsUrl + queryStarships)
//         .then(function (response) {
//             console.log(response);

//             apiResponseChar.innerHTML = "<p>Cargo capacity: " + response.data.results[0].cargo_capacity + " kg </p>" + "<p>Manufacturer: " + response.data.results[0].manufacturer + " </p>" +
//                 "<p>Passengers: " + response.data.results[0].passengers + " </p>" + "<p>Cost: " + response.data.results[0].cost_in_credits + " credits </p>" + "<p>Length: " + response.data.results[0].length + " meters </p>" + "<p>Model: " + response.data.results[0].model + " </p>";

//             starshipInput.value = "";
//         })
// }

// searchButtonStarships.addEventListener('click', function () {
//     if (starshipInput.value !== "") {
//         apiCallPlanets();
//         speech();
//     } else {
//         alert('please enter search query')
//     }
// })

// starshipInput.addEventListener('keyup', function (event) {

//     if (event.which === 13) {
//         console.log('hey')
//         apiCallStarships();
//         speech();
//     }
// })

// starshipsStatButton.addEventListener("click", function () {
//     swapDivs();
//     setTimeout(removeMain, 1500);
//     starshipInput.style.display = "block";
//     searchButtonStarships.style.display = "block";
// });

// /* -----------------------------------

// VEHICLE CATEGORY

// ----------------------------------- */
// var vehicleInput = document.querySelector('.vehicleInput');
// var vehicleSearchInput = document.querySelector('.vehicleInput').value;

// function apiCallVehicles() {

//     console.log(vehicleSearchInput)
//     var vehicleInput = vehicleSearchInput;
//     var queryVehicles = '?search=' + vehicleInput;
//     var vehicleUrl = "https://swapi.co/api/vehicles/";
//     // var apiResponsePlanets = document.querySelector('.api-response-species');


//     axios.get(vehicleUrl + queryVehicles)
//         .then(function (response) {
//             console.log(response);
//             apiResponseChar.innerHTML = "<p>Model: " + response.data.results[0].model + " kg </p>" + "<p>Manufacturer: " + response.data.results[0].manufacturer + " </p>" + "<p>Passengers: " + response.data.results[0].passengers + " </p>" + "<p>Cost: " + response.data.results[0].cost_in_credits + " credits </p>" + "<p>Maximum speed: " + response.data.results[0].max_atmosphering_speed + " kph </p>" +
//                 "<p>Crew: " + response.data.results[0].crew + " </p>";
//             console.log(vehicleSearchInput.value)
//             vehicleSearchInput.value = "";
//         })
// }

// searchButtonVehicles.addEventListener('click', function () {
//     if (vehicleInput.value !== "") {
//         apiCallVehicles();
//         speech();
//     } else {
//         alert('please enter search query')
//     }
// })

// vehicleInput.addEventListener('keyup', function (event) {

//     if (event.which === 13) {
//         console.log('hey')
//         apiCallVehicles();
//         speech();
//     }
// })

// vehicleStatButton.addEventListener("click", function () {
//     console.log('vehicle button clicked')
//     swapDivs();
//     setTimeout(removeMain, 1500);

//     vehicleInput.style.display = "block";
//     searchButtonVehicles.style.display = "block";
// });

// /* -----------------------------------

// FILMS CATEGORY

// ----------------------------------- */

// var filmInputField = document.querySelector('input[name=films]');
// var filmSearchInput = document.querySelector('.filmInput').value;

// function apiCallFilms() {

//     console.log(filmSearchInput)
//     var filmInput = filmSearchInput;
//     var queryFilms = '?search=' + filmInput;
//     var filmUrl = "https://swapi.co/api/films/";
//     // var apiResponsePlanets = document.querySelector('.api-response-species');
//     axios.get(filmUrl + queryFilms)
//         .then(function (response) {
//             console.log(response);
//             apiResponseChar.innerHTML = "<p>Release date: " + response.data.results[0].release_date + " </p>" + "<p>Created: " + response.data.results[0].created + " </p>" + "<p>Producer: " + response.data.results[0].producer + " </p>" + "<p>Director: " + response.data.results[0].director + " </p>" + "<p>Episode: " + response.data.results[0].episode_id + " </p>";

//             filmSearchInput.value = "";
//         })
// }

// searchButtonFilms.addEventListener('click', function () {

//     if (filmInputField.value !== "") {
//         console.log(filmInputField.value)
//         apiCallFilms();
//         speech();
//     } else {
//         alert('please enter search query')
//     }
// })

// filmInputField.addEventListener('keyup', function (event) {

//     console.log('film input event')
//     if (event.which === 13) {
//         console.log('hey')
//         apiCallFilms();
//         speech();
//     }

// })

// filmStatButton.addEventListener("click", function () {
//     console.log('vehicle button clicked')
//     swapDivs();
//     setTimeout(removeMain, 1500);

//     filmInputField.style.display = "block";
//     searchButtonFilms.style.display = "block";
// })
// })
// }]]]