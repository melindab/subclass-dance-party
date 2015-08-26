describe("spideyDancer", function() {

  var spideyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spideyDancer = new SpideyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(spideyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that animates its node", function() {
    sinon.spy(spideyDancer.$node, 'animate');
    spideyDancer.step();
    expect(spideyDancer.$node.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(spideyDancer, "step");
      expect(spideyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(spideyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spideyDancer.step.callCount).to.be.equal(2);
    });
  });
});
