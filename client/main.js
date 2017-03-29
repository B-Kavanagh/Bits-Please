import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './views/main.html';
import './views/contentTemplates.html';



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
  'submit .addDataForm' : function(event, instance) {
     event.preventDefault();
     Vehicles.insert({make:event.target.make.value,
                      model:event.target.model.value,
                      age:event.target.age.value,
                      mileage:event.target.mileage.value
     });
  }
});



Template.posts.helpers({
    charsRemaining: function () {
        return Session.get('CharactersRemaining');
    }
});

Template.posts.onRendered(function(){
  $("#postForm").validate();  
});

Template.posts.events({
    'keyup #inputPost': function(event) {
    // Retrieve the contents from the Textarea
        var inputText = event.target.value;
        Session.set("CharactersRemaining", (140-inputText.length) + " characters remaining");
    },
    'submit #postForm': function (event) {
        event.preventDefault();
        var post = event.target.inputPost.value;
        //Clearing the textarea content
        event.target.reset();
        Session.set("CharactersRemaining", 140 + " characters remaining");
        Meteor.call('insertPost', post);
    }
});


Template.addData.onRendered(function(){ 

jQuery.validator.addMethod("doesUsernameExist", function(value, element) {
	return (meteor.users.findOne({username: value})) ? true : false;
}, "Sorry, this username is not in the database, please try another");

  $(".addDataForm").validate({
	rules: {

	  user: {
	     required:true,
	     doesUsernameExist:true
	  },
	  make:  {
	     required: true
	  },
 	  age:  {
	     number: true
	  },
 	  mileage:  {
	     number: true
	  }
	},

	messages: {
	  make:  {
	     required: "Enter a vehicle make, stupid!"
	  },
 	  age:  {
	     number: "Age is a number, idiot!"
	  },
 	  mileage:  {
	     number: "Your mother has more mileage"
	  } 

	}
   });
 
});

Meteor.call(	'sendEmail',
		'b.murphy49@nuigalway.ie',
		'How',
		'test job for Email.send.');



















/*
jQuery.extend(jQuery.validator.messages, {
    required: "This field is required bitch!",
    remote: "Please fix this field.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number, also your gay!",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});
*/
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