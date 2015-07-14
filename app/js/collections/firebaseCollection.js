define(['backbone', 'models/movie', 'firebase', 'backbonefire'], function(Backbone, Movie, Firebase, BackboneFire){
    var MovieCollection = Backbone.Firebase.Collection.extend({
        url: 'https://moviedidwatch.firebaseio.com/movies',

        model: Movie,

        parse: function( response ) {
            return response.Search;
        }
    });

    return MovieCollection;
});
