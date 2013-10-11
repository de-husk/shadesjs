"using strict";

var buster = require("buster");
var assert = buster.assertions.assert;
var shade = require("../src/shade.js");


//TODO: add test to determine if I could get the color from a jquery selector element
buster.testCase("Get color from jquery element", {
	setUp: function () {
		this.bodyElement = "body";
		//TODO:
		//var jqueryselector = "#elementID";
	},
	"get color from dom element": function () {
		var color = shade.getColor(this.bodyElement);
		//TODO: right now I am only grabbing rgb values. Should I also worry about argb?

		//rgb: should be in the form of 'rgb:(x, y, z)' where x, y, and z are valid values
		assert.match(color, new RegExp("^rgb:\\(\\d*, \\d*, \\d*\\)")); 

		//TODO: assert that each number is valid (within proper range)
	}
});



