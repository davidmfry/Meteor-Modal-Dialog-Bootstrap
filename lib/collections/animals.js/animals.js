Animals = new Mongo.Collection('animals');

Meteor.methods({
    addAnimal: function(animal) {
        check(animal.name, String);

        _.extend(animal, {"rank": 0});

        Animals.insert(animal);
    },

    deleteAnimal: function(animal) {
        Animals.remove(animal);
    }
});