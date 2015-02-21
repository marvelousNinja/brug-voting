if (Meteor.isClient) {
  Template.header.helpers({
    userCount: function() {
      return Presences.find({}).count() || 0;
    }
  });
}
