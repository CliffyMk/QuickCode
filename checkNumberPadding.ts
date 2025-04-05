// Checks if all number strings in a sequence have consistent padding.
// Returns padding length if consistent, -1 if inconsistent, and -minLength if no padding at all.
export function checkNumberPadding(intStrs: Iterable<string>): number {
    if (!intStrs) {
        throw new Error("Input should not be null or undefined.");
    }

    const paddedLengths = new Set<number>();
    let hasPadding = false;
    let minLength = Infinity;
    let hasItems = false;

    for (const str of intStrs) {
        hasItems = true;

        if (typeof str !== 'string') {
            throw new Error(`Expected string, got ${typeof str}`);
        }

        if (!/^\d+$/.test(str)) {
            throw new Error(`Invalid numeric string: "${str}"`);
        }

        if (/^0+/.test(str)) {
            hasPadding = true;
            paddedLengths.add(str.length);
        }

        minLength = Math.min(minLength, str.length);
    }

    if (!hasItems) {
        return 0;
    }

    if (hasPadding) {
        return paddedLengths.size === 1 ? [...paddedLengths][0] : -1;
    }

    return -minLength;
}