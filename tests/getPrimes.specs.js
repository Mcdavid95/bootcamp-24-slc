const chai = require("chai");
const myApp = require("../src/getPrimes");
const assert = chai.assert;
const expect = chai.expect

describe("Check for prime Numbers", () => {
    it("should return true if number is prime", () => {
        assert(myApp.isPrime(7) === true);
    });
    it("should return false if number is not prime", () => {
        assert(myApp.isPrime(28) === false);
    });
});

describe("Check for correct data type", () => {
    it("should return return `Input should be a number`", () => {
        assert(myApp.getPrimes("30") === "Input should be a number");
    });
    it("should return `Input should be a number`", () => {
        assert(myApp.getPrimes("Five") === "Input should be a number");
    });
    it("should return `Input should be a number`", () => {
        assert(myApp.getPrimes(true) === "Input should be a number");
    });
    it("should return `Input should be a number`", () => {
        assert(myApp.getPrimes(null) === "Input should be a number");
    });
    it("should return `Input should be a number`", () => {
        assert(myApp.getPrimes(false) === "Input should be a number");
    });
});

describe("should return a list of prime numbers for a given input", () => {
    it("shouuld return [ 2, 3, 5, 7, 11, 13 ] for input 16", () => {
        expect(myApp.getPrimes(16) === [ 2, 3, 5, 7, 11, 13 ]);
    });
    it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for input 30", () => {
        expect(myApp.getPrimes(30) === [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
    });
    it("should return an empty array `[]` for negative input", () => {
        expect(myApp.getPrimes(-3) === []);
    });
    it("should return `[]` for input `0`", () => {
        expect(myApp.getPrimes(0) === []);
    });
    it("should return `[]` for positive integer less than two", () => {
    expect(myApp.getPrimes(1) === []);
  });
});