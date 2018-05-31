var apiDiv = document.querySelector('.api-container');
var mainContent = document.querySelector('.main-content');
var charStatButton = document.querySelector('.char-stats');
var divWrap = document.querySelector('.wrapper');
var iconSection = document.querySelector('.sw-icon-section');


var app = new Vue({
    el: '#app',
    data: {
        speciesSearchInput: '',
        species: '',
        charSearchInput: ''

    },

    methods: {

        charApiCall: function () {
            apiDiv.classList.add('fadeIn');           
            var charSearchInput = this.$refs.inputChar.value;
            console.log(this.$refs.inputChar.value);
            var charInput = charSearchInput;
            var peopleUrl = "https://swapi.co/api/people/";
            var queryChar = '?search=' + charInput;
            var apiResponseChar = document.querySelector('.api-response-char');          

            axios.get(peopleUrl + queryChar)
                .then(function (response) {
                    console.log(response);

                    apiResponseChar.innerHTML = "<p>Full name: " + response.data.results[0].name + " </p>" + "<p>Birth year: " + response.data.results[0].birth_year + " </p>" +
                        "<p>Eye color: " + response.data.results[0].eye_color + " </p>" + "<p>Skin color: " + response.data.results[0].skin_color + " </p>" + "<p>Hair color: " + response.data.results[0].hair_color + " </p>" +
                        "<p>Height: " + response.data.results[0].height + " cm </p>";
                })
        },
    }

})

        // speciesApiCall: function () {

        

        //     console.log(this.$refs.inputSpecies.value);
        //     var speciesSearchInput = this.$refs.inputSpecies.value;
        //     var speciesInput = speciesSearchInput;

        //     var querySpecies = '?search=' + speciesInput;
        //     var speciesUrl = "https://swapi.co/api/species/";
        //     var apiResponseSpecies = document.querySelector('.api-response-species');
        //     var speciesSearchButton = document.querySelector('.search-species');

        //     axios.get(speciesUrl + querySpecies)
        //         .then(function (response) {
        //             console.log(response);
        //             console.log(speciesInput);
        //             console.log(querySpecies)

        //             apiResponseSpecies.innerHTML = "<p>Designation: " + response.data.results[0].designation + " </p>" + "<p>Classification: " + response.data.results[0].classification + " </p>" +
        //                 "<p>Language: " + response.data.results[0].language + " </p>" + "<p>Average height: " + response.data.results[0].average_height + " cm </p>" + "<p>Average lifespan: " + response.data.results[0].average_lifespan + " years </p>";
        //         })

        // },

        // planetsApiCall: function () {
        //     console.log(this.$refs.inputPlanets.value);
        //     var planetSearchInput = this.$refs.inputPlanets.value;
        //     var planetsInput = planetsSearchInput;

        //     var queryPlanets = '?search=' + planetsInput;
        //     var planetsUrl = "https://swapi.co/api/planets/";
        //     var apiResponsePlanets = document.querySelector('.api-response-species');
        //     var planetSearchButton = document.querySelector('.searchPlanets');      

        //     axios.get(planetsUrl + queryPlanets)
        //         .then(function (response) {
        //             console.log(response);



        //             apiResponsePlanets.innerHTML = "<p>Designation: " + response.data.results[0].designation + " </p>" + "<p>Classification: " + response.data.results[0].classification + " </p>" +
        //                 "<p>Language: " + response.data.results[0].language + " </p>" + "<p>Average height: " + response.data.results[0].average_height + " cm </p>" + "<p>Average lifespan: " + response.data.results[0].average_lifespan + " years </p>";
        //         })

        // },


        //methods below

