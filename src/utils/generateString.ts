export function generateString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = '';

    while (result.length < length) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}
