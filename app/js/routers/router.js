define(['underscore', 'jquery', 'backbone', 'views/movieView', 'views/watchedMovieView', 'views/fullMovieView' ],
    function(_, $, Backbone, MovieView, WatchedMovieView, FullMovieView){
        var router = Backbone.Router.extend({

            // Define routes
            routes: {
                "": "home",
                "movie" : "movie",
                "movie/:id": "movie"
            },

            home : function(){
                console.log('Navigating to homepage');
                new MovieView();
                new WatchedMovieView();
            },

            movie : function(id){
                console.log('Hello movie11 '+id);
                new FullMovieView({url : 'http://www.omdbapi.com/?i='+id});
            }
        });

        var initialize = function(){
            var app_router = new router();

            Backbone.history.start();
            app_router.navigate('',{trigger:true});
        };

        return {
            initialize: initialize
        };
});
