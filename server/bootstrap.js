Meteor.startup(function() {

  if (Votes.find().count() === 0) {

    var sampleVotes = [
      {
        question: 'How is Trail Program?',
        choices: [
          { text: 'Wow..!! Awesome', polls: 0 },
          { text: 'Good', polls: 0 },
          { text: 'Not Satisfied', polls: 0 }
        ]
      },
      {
        question: 'Do u like working with Startups?',
        choices: [

          { text: 'Yes', polls: 0 },
          { text: 'No', polls: 0 },
          { text: 'No Comments', polls: 0 }
        ]
      }
    ];

    _.each(sampleVotes, function(vote) {
      Votes.insert(vote);
    
  }

});
