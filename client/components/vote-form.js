Template.voteForm.events({

  'submit form': function(event) {

    event.preventDefault();

    var newVote = {
      question: event.target.question.value,
      choices: [
        {  text: event.target.choice1.value, polls: 0 },
        {  text: event.target.choice2.value, polls: 0 },
        {  text: event.target.choice3.value, polls: 0 }
      ],
      createdBy: currentUser,
      createdAt: new Date()
    };    

    Votes.insert(newVote, function(error, results){
      //Router.go('listPage', { _id: results });
      Router.go('view');
    });
  }

});