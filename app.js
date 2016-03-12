/*global require*/
var joe = require("joe");
var assert = require("assert-helpers");

joe.suite("Assertion tests", function (suite, test) {


    test("This test should pass", function () {
        assert.equal(true, true, "I'm true");
    });

    test("This test should fail", function () {
        assert.equal(true, false, "I'm NOT true");
    });

    test("This test should run and pass", function () {
        assert.equal(1, 1, "I'm 1");
    });

});