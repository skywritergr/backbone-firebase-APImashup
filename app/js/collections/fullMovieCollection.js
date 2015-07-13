define(['backbone', 'models/movie', 'firebase', 'backbonefire'], function(Backbone, Movie, Firebase, BackboneFire){
    var MovieCollection = Backbone.Collection.extend({
        model: Movie
    });

    return MovieCollection;
});
