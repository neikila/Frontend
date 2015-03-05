require.config({
    urlArgs: "_=" + (new Date()).getTime(),
    baseUrl: "js",
    paths: {
        jquery: "lib/jquery",
        underscore: "lib/underscore",
        backbone: "lib/backbone",
        phaser: "lib/phaser",
        main: "views/main",
        login: "views/login",
        game: "views/game",
        scoreboard: "views/scoreboard",
        score: "models/score",
        boot: "game/states/boot"
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'phaser': {
            exports: 'Phaser'
        },
        'game': {
            exports: 'game'
        }/*,
        'boot': {
            exports: 'Phaser'
        }*/
    }
});

define([
    'backbone',
    'router',
    'game',
    'main',
    'login',
    'scoreboard',
    'score',
    'phaser'
], function(
    Backbone,
    router,
    game,
    main,
    login,
    scoreboard,
    Score,
    Phaser
){
    Backbone.history.start();
});
