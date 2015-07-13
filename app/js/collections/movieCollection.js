define(['backbone', 'models/movie', 'firebase', 'backbonefire'], function(Backbone, Movie, Firebase, BackboneFire){
    var MovieCollection = Backbone.Collection.extend({
        model: Movie,

        url : 'http://www.omdbapi.com/?s=lord&type=movie',

        parse: function( response ) {
            console.log(response);
            return response.Search;
        }
    });

    return MovieCollection;
});
