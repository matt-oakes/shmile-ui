/**
 * Maps channel events to state machine events.
 */
var StateMachineEventHandler = function (stateMachine, channel) {
	  this.stateMachine = stateMachine;
	  this.channel = channel;
};

StateMachineEventHandler.prototype.init = function () {
	  var self = this;
	  this.channel.bind('ui_button_pressed', function () {
		  self.stateMachine.fsm.ui_button_pressed();
	});
	  this.channel.bind('next_set', function () {
		  self.stateMachine.fsm.next_set();
	});
};

module.exports = StateMachineEventHandler;
