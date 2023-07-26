import { transformToNumber } from './numbers';
import { it, expect } from 'vitest';

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