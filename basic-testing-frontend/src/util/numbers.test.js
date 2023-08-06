import { transformToNumber, cleanNumbers } from './numbers';
import { describe, it, expect } from 'vitest';

describe('transformToNumber()', () => {

    it("should transform a string containing a number to a type number", () => {
        // Arrange
        const value = "1000";
        // Act
        const result = transformToNumber(value);
        // Assert
        expect(result).toBeTypeOf("number");
    });

    it("should receive an argument of boolean type and return either 1 or 0", () => {
        // Arrange
        const value = false;
        // Act
        const result = transformToNumber(value);
        // Assert
        expect(result).toBe(+value);
    });

    it("should receive an argument of an empty string and return 0", () => {
        // Arrange
        const value = "";
        // Act
        const result = transformToNumber(value);
        // Assert
        const expectedRes = 0;
        expect(result).toBe(expectedRes);
    });

    it("should return NaN is the argument is omitted", () => {
        // Arrange
        // Act
        const result = transformToNumber();
        // Assert
        expect(result).toBeNaN();
    });

});

// Starting point for integration tests: First Example of testing functions which happen to have other custom functions as dependencies (not third party functions)
describe('cleanNumbers()', () => {

    it("should return an array of number values if an array of string number values is provided", () => {
        const numberValues = ["1", "2"];

        const cleanedNumbers = cleanNumbers(numberValues);

        expect(cleanedNumbers[0]).toBeTypeOf("number");
        expect(cleanedNumbers).toEqual([1, 2]); // Due to the nature of js non-primitive types (value vs reference), it is mandatory to use toEqual() instead of toBe() when testing with these kind of data types
    })

    it("should throw an error if an array with at least one empty string is provided", () => {
        const numberValues = ["", 1];

        const cleanFn = () => cleanNumbers(numberValues);

        expect(cleanFn).toThrow();
    })
})