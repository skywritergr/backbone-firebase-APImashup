//RequireJS configuration to give shortcut names to our libraries
require.config({
    baseUrl: '../js/',
    paths: {
        'underscore' : '../components/underscore/underscore-min',
        'backbone' : '../components/backbone/backbone-min',
        'jquery' : '../components/jquery/dist/jquery.min',
        'text' : '../components/text/text',
        'firebase' : '../components/firebase/firebase',
        'backbonefire' : '../components/backbonefire/dist/backbonefire',
        'jasmine' : '../tests/lib/jasmine-1.3.1/jasmine',
        'jasmine-html' : '../tests/lib/jasmine-1.3.1/jasmine-html',
        'sinon' : '../tests/lib/jasmine-1.3.1/sinon'

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
        },
        jasmine : {
            exports : 'jasmine'
        },
        'jasmine-html' : {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        sinon : {
            exports: 'sinon'
        }

    }
});


require(
    ['jquery',
        'underscore',
        'backbone',
        'text',
        'firebase',
        'backbonefire',
        'jasmine-html',
        'sinon'
    ],
    function($, _, B, text, firebase, backbonefire, jasmine, sinon) {
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var htmlReporter = new jasmine.HtmlReporter();

        jasmineEnv.addReporter(htmlReporter);

        jasmineEnv.specFilter = function(spec) {
            return htmlReporter.specFilter(spec);
        };

        var specs = [];

        specs.push('../tests/spec/ModelTestSpec');
        specs.push('../tests/spec/RouterTestSpec');
        specs.push('../tests/spec/firebaseCollectionTestSpec');

        $(function() {
            require(specs, function(){
                jasmineEnv.execute();
            });
        });
    }
);
