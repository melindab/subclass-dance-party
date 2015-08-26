var CarltonDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('gif-dancer');
  this.$node.html('<img class="carlton" src="https://38.media.tumblr.com/504cb94fe0f41e563f435ee2f833dcb5/tumblr_n47d7f7uFv1rt5pgzo1_400.gif">');
};

CarltonDancer.prototype = Object.create(Dancer.prototype);
CarltonDancer.prototype.constructor = CarltonDancer;

CarltonDancer.prototype.oldStep = Dancer.prototype.step;

CarltonDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({
    left: this.left + 50
  }, this.timeBetweenSteps / 2, 'swing', function() {
    this.$node.animate({
      left: this.left
    }, this.timeBetweenSteps / 2)
  }.bind(this));
  
};

/*
$("#clickme").toggle(
function () { 
$("#div2").animate({"top": "+50px",opacity: 1}, "slow"); 
},
function () { 
$("#div2").animate({"top": "-30px",opacity: 0.25}, "slow"); 
}); 
*/
