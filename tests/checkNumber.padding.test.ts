import { checkNumberPadding } from '../src/checkNumberPadding';

describe('checkNumberPadding', () => {
    test('Consistent padding', () => {
        expect(checkNumberPadding(['001', '002', '003'])).toBe(3);
    });

    test('Inconsistent padding', () => {
        expect(checkNumberPadding(['01', '002', '0003'])).toBe(-1);
    });

    test('No padding at all', () => {
        expect(checkNumberPadding(['1', '23', '456'])).toBe(-1);
    });

    test('Mixed padded and unpadded', () => {
        expect(checkNumberPadding(['1', '02', '003'])).toBe(-1);
    });

    test('All same unpadded length', () => {
        expect(checkNumberPadding(['7', '3', '9'])).toBe(-1);
    });

    test('Empty input', () => {
        expect(checkNumberPadding([])).toBe(0);
    });

    test('Only one padded number', () => {
        expect(checkNumberPadding(['007'])).toBe(3);
    });

    test('Only one unpadded number', () => {
        expect(checkNumberPadding(['5'])).toBe(-1);
    });

    test('Throws on invalid numeric string', () => {
        expect(() => checkNumberPadding(['001', 'abc', '003'])).toThrow('Invalid numeric string');
    });
});