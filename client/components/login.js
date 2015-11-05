Template.login.events({
    'submit form': function(event){
        event.preventDefault();
  //       var email = $('[name=email]').val();
  //       var password = $('[name=password]').val();
  //       Meteor.loginWithPassword(email, password, function(error){
		//     if(error){
		//         console.log(error.reason);
		//     } else {
		//         Router.go("home");
		//     }
		// });

    }
});

Template.login.onCreated(function(){
    console.log("The 'login' template was just created.");
});

Template.login.onRendered(function(){
    var validator = $('.login').validate({
        submitHandler: function(event){
            var email = $('[name=email]').val();
            var password = $('[name=password]').val();
            Meteor.loginWithPassword(email, password, function(error){
                if(error){
				    validator.showErrors({
				        email: error.reason    
				    });
				}
				 else {
                    var currentRoute = Router.current().route.getName();
                    if(currentRoute == "login"){
                        Router.go("home");
                    }
                }
            });
        }
    });
});



Template.login.onDestroyed(function(){
    console.log("The 'login' template was just destroyed.");
});

$.validator.setDefaults({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 6
        }
    },
    messages: {
        email: {
            required: "You must enter an email address.",
            email: "You've entered an invalid email address."
        },
        password: {
            required: "You must enter a password.",
            minlength: "Your password must be at least {0} characters."
        }
    }
});