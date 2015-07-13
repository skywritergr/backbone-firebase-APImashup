//This view is used to display the full information of our movie when we click on a link.

define(['underscore', 'jquery', 'backbone', 'text!../../templates/fullMovieView.html', '../collections/fullMovieCollection'],
    function(_, $, Backbone, mainView, fullMovieCollection){
        var fullMovieView = Backbone.View.extend({
            tagName: 'div',
            className: 'watchedMovieContainer',
            template: _.template( mainView ),
            el: '#fullMovie',

            events: {
                'click .toggle': 'movieWatched'
            },

            initialize : function(obj){
                var self = this;

                this.collection = new fullMovieCollection();
                this.collection.url = obj.url;
                this.collection.fetch({
                    silent : true,
                    success : function(){
                        self.render();
                    }
                });
            },

            render: function() {
                this.collection.each(function( item ) {
                    this.renderMovie( item );
                }, this );
            },

            renderMovie: function( item ) {
                this.model = item;
                this.$el.html( this.template( this.model.attributes ) );
            }
        });

        return fullMovieView;
});
