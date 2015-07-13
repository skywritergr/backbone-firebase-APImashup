define(['underscore', 'jquery', 'backbone', 'text!../../templates/mainView.html', '../collections/firebaseCollection'], function(_, $, Backbone, mainView, firebaseCollection){
    var movieView = Backbone.View.extend({
        tagName: 'div',
        className: 'movieContainer',
        template: _.template( mainView ),

        events: {
            'click .toggle': 'movieWatched'
        },

        initialize : function(){
            this.collection = new firebaseCollection();

            this.listenTo( this.collection, 'add', this.addWatchedMovie );
        },

        movieWatched: function() {
            if(this.model.get('watched')){
                this.model.destroyModel();
            } else {
                this.model.watched();
                this.collection.create(this.model);
            }
        },

        render: function() {
            this.$el.html( this.template( this.model.attributes ) );

            return this;
        }
    });

    return movieView;
});
