'use strict'

const rev = require('./reverse.js');


describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(rev.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(rev.reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(rev.reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(rev.reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(rev.reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(rev.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(rev.reverseString('misc')).toEqual('csim');
    });

  });

});