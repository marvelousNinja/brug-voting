if (Meteor.isClient) {
  Template.votingVariant.helpers({
    percentage: function() {
      return (this.percentage.get() * 100).toFixed().toString() + '%';
    }
  });

  Template.votingVariant.events({
    'click .voting-variant__vote': function() {
      this.percentage.set(this.percentage.get() + 0.05);
    }
  });
}
