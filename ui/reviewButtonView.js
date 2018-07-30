import config from './config';
import $ from 'jquery';

var ReviewButtonView = function (channel) {
	  this.channel = channel;
};

ReviewButtonView.prototype.render = function () {
  var self = this;
  // init code
  this.container = $('#review-buttons');
  this.nextButton = $('button#next-button');
  this.printButton = $('button#print-button');

  this.container.hide();

  var buttonTriggerEvt = config.is_mobile ? 'touchend' : 'click';
  this.nextButton.bind(buttonTriggerEvt, function (e) {
    self.container.fadeOut(1000);
    self.channel.trigger('next_set');
  });
};

ReviewButtonView.prototype.fadeIn = function () {
  this.container.fadeIn();
};

module.exports = ReviewButtonView;
