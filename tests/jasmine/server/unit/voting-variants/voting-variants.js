describe('VotingVariants', function() {
  it('should be defined', function() {
    expect(VotingVariants).toBeDefined();
  });

  it('should have find property', function() {
    expect(VotingVariants.find).toBeDefined();
  });

  it('should not fail with empty param hash', function() {
    var findAll = function() {
      return VotingVariants.find({});
    }

    expect(findAll).not.toThrow();
  });
});
