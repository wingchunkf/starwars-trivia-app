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
var starshipInput = document.querySelector('.starshipInput');
var newSection = document.querySelector('.new-section');
var divWrap = document.querySelector('.wrapper');
var rumble = new Audio('sound/rumbleshort.wav');

function removeMain() {
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

// ***** question and answer fade in *****

document.addEventListener('DOMContentLoaded', function () {

    var firstQuestion = document.querySelector('.question1');
    var secondQuestion = document.querySelector('.question2');
    var thirdQuestion = document.querySelector('.question3');
    var firstAnswer = document.querySelector('.answer1');
    var secondAnswer = document.querySelector('.answer2');
    var thirdAnswer = document.querySelector('.answer3');
    var questions = document.querySelector('.question-section');
    var questionsAnswers = [firstQuestion, secondQuestion, thirdQuestion, firstAnswer, secondAnswer, thirdAnswer];
 
  

    (function FadingIn(array, item) {
        questionsAnswers.forEach(function (item) {
            item.classList.add('fadeIn');         
                setTimeout(function () {                 
                    divWrap.classList.add('move-up');                    
                    rumble.play();
                }, 8000);       
            })
        })
    ();

    planetsStatButton.addEventListener("click", function () {       
        swapDivs();
        setTimeout(removeMain, 1500);

        planetInput.style.display = "block";
        searchButtonPlanets.style.display = "block"
    });

    starshipsStatButton.addEventListener("click", function () {   
        swapDivs();
        setTimeout(removeMain, 1500);
        var starshipInput = document.querySelector('.starshipInputField');
        starshipInput.style.display = "block";
        searchButtonStarships.style.display = 'block';
    });

    vehicleStatButton.addEventListener("click", function () {        
        console.log('vehicle button clicked')
        swapDivs();
        setTimeout(removeMain, 1500);
        var vehicleInput = document.querySelector('.vehicleInput');
        vehicleInput.style.display = "block";
        searchButtonVehicles.style.display = "block";
    });

    filmStatButton.addEventListener("click", function () {        
        swapDivs();
        setTimeout(removeMain, 1500);
        var filmInput = document.querySelector('.filmInput');
        filmInput.style.display = "block";
        searchButtonFilms.style.display = "block";
    });

    var transitionDelay = [firstQuestion, secondQuestion, thirdQuestion, firstAnswer, secondAnswer, thirdAnswer];

    firstQuestion.style.transitionDelay = "0.75s";
    secondQuestion.style.transitionDelay = "1.50s";
    thirdQuestion.style.transitionDelay = "2.25s";
    firstAnswer.style.transitionDelay = "2.75s";
    secondAnswer.style.transitionDelay = "3.25s";
    thirdAnswer.style.transitionDelay = "4s";
    questions.style.transitionDelay = "6s";
    questions.classList.add('fadeOut');

    // *****  API CALLS *****

    // ***** Search by character *****

    function apiCallChar() {
        console.log('is this working yet?')
        var charSearchInput = charInput.value;
        console.log(charSearchInput)
        var peopleUrl = "https://swapi.co/api/people/";
        var queryChar = '?search=' + charSearchInput;

   
    
        axios.get(peopleUrl + queryChar)
            .then(function (response) {
                console.log(response);
              
                apiResponseChar.innerHTML = "<p>Full name: " + response.data.results[0].name + " </p>" + "<p>Birth year: " + response.data.results[0].birth_year + " </p>" +
                    "<p>Eye color: " + response.data.results[0].eye_color + " </p>" + "<p>Skin color: " + response.data.results[0].skin_color + " </p>" + "<p>Hair color: " + response.data.results[0].hair_color + " </p>" +
                    "<p>Height: " + response.data.results[0].height + " cm </p>";

                charInput.value = "";
            })
    }


    document.querySelector('.searchButtonChar').addEventListener('click', function () {     
        if (charInput.value !== "") {           
        apiCallChar();

        setTimeout(function () {
            var speech = new SpeechSynthesisUtterance("Retrieving data");
            speechSynthesis.speak(speech);
        }, 400);
    } else {
        alert('please enter search query')
    }
    })

    

    // trigger api call when user hits enter key

    charInput.addEventListener('keyup', function (event) {

        if (event.which === 13) {
            console.log('hey')      
            apiCallChar();
            setTimeout(function () {
                var speech = new SpeechSynthesisUtterance("Retrieving data");
                speechSynthesis.speak(speech);
            }, 400);

        }
    })

    charStatButton.addEventListener("click", function () {
        console.log('is fade in class being added?')    
        swapDivs();
        setTimeout(removeMain, 1500);
        var charSearchButton = document.querySelector('.searchButtonChar');
        charSearchButton.style.display = "block";
        charInput.style.display = "block"
    });
})



    // ***** Search by species ******

    function apiCallSpecies() {
        var speciesInputValue = $(speciesInput).val();
        var querySpecies = '?search=' + speciesInputValue;
        var speciesUrl = "https://swapi.co/api/species/";

        axios.get(speciesUrl + querySpecies)
            .then(function (response) {
                console.log(response);
                console.log(speciesInput);
                console.log(querySpecies)

                apiResponseChar.innerHTML = "<p>Designation: " + response.data.results[0].designation + " </p>" + "<p>Classification: " + response.data.results[0].classification + " </p>" +
                    "<p>Language: " + response.data.results[0].language + " </p>" + "<p>Average height: " + response.data.results[0].average_height + " cm </p>" + "<p>Average lifespan: " + response.data.results[0].average_lifespan + " years </p>";

                speciesInput.value = "";
            })
    }

    searchButtonSpecies.addEventListener('click', function () {
    
        apiCallSpecies();   
        setTimeout(function () {
            var speech = new SpeechSynthesisUtterance("Retrieving data");
            speechSynthesis.speak(speech);
        }, 400);
    })



    speciesInput.addEventListener('keyup', function (event) {

        if (event.which === 13) {
            console.log('hey')       
            apiCallSpecies();
            setTimeout(function () {
                var speech = new SpeechSynthesisUtterance("Retrieving data");
                speechSynthesis.speak(speech);
            }, 400);

        }
    })


speciesStatButton.addEventListener("click", function () {
    swapDivs();
    setTimeout(removeMain, 1500);
    searchButtonSpecies.style.display = "block";
    speciesInput.style.display = "block";
});

// ***** search by planet *****



// document.querySelector('.searchButtonSpecies').addEventListener('click', function () {


document.querySelector('.searchButtonPlanets').addEventListener('click', function () {


    var planetSearchInput = $(planetInput).val();
    console.log(planetSearchInput)
    var planetsInput = planetSearchInput;
    var queryPlanets = '?search=' + planetsInput;
    var planetsUrl = "https://swapi.co/api/planets/";
    var apiResponsePlanets = document.querySelector('.api-response-species');
    var planetSearchButton = document.querySelector('.searchPlanets');
    console.log(planetInput)
    axios.get(planetsUrl + queryPlanets)
        .then(function (response) {
            console.log(planetSearchInput)
            console.log(response);


            apiResponseChar.innerHTML = "<p>Climate: " + response.data.results[0].climate + " </p>" + "<p>Terrain: " + response.data.results[0].terrain + " </p>" +
                "<p>Population: " + response.data.results[0].population + " </p>" + "<p>Diameter: " + response.data.results[0].diameter + " km </p>" + "<p>Rotation period: " + response.data.results[0].average_lifespan + " hours </p>";


        })
})

searchButtonStarships.addEventListener('click', function () {

    var starshipSearchInput = document.querySelector('.starshipInputField').value;
    console.log(starshipSearchInput)
    var starshipInput = starshipSearchInput;
    var queryStarships = '?search=' + starshipInput;
    var starshipsUrl = "https://swapi.co/api/starships/";
    // var apiResponsePlanets = document.querySelector('.api-response-species');


    axios.get(starshipsUrl + queryStarships)
        .then(function (response) {
            console.log(response);



            apiResponseChar.innerHTML = "<p>Cargo capacity: " + response.data.results[0].cargo_capacity + " kg </p>" + "<p>Manufacturer: " + response.data.results[0].manufacturer + " </p>" +
                "<p>Passengers: " + response.data.results[0].passengers + " </p>" + "<p>Cost: " + response.data.results[0].cost_in_credits + " credits </p>" + "<p>Length: " + response.data.results[0].length + " meters </p>" + "<p>Model: " + response.data.results[0].model + " </p>";

            starshipInput.value = "";
        })
})

searchButtonVehicles.addEventListener('click', function () {

    var vehicleSearchInput = document.querySelector('.vehicleInput').value;
    console.log(vehicleSearchInput)
    var vehicleInput = vehicleSearchInput;
    var queryVehicles = '?search=' + vehicleInput;
    var vehicleUrl = "https://swapi.co/api/vehicles/";
    // var apiResponsePlanets = document.querySelector('.api-response-species');


    axios.get(vehicleUrl + queryVehicles)
        .then(function (response) {
            console.log(response);


            apiResponseChar.innerHTML = "<p>Model: " + response.data.results[0].model + " kg </p>" + "<p>Manufacturer: " + response.data.results[0].manufacturer + " </p>" + "<p>Passengers: " + response.data.results[0].passengers + " </p>" + "<p>Cost: " + response.data.results[0].cost_in_credits + " credits </p>" + "<p>Maximum speed: " + response.data.results[0].max_atmosphering_speed + " kph </p>" +
                "<p>Crew: " + response.data.results[0].crew + " </p>";
            console.log(vehicleSearchInput.value)
            vehicleSearchInput.value = "";
        })
})


searchButtonFilms.addEventListener('click', function () {

    var filmSearchInput = document.querySelector('.filmInput').value;
    console.log(filmSearchInput)
    var filmInput = filmSearchInput;
    var queryFilms = '?search=' + filmInput;
    var filmUrl = "https://swapi.co/api/films/";
    // var apiResponsePlanets = document.querySelector('.api-response-species');


    axios.get(filmUrl + queryFilms)
        .then(function (response) {
            console.log(response);


            apiResponseChar.innerHTML = "<p>Release date: " + response.data.results[0].release_date + " </p>" + "<p>Created: " + response.data.results[0].created + " </p>" + "<p>Producer: " + response.data.results[0].producer + " </p>" + "<p>Director: " + response.data.results[0].director + " </p>" + "<p>Episode: " + response.data.results[0].episode_id + " </p>";

            filmSearchInput.value = "";
        })
})


