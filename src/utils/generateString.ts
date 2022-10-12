export function generateString(length: number): string {
    if(length < 0) {
        throw new Error('Length must be a positive number');
    }

    return Array.from({ length }, () => Math.random().toString(36)[2]).join('');
}
