define(['underscore', 'jquery', 'backbone', 'views/watchedMovie', '../collections/firebaseCollection'], function(_, $, Backbone, movie, firebaseCollection){
    var bookView = Backbone.View.extend({
        el: '#watched',

        events: {
            'reset': 'updateView'
        },

        initialize : function(){
            this.collection = new firebaseCollection();
            this.collection.fetch();

            this.listenTo( this.collection, 'add', this.addWatchedMovie );
            this.listenTo( this.collection, 'remove', this.render );
        },

        render: function () {
            _.each(this.collection.models, function (item) {
                $(this.el).append(new movie({
                    model: item
                }).render().el);
            }, this);
            return this;
        },

        addWatchedMovie: function(item){
            var movieView = new movie({
                model : item
            });

            this.$el.append( movieView.render().el );
        }
    });

    return bookView;
});
