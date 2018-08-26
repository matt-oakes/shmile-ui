import $ from 'jquery';

var ProcessingView = function () {
};

ProcessingView.prototype.render = function () {
  this.container = $('#processing');

  this.container.hide();
};

ProcessingView.prototype.fadeIn = function () {
  this.container.fadeIn();
};

ProcessingView.prototype.fadeOut = function () {
  this.container.fadeOut();
};

module.exports = ProcessingView;
