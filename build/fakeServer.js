/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nvar FakeServer = function FakeServer() {};\n\nFakeServer.prototype.initialize = function (channel) {\n\tconsole.log(\"Fake server sending 'connected' event.\");\n\tsetTimeout(function () {\n\t\treturn channel.emit('connect');\n\t}, 1000);\n\tchannel.on('snap', function () {\n\t\tsetTimeout(function () {\n\t\t\tchannel.emit('camera_begin_snap');\n\t\t\tsetTimeout(function () {\n\t\t\t\tchannel.emit('camera_snapped');\n\t\t\t\tsetTimeout(function () {\n\t\t\t\t\tchannel.emit('photo_saved', function () {});\n\t\t\t\t}, 1000);\n\t\t\t}, 1000);\n\t\t}, 1000);\n\t});\n};\n\nmodule.exports = FakeServer;\nwindow.FakeServer = FakeServer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy91aS9mYWtlU2VydmVyLmpzP2ViZGYiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IEZha2VTZXJ2ZXIgPSBmdW5jdGlvbiAoKSB7fTtcblxuRmFrZVNlcnZlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChjaGFubmVsKSB7XG5cdCAgY29uc29sZS5sb2coXCJGYWtlIHNlcnZlciBzZW5kaW5nICdjb25uZWN0ZWQnIGV2ZW50LlwiKTtcblx0ICBzZXRUaW1lb3V0KCgpID0+IGNoYW5uZWwuZW1pdCgnY29ubmVjdCcpLCAxMDAwKTtcblx0ICBjaGFubmVsLm9uKCdzbmFwJywgZnVuY3Rpb24gKCkge1xuXHRcdCAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQgIGNoYW5uZWwuZW1pdCgnY2FtZXJhX2JlZ2luX3NuYXAnKTtcblx0XHRcdCAgc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQgICAgY2hhbm5lbC5lbWl0KCdjYW1lcmFfc25hcHBlZCcpO1xuXHRcdFx0XHQgIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ICAgICAgY2hhbm5lbC5lbWl0KCdwaG90b19zYXZlZCcsICgpID0+IHtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSwgMTAwMCk7XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9LCAxMDAwKTtcblx0fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZha2VTZXJ2ZXI7XG53aW5kb3cuRmFrZVNlcnZlciA9IEZha2VTZXJ2ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdWkvZmFrZVNlcnZlci5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);