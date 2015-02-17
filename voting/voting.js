if (Meteor.isClient) {
  Template.voting.helpers({
    votingVariants: function() {
      return _.map([
        { name: 'Testing' },
        { name: 'Deployment' },
        { name: 'Show us how it looks from inside' }
      ], function(element) {
        return _.extend(element, {
          percentage: new Blaze.ReactiveVar(0)
        });
      });
    }
  });
}
