import { describe, it, expect } from "vitest";
import { generateString } from "./generateString";

describe("generateString - Utils", () => {
    it('Should return a string', () => {
        expect(typeof generateString(10)).toBe('string');
    })

    it('Should return a string with the especific length', () => {
        expect(generateString(10).length).toBe(10);
        expect(generateString(20).length).toBe(20);
    });

    it('Should return a empty string when length is 0 ', () => {
        expect(generateString(0)).toBe('');
    });

    it('Should throw an error when length is negative ', () => {
        expect(() => generateString(-1)).toThrowError('Length must be a positive number');
    });
});
