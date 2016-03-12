/*global require*/
var joe = require("joe");
var assert = require("assert-helpers");

joe.suite("Assertion tests", function (suite, test) {


    test("This test should pass", function (done) {
        assert.equal(true, true, "I'm true");
        done();

    });

    test("This test should fail", function (done) {
        assert.equal(true, false, "I'm NOT true");
        done();

    });

    test("This test should run and pass", function (done) {
        assert.equal(1, 1, "I'm 1");
        done();

    });


});