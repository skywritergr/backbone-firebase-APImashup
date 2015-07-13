//This view is being used by the watchedMovieView.js to represent the individual movies.
//In order to present the data it's using the mainView template.

define(['underscore', 'jquery', 'backbone', 'text!../../templates/mainView.html', '../collections/firebaseCollection'], function(_, $, Backbone, mainView, firebaseCollection){
    var watchedMovieView = Backbone.View.extend({
        tagName: 'div',
        className: 'watchedMovieContainer',
        template: _.template( mainView ),

        events: {
            'click .toggle': 'movieWatched'
        },

        initialize : function(){
            this.collection = new firebaseCollection();

            this.listenTo( this.collection, 'add', this.addWatchedMovie );
            this.listenTo( this.collection, 'remove', this.movieRemoved );
        },

        movieWatched: function() {
            //this movie was watched before but now we are marking it as unwatched. So we are removing it
            //from the view and from Firebase.
            this.model.destroyModel();
        },

        movieRemoved : function(){
            this.remove();
            this.render();
        },

        render: function() {
            this.$el.html( this.template( this.model.attributes ) );

            return this;
        }
    });

    return watchedMovieView;
});
