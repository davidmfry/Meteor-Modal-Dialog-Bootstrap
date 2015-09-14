Router.configure({
   layoutTemplate: 'layout',
    waitOn: function() {
        Meteor.subscribe('animals');
    }
});

Router.route('/', {name:'animals'});