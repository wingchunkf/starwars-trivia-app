//when button is pressed, all divs fade out
var mainContent = document.querySelector('.main-content');
var charStatButton = document.querySelector('.char-stats');

charStatButton.addEventListener("click", function () {
    // var mainContent = document.querySelector('.main-content');
    mainContent.classList.add('fadeOut');
    console.log('what is happening?');
})

var speciesStatButton = document.querySelector('.species-stats');

speciesStatButton.addEventListener("click", function () {

    mainContent.classList.add('fadeOut');
    console.log('species stat button was clicked');
})

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



var charButton = document.querySelector('.searchCharacters');

charButton.addEventListener("click", function () { 

    var charSearchInput = $('.searchCharInput').val();
    var query = '?search=' + charSearchInput;

    var eyeColor = document.querySelector('.eyes');
    var skinColor = document.querySelector('.skin');    
    

    
    

 









    var peopleUrl = "https://swapi.co/api/people/";
    var planetUrl = "https://swapi.co/api/planets/";
    var filmsUrl = "https://swapi.co/api/films/";
    var starshipsUrl = "https://swapi.co/api/starships/";
    var vehiclesUrl = "https://swapi.co/api/vehicles/";
    var speciesUrl = "https://swapi.co/api/species/";
    
    //make url a variable, then connect it to search buttons for each category
    //when user clicks on "vehicle" search button, use js to insert 'vehicle search' url

        // axios.get("https://swapi.co/api/people/" + query)    
        axios.get(peopleUrl + query)    
            .then(function(response){
                console.log(response.data.results[0].birth_year);
                console.log(response.data.results[0].eye_color);
                console.log(response.data.results[0].skin_color);
                console.log(response.data);              

                eyeColor.innerHTML = "Eye color: " + response.data.results[0].eye_color;
                skinColor.innerHTML = "Skin color: " + response.data.results[0].skin_color;     
            })
        })

// fade in function for questions in header

document.addEventListener('DOMContentLoaded', function() {         

var firstQuestion = document.querySelector('.question1');
var secondQuestion = document.querySelector('.question2');
var thirdQuestion = document.querySelector('.question3');
var firstAnswer = document.querySelector('.answer1');
var secondAnswer = document.querySelector('.answer2');
var thirdAnswer = document.querySelector('.answer3');
var questions = document.querySelector('.question-section');

    firstQuestion.classList.add('fadeIn');
    secondQuestion.classList.add('fadeIn');
    thirdQuestion.classList.add('fadeIn');
    firstAnswer.classList.add('fadeIn');
    secondAnswer.classList.add('fadeIn');
    thirdAnswer.classList.add('fadeIn');
    firstQuestion.style.transitionDelay = "0.75s";
    secondQuestion.style.transitionDelay = "1.50s";
    thirdQuestion.style.transitionDelay = "2.25s";    

    firstAnswer.style.transitionDelay = "2.75s";
    secondAnswer.style.transitionDelay = "3.25s";
    thirdAnswer.style.transitionDelay = "4s";   
    questions.style.transitionDelay = "6s";
    questions.classList.add('fadeOut');
});











