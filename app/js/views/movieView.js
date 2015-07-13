define(['jquery', 'underscore', 'backbone', 'views/movie', '../collections/movieCollection'], function($, _, Backbone, movie, Collection){
    var MovieView = Backbone.View.extend({
        el: '#movies',

        initialize: function() {
            var self = this;

            this.collection = new Collection();
            this.collection.fetch({
                silent : true,
                success : function(){
                    self.render();
                }
            });

            this.listenTo( this.collection, 'add', this.renderMovie );
            this.listenTo( this.collection, 'remove', this.render );
        },

        // render library by rendering each book in its collection
        render: function() {
            this.collection.each(function( item ) {
                this.renderMovie( item );
            }, this );
        },

        // render a movie by creating a movieView and appending the
        // element it renders
        renderMovie: function( item ) {
            var movieView = new movie({
                model: item
            });

            this.$el.append( movieView.render().el );
        }
    });

    return MovieView;
});
