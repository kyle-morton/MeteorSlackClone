//on app startup
Meteor.startup(function() {
  if (Messages.find().count() === 0){
    for (var i = 0; i < 10; i++)
      Messages.insert({text: "Dummy Text..."});
  }
});



Template.messages.helpers({
  messages: [
    { text: "All these messages" },
    { text: "Uses the same template" },
    { text: "But have a different data context" },
    { text: "It's why these messages are all different!" },
    { text: "Hey!" },
    { text: "What's up man!" },
    { text: "Hello" }
  ]
});