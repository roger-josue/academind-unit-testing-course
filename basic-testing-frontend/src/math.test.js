import { it, expect } from 'vitest';
import { add } from './math';

it("should summarize all number values in an array", () => {
    // Arrange
    const numbers = [1, 2];
    // Act
    const result = add(numbers);
    // Assert
    const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);
    expect(result).toBe(expectedResult);
})

it("should yield NaN if at least one invalid number is provided", () => {
    // Arrange
    const input = ['not a numeric value',2,3];
    // Act
    const result = add(input);
    // Assert
    expect(result).toBeNaN();
})

it("should yield a correct sum if an array of numeric string values is provided", () => {
    // Arrange
    const nums = ['1','2'];
    // Act
    const result = add(nums);
    // Assert
    const expectedRes = nums.reduce((prev,curr) => +prev + +curr,0);
    expect(result).toBe(expectedRes);
})

it("should yield 0 if an empty array is provided", () => {
    // Arrange
    const numbers = [];
    // Act
    const result = add(numbers);
    // Assert
    expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function as an argument", () => {
    //Arrange not needed due to not sending a value as an argument
    // Act
    const resultOfFn = () => {
        add();
    }
    //Assert
    expect(resultOfFn).toThrow();
})

it("should throw an error if provided with multiple arguments instead of an array", () => {
    //Arrange
    //Act
    const resultOfFn = () => {
        add(1,2,3);
    }
    //Assert
    expect(resultOfFn).toThrow(/is not iterable/);
})