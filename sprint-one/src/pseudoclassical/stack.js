/*
Pseudoclassical instantiation: create instances with the keyword new
Do:
  Work within the src/pseudoclassical/ folder.
  Capitalize your function name to indicate that it is intended to be run with the keyword new
  Use the keyword new when instantiating your class
  Use the keyword this in your constructor
Don't:
  Declare the instance explicitly
  Return the instance explicitly
Example: https://github.com/makersquare/giraffeMaker/blob/master/src/giraffePseudoClassical.js
*/

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.mySize = 0;
  this.stackMethods = stackMethods; // ?
};




var stackMethods = {
  push: function(value) {
    this.this.mySize = value;
    this.mySize++;
  },
  pop: function(){
    if (this.mySize > 0){this.mySize--;}
    var output = this.this.mySize;
    return output;
  },
  size: function() {
    return this.mySize;
  }
}

var stack = new Stack;
