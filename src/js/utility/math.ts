export function minMax(min = 100, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}