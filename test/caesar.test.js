const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("error handling", () => {
    it("will return false if the shift amount is 0", () => {
        const message = "zebra magazine";
        const shift = 0;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })
    it("will return false id the shift amount is greater than 25", () => {
        const message = "zebra magazine";
        const shift = 26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })
    it("will return false if the shift amount is less than -25", () => {
        const message = "zebra magazine";
        const shift = -26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })
})
describe("encoding a message", () => {
    it("will encode a message by shifting the letters", () => {
        const message = "message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "phvvdjh";
        expect(actual).to.equal(expected);
    })
    it("will leave spaces and symbols alone", () => {
       const message = "a message.";
       const shift = 3;
       const actual = caesar(message, shift);
       const expected = "d phvvdjh.";
       expect(actual).to.equal(expected);
    })
    it("will ignore capital letters", () => {
        const message = "A message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh";
        expect(actual).to.equal(expected);
    })
    it("will appropriately handle letters at the end of the alphabet", () => {
        const message = "zebra magazine";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "cheud pdjdclqh";
        expect(actual).to.equal(expected);
    })
    it("will allow for a negative shift that will shift to the left", () => {
        const message = "zebra magazine";
        const shift = -3;
        const actual = caesar(message, shift);
        const expected = "wbyox jxdxwfkb";
        expect(actual).to.equal(expected);
    })
})
describe("decoding a message", () => {
    it("will decode a message by shifting the letters the opposite direction", () => {
        const message = "phvvdjh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "message";
        expect(actual).to.equal(expected);
    })
    it("will leave spaces and other symbols alone", () => {
        const message = "d phvvdjh.";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "a message.";
        expect(actual).to.equal(expected);
    })
    it("will ignore capital letters", () => {
        const message = "D pHvvdjh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "a message";
        expect(actual).to.equal(expected);
    })
    it("will appropriately handle letters at the end of the alphabet", () => {
        const message = "cheud pdjdclqh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "zebra magazine";
        expect(actual).to.equal(expected);
    })
    it("will allow for a negative shift that will shift to the left", () => {
        const message = "wbyox jxdxwfkb";
        const shift = -3;
        const actual = caesar(message, shift, false);
        const expected = "zebra magazine";
        expect(actual).to.equal(expected);
    })
})