searchPerson.addEventListener("click", function () {

    var searchPerson = document.getElementById('searchPerson');
    var button = document.getElementById('search');
    var searchTerm = $('#searchInput').val();
    var query = '?search=' + searchTerm;
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

        


