describe("carltonDancer", function() {

  var carlton;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    carlton = new CarltonDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(carlton.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node move", function() {
    sinon.spy(carlton.$node, 'animate');
    carlton.step();
    expect(carlton.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(carlton, "step");
      expect(carlton.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(carlton.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(carlton.step.callCount).to.be.equal(2);
    });
  });
});
