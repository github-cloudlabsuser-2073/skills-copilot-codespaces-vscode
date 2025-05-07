const Calculator = require('./test.js').Calculator;
const readline = require('readline');
const calculatorMenu = require('./test.js').calculatorMenu;

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator Class', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add() should return the sum of two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(-2, 3)).toBe(1);
    });

    test('subtract() should return the difference of two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(3, 5)).toBe(-2);
    });

    test('multiply() should return the product of two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-2, 3)).toBe(-6);
    });

    test('divide() should return the quotient of two numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-6, 3)).toBe(-2);
    });

    test('divide() should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(6, 0)).toThrow('Division by zero is not allowed.');
    });
});

// Mocking readline for calculatorMenu
jest.mock('readline', () => {
    const readline = {
        question: jest.fn(),
        close: jest.fn(),
    };
    return {
        createInterface: jest.fn(() => readline),
    };
});


describe('calculatorMenu Function', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should display the menu and handle addition', () => {
        readline.question
            .mockImplementationOnce((_, callback) => callback('1')) // Choice: Add
            .mockImplementationOnce((_, callback) => callback('2')) // First number
            .mockImplementationOnce((_, callback) => callback('3')) // Second number
            .mockImplementationOnce((_, callback) => callback('5')); // Exit

        console.log = jest.fn();
        calculatorMenu();

        expect(readline.question).toHaveBeenCalledTimes(4);
        expect(console.log).toHaveBeenCalledWith('Result: 5');
    });

    test('should handle invalid input gracefully', () => {
        readline.question
            .mockImplementationOnce((_, callback) => callback('invalid')) // Invalid choice
            .mockImplementationOnce((_, callback) => callback('5')); // Exit

        console.log = jest.fn();
        calculatorMenu();

        expect(readline.question).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith('Invalid choice. Please select a valid option.');
    });

    test('should handle division by zero', () => {
        readline.question
            .mockImplementationOnce((_, callback) => callback('4')) // Choice: Divide
            .mockImplementationOnce((_, callback) => callback('6')) // First number
            .mockImplementationOnce((_, callback) => callback('0')) // Second number
            .mockImplementationOnce((_, callback) => callback('5')); // Exit

        console.log = jest.fn();
        calculatorMenu();

        expect(readline.question).toHaveBeenCalledTimes(4);
        expect(console.log).toHaveBeenCalledWith('Division by zero is not allowed.');
    });
});