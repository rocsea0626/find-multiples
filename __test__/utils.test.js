const {
  parseInputFile,
  formatMultiples } = require("../src/utils");

describe('Test parseInputFile()', function () {

  it("test with mock data", (done) => {
    try {
      const parsedInput = parseInputFile('../__test__/mock_input.txt');
      expect(parsedInput.length).toBe(2);
      expect(parsedInput[0].length).toBe(3);
      expect(parsedInput[0][0]).toBe(5);
      expect(parsedInput[0][1]).toBe(8);
      expect(parsedInput[0][2]).toBe(31);
      expect(parsedInput[1][0]).toBe(2);
      expect(parsedInput[1][1]).toBe(7);
      expect(parsedInput[1][2]).toBe(26);
    } catch (err) {
      expect(err).toBeUndefined();
    }
    done();
  });

});

describe('Test formatMultiples()', function () {

  it("test with mock data", (done) => {
    try {
      const formated = formatMultiples([5, 8, 10, 15, 16, 20, 24, 25, 30], 31);
      expect(typeof formated).toBe('string');
      expect(formated.slice(0, 3)).toBe('31:');
    } catch (err) {
      expect(err).toBeUndefined();
    }
    done();
  });

});


