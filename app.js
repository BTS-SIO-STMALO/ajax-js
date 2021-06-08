var app = {

    init: function(){

    
    // je vais cibler mon bouton et lui mettre un écouteur
    $('.btnSwapi').on('click', app.handleClickSwapiApi);
    },

    handleClickSwapiApi: function(){
        console.log('Je suis la fonction');
        // Je fais mon appel AJAX
        $.ajax(
            {
                url:'https://swapi.dev/api/toto/', 
                method : 'GET', 
                dataType: 'json'
            }
        ).done(
            function(response){
            // je fais une nouvelle fonction quand j'ai un succès
            console.log(response);
            let ulElement = $('<ul>');;
            // là je crée une liste afin de les afficher sur ma page.
            let vaisseaux = response.results;

            for (let i=0; i<vaisseaux.length; i++){
                let vaisseauNom = vaisseaux[i]['name'];
                console.log(vaisseauNom); 
                let liElement = $('<li>');
                liElement.text(vaisseauNom);
                liElement.appendTo(ulElement);
            }
            ulElement.appendTo("#swapi");
            }

        ).fail(
            function(){
                alert('Réponse ajax failed');
            }
        );
    }
}

app.init();