Meteor.startup(function() {

  if (Votes.find().count() === 0) {

    var sampleVotes = [
      {
        question: 'How is Trail Program?',
        choices: [
          { text: 'Wow..!! Awesome', votes: 0 },
          { text: 'Good', votes: 0 },
          { text: 'Not Satisfied', votes: 0 }
        ]
      },
      {
        question: 'Do u like working with Startups?',
        choices: [
          { text: 'Yes', votes: 0 },
          { text: 'No', votes: 0 },
          { text: 'No Comments', votes: 0 }
        ]
      }
    ];
    
  }

});
