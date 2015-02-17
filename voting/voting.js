if (Meteor.isClient) {
  Template.voting.helpers({
    votingVariants: function() {
      return VotingVariants.find({});
    }
  });
}
