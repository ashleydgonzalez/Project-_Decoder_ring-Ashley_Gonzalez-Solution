// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("how to handle errors", () => {
    it("will return false if the substitution alphabet is missing", () => {
        const message = "message";
        const actual = substitution(message);
        expect(actual).to.be.false;
    })
    it("will return false if the substitution alphabet is not 26 characters", () => {
        const message = "message";
        const alphabet = "short";
        const actual = substitution(message, alphabet)
        expect(actual).to.be.false;
    })
    it("will return false if there are no unique characters in the substitution alphabet", () => {
        const message = "message";
        const alphabet = "abcabcabcabcabcabcabcabcyz";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    })
})
describe("encoding", () => {
    it("will encode a message with the given substitution alphabet", () => {
        const message = "message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const actual = substitution(message, alphabet);
        const expected = "ykrrpik";
        expect(actual).to.equal(expected);
    })
    it("will work with any kind of key with unique characters", () => {
        const message = "message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
        const actual = substitution(message, alphabet);
        const expected = "ysii.rs"
        expect(actual).to.equal(expected);
    })
    it("will leave spaces alone", () => {
        const message = "my message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
        const actual = substitution(message, alphabet)
        const expected = "yp ysii.rs"
        expect(actual).to.equal(expected);
    })
})
describe("decoding", () => {
    it("will decode a message with the given substitution alphabet", () => {
        const message = "ykrrpik";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
        expect(actual).to.equal(expected);
    })
    it("will work with any kind of key with unique characters", () => {
        const message = "ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
        expect(actual).to.equal(expected);
    })
    it("will leave spaces alone", () => {
        const message = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "my message";
        expect(actual).to.equal(expected);
    })
})