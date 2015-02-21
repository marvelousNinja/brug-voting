this.VotingVariants = new Meteor.Collection('votingVariants');

Meteor.methods({
  voteFor: function(variantId) {
    if(! Meteor.userId()) {
      throw new Meteor.Error('Not authorized', 403);
    }
    VotingVariants.update(variantId, { $inc: {
      votes: 1
    }});
  }
});

if (Meteor.isServer) {
  Meteor.startup(function() {
    if (VotingVariants.find({}).count() === 0) {
      _.map([{
        name: 'Deployment',
        votes: 0
      }, {
        name: 'Database',
        votes: 0
      }, {
        name: 'Security',
        votes: 0
      }, {
        name: 'Testing',
        votes: 0
      }, {
        name: 'Show us the sources!',
        votes: 0
      }, {
        name: 'Package system',
        votes: 0
      }, {
        name: 'Pitfalls',
        votes: 0
      }, {
        name: 'Reactive Cat Generator',
        votes: 0
      }], function(params) { VotingVariants.insert(params) });
    }
  });
}
