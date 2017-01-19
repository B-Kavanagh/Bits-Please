import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './views/main.html';
import './views/contentTemplates.html';

/*
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});*/

Template.data.helpers({
  vehicles : function (){
      console.log(Vehicles.find().fetch());
      return Vehicles.find();
  }
});


Template.data.events({
  'click #delete' : function(event, instance){
     Vehicles.remove(this._id)
  }
});

Template.addData.events({
  'submit #addDataForm' : function(event, instance) {
     event.preventDefault();
     Vehicles.insert({make:event.target.make.value,
                      model:event.target.model.value,
                      age:event.target.age.value,
                      mileage:event.target.mileage.value
     });
  }
});
