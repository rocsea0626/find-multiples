const findMultiples = require("../src/findMultiples");
const log = require('loglevel');

log.setLevel('debug');

describe('Test findMultiples()', function () {

  describe('Error cases', function () {
    it("pass no arguments", (done) => {
      try {
        const multiples = findMultiples();
      } catch (err) {
        // log.debug(err);
        expect(err).toBeDefined();
      }
      done();
    });

    it("pass only x", (done) => {
      try {
        const multiples = findMultiples(1);
      } catch (err) {
        // log.debug(err);
        expect(err).toBeDefined();
      }
      done();
    });

    it("pass only 2 arguments: x, y", (done) => {
      try {
        const multiples = findMultiples(1, 2);
      } catch (err) {
        // log.debug(err);
        expect(err).toBeDefined();
      }
      done();
    });

    it("pass NaN", (done) => {
      try {
        const multiples = findMultiples('1', 2, 3);
      } catch (err) {
        // log.debug(err);
        expect(err).toBeDefined();
      }
      done();
    });

    it("pass NaN", (done) => {
      try {
        const multiples = findMultiples(1, undefined, 3);
      } catch (err) {
        // log.debug(err);
        expect(err).toBeDefined();
      }
      done();
    });

    it("pass negative number", (done) => {
      try {
        const multiples = findMultiples(1, -2, -3);
      } catch (err) {
        // log.debug(err);
        expect(err).toBeDefined();
      }
      done();
    });

    it("pass float number", (done) => {
      try {
        const multiples = findMultiples(1, 2.3, 10);
      } catch (err) {
        // log.debug(err);
        expect(err).toBeDefined();
      }
      done();
    });

  })


  describe('Valid cases', function () {

    it("x=1, y=2, limit=3", (done) => {
      const multiples = findMultiples(1, 2, 3);
      expect(multiples.length).toBe(2);
      expect(multiples[0]).toBe(1);
      expect(multiples[1]).toBe(2);
      done();
    });

    it("x=1, y=1, limit=3", (done) => {
      const multiples = findMultiples(1, 2, 3);
      expect(multiples.length).toBe(2);
      expect(multiples[0]).toBe(1);
      expect(multiples[1]).toBe(2);
      done();
    });

    it("no multiples found, except x & y themselves", (done) => {
      const multiples = findMultiples(5, 4, 7);
      expect(multiples.length).toBe(2);
      expect(multiples[0]).toBe(4);
      expect(multiples[1]).toBe(5);
      done();
    });


    it("x=5, y=8,limit=31", (done) => {
      const multiples = findMultiples(5, 8, 31);
      expect(multiples.length).toBe(9);
      expect(multiples[0]).toBe(5);
      expect(multiples[multiples.length - 1]).toBe(30);
      done()
    });

    it("limit < x", (done) => {
      const multiples = findMultiples(5, 8, 2);
      expect(multiples.length).toBe(0);
      done();
    });

    it("x > y", (done) => {
      const multiples = findMultiples(8, 5, 31);
      expect(multiples.length).toBe(9);
      expect(multiples[0]).toBe(5);
      expect(multiples[multiples.length - 1]).toBe(30);
      done();
    });
  })

})