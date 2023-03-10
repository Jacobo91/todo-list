export function generateRandomId() {
    const randomString = Math.random().toString(36).substring(2, 8);
    const uniqueId = randomString + Date.now().toString(36);
    return uniqueId;
}
