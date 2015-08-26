var catDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('gif-dancer');
  this.$node.html('<img class="cat" src="https://s-media-cache-ak0.pinimg.com/originals/8d/14/9e/8d149e1e88e88441d28e4cacfedc4246.gif">');
  this.$node.mouseover(function(event) {
    // $(this).children().addClass('bigCat');
    $(this).children().animate({
      width: '200px',
      height: 'auto'
    }, 2000, 'swing', function() {
      $(this).children().animate({
        width: '100px',
        height: 'auto'
      }, 2000)
    }.bind(this));
  });
};

catDancer.prototype = Object.create(Dancer.prototype);
catDancer.prototype.constructor = catDancer;

catDancer.prototype.oldStep = Dancer.prototype.step;

catDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};
