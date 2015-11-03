Template.voteForm.events({

  'submit form': function(event) {

    event.preventDefault();

    var newVote = {
      question: event.target.question.value,
      choices: [
        {  text: event.target.choice1.value, polls: 0 },
        {  text: event.target.choice2.value, polls: 0 },
        {  text: event.target.choice3.value, polls: 0 }
      ]
    };    

    Votes.insert(newVote);
  }

});