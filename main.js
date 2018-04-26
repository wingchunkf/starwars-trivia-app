// trivia questions and answers fade in, then out upon page load

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
        })
    })();

// enable ability to go back to home page from second page

var backButton = document.querySelector('.backHome');
    
backButton.addEventListener("click", function() {
    location.reload();
})

    // once the 'get stats' button for character search is clicked, all divs on main page fade out and api div fades in

    var mainContent = document.querySelector('.main-content');
    var charStatButton = document.querySelector('.char-stats');
    var apiDiv = document.querySelector('.api-container');

    charStatButton.addEventListener("click", function () {
        mainContent.classList.add('fadeOut');
        apiDiv.classList.add('fadeIn');
        console.log('what is happening?');

        function removeMain() {
            mainContent.style.display = "none";
            apiDiv.style.opacity = 1;
            apiDiv.style.height = "40rem";
        }
        setTimeout(removeMain, 1500);
    });

    // button on api-div page for searching characters and returning api data

    var searchChar = document.querySelector('.searchCharacters');

    searchChar.addEventListener("click", function () {

        var button = document.getElementById('search');
        var searchTerm = $('.searchCharInput').val();
        var query = '?search=' + searchTerm;
        var apiResponse = document.querySelector('.api-response');
        var skinColor = document.querySelector('.skin');
        var peopleUrl = "https://swapi.co/api/people/";
        var planetUrl = "https://swapi.co/api/planets/";
        var filmsUrl = "https://swapi.co/api/films/";
        var starshipsUrl = "https://swapi.co/api/starships/";
        var vehiclesUrl = "https://swapi.co/api/vehicles/";
        var speciesUrl = "https://swapi.co/api/species/";

        console.log('search char event listener');
        console.log(searchTerm)  
        
        //make url a variable, then connect it to search buttons for each category
        //when user clicks on "vehicle" search button, use js to insert 'vehicle search' url

        axios.get(peopleUrl + query)
            .then(function (response) {
                console.log(response.data.results[0].birth_year);
                console.log(response.data.results[0].eye_color);
                console.log(response.data.results[0].skin_color);

                apiResponse.innerHTML = "<p>Full name: " + response.data.results[0].name + " </p>" + "<p>Birth year: " + response.data.results[0].birth_year + " </p>" +
                    "<p>Eye color: " + response.data.results[0].eye_color + " </p>" + "<p>Skin color: " + response.data.results[0].skin_color + " </p>" + "<p>Hair color: " + response.data.results[0].hair_color + " </p>" +
                    "<p>Height: " + response.data.results[0].height + " cm </p>";
            })         
        })

    // make a var for delay time (0.75s), then forEach where each iteration takes # and multiples by 2

    var transitionDelay = [firstQuestion, secondQuestion, thirdQuestion, firstAnswer, secondAnswer, thirdAnswer];

    firstQuestion.style.transitionDelay = "0.75s";
    secondQuestion.style.transitionDelay = "1.50s";
    thirdQuestion.style.transitionDelay = "2.25s";
    firstAnswer.style.transitionDelay = "2.75s";
    secondAnswer.style.transitionDelay = "3.25s";
    thirdAnswer.style.transitionDelay = "4s";
    questions.style.transitionDelay = "6s";
    questions.classList.add('fadeOut');
});




























// var speciesStatButton = document.querySelector('.species-stats');

// speciesStatButton.addEventListener("click", function () {

//     mainContent.classList.add('fadeOut');
//     console.log('species stat button was clicked');
// })

// var planetsStatButton = document.querySelector('.planet-stats');

// planetsStatButton.addEventListener("click", function () {

//     mainContent.classList.add('fadeOut');
//     console.log('planets stat button was clicked');
// })

// var starshipStatButton = document.querySelector('.starship-stats');

// starshipStatButton.addEventListener("click", function () {

//     mainContent.classList.add('fadeOut');
//     console.log('starship stat button was clicked');
// })

// var vehicleStatButton = document.querySelector('.vehicle-stats');

// vehicleStatButton.addEventListener("click", function () {

//     mainContent.classList.add('fadeOut');
//     console.log('vehicle stat button was clicked');
// })

// var planetsStatButton = document.querySelector('.planet-stats');

// planetsStatButton.addEventListener("click", function () {

//     mainContent.classList.add('fadeOut');
//     console.log('planets stat button was clicked');
// })





//make url a variable, then connect it to search buttons for each category
//when user clicks on "vehicle" search button, use js to insert 'vehicle search' url

// axios.get("https://swapi.co/api/people/" + query)