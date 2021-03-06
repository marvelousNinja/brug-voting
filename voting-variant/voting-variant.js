if (Meteor.isClient) {
  Template.votingVariant.helpers({
    percentage: function() {
      var votes = _.pluck(VotingVariants.find({}).fetch(), 'votes');
      var votesTotal = _.reduce(votes, function(sum, num) { return sum + num });
      var percentage = this.votes / votesTotal * 100 || 0;

      return percentage.toFixed(2).toString() + '%';
    }
  });

  Template.votingVariant.events({
    'click .voting-variant__vote': function() {
      VotingVariants.update(this._id, { $inc: {
        votes: 1
      }});
    }
  });
}
