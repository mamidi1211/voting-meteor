Template.vote.events({

  'click .poll': function(event) {

    event.preventDefault();
  
    var voteID = $(event.currentTarget).parent('.vote').data('id');
    var pollID = $(event.currentTarget).data('id');

    var pollString = 'choices.' + pollID + '.polls';
    var action = {};
    action[pollString] = 1;
    
    Votes.update(
      { _id: voteID }, 
      { $inc: action }
    );    
  },

  
  'submit form': function(event) {

    event.preventDefault();
    
    var newComment = {
      comment: event.target.type_comment.value
    };
    Comments.insert(newComment, function(error, results){
      if(error)
      {
        console.log("Comments insertion error " + error.reason); 
      }
      else
      {
        //Router.go('home');  
        console.log("comment inserted...");
      }
      
    });
    
  }
});