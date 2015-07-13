require.config({
    // your configuration key/values here
    // baseUrl: '/app/', // generally the same directory as the script used in a data-main attribute for the top level script
    paths: {
        'underscore' : '../components/underscore/underscore-min',
        'backbone' : '../components/backbone/backbone-min',
        'jquery' : '../components/jquery/dist/jquery.min',
        'text' : '../components/text/text',
        'firebase' : '../components/firebase/firebase',
        'backbonefire' : '../components/backbonefire/dist/backbonefire'

    },
    shim: {
        'underscore' : {
            exports: '_'
        },
        'backbone' : {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery' : {
            exports: '$'
        },
        firebase: {
            exports: 'Firebase'
        },
        backbonefire: {
            deps: ['firebase', 'backbone'],
            exports: 'backbonefire'
        }
    }
});


require(
    ['jquery',
        'underscore',
        'backbone',
        'views/movieView',
        'views/watchedMovieView',
        'text',
        'firebase',
        'backbonefire',
        'routers/router'
    ],
    function($, _, B, MovieView, WatchedMovieView, text, firebase, backbonefire, Router) {
        $(function() {
            //the close function is a way to avoid zombie views in Backbone.
            //Those zombie views can cause all sort of functional problems or
            //memory leaks.
            Backbone.View.prototype.close = function(){
                this.remove();
                this.unbind();
                //every time a view implements the onClose function it will run
                //this is an excellent way to run custom code when closing a view.
                if (this.onClose){
                    this.onClose();
                }
            };

            Router.initialize();
        });
    }
);
