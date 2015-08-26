var SpideyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('gif-dancer');
  this.$node.html('<img class="spidey" src="https://s-media-cache-ak0.pinimg.com/originals/e0/18/66/e01866a62d0c493df9ae72c2fbb3b7ec.gif">');
};

SpideyDancer.prototype = Object.create(Dancer.prototype);
SpideyDancer.prototype.constructor = SpideyDancer;

SpideyDancer.prototype.oldStep = Dancer.prototype.step;

SpideyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if (window.dancers) {
    var newestDancer = window.dancers[window.dancers.length - 1];
    var topPos = newestDancer.top;
    var leftPos = newestDancer.left;
  
    this.$node.animate({
      left: leftPos,
      top: topPos
    }, this.timeBetweenSteps / 2, 'swing', function() {
      this.$node.animate({
        left: this.left,
        top: this.top
      }, this.timeBetweenSteps / 2);
    }.bind(this));
  }
};
