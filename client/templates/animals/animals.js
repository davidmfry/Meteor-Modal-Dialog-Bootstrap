
Template.animals.helpers({
    animals: function() {
        return Animals.find({}, { sort: {rank:1}});
    }
});

Template.animals.events({
   'click #add': function(e) {
       e.preventDefault();
       $('#animalsModal').modal('show');
   }
});

Template.animalsModalTemplate.events({
   'click #save': function(e) {
       e.preventDefault();

       var animal = {
           name: $('#animalName').val()
       };

       Meteor.call('addAnimal', animal, function(error, result) {
          if(error)
          {
              alert(error);
          }
       });

       $('#animalsModal').modal('hide');


   }
});