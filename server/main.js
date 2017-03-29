import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
 

Meteor.methods({
	sendEmail: function (to, from, subject, text) {
	   check([to, from, subject, text], [String]);

	 /*  // Let other method calls from the same client start running without waiting
	   // for the email sending to complete. */

	   this.unblock();
	   Email.send({
		to: to,
		from: from,
		subject: subject,
		text: text
	   });
	}
});











/* // code to run on server at startup

//<head>
	//<title>MycoolApp</title>
//<head>

//<body>
//	<h1>Welcome to my new cool app</h1>

//	{{> hello}}
//	//{{> info}}
//</body>

//<template name="hello">
//	<button>Click Me</button>
//	<p>You've pressed the button {{counter}} times.</p>
//</template>
    
 */
    
    
    
    

});
