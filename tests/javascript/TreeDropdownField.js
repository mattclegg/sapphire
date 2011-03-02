describe("TreeDropdownField", function() {

	beforeEach(function() {
		$.entwine.warningLevel = $.entwine.WARN_LEVEL_BESTPRACTISE;
		loadFixtures('TreeDropdownField.fixture.html');
		$.entwine.clear_all_rules();
  });
  
	it('should be awesome', function() {
		expect(true).toBeTruthy();
	});
});