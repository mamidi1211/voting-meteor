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

  }

});