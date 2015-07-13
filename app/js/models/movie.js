define(['underscore', 'backbone'], function(_, Backbone){
    var bookModel = Backbone.Model.extend({
        defaults: {
            Title: 'No title',
            Year : '1900',
            Type : '',
            Genre : 'unknown',
            Director : 'unknown',
            Plot : 'Unknown',
            imdbRating : '1.0',
            imdbVotes : '0',
            Poster : '',
            Actors : '',
            watched : false
        },

        parse: function( response ) {
            response.id = response.imdbID;
            return response;
        },

        watched : function(){
            this.set({
                watched: !this.get('watched')
            });
        },

        destroyModel : function(){
            this.destroy();
        }
    });

    return bookModel;
});
