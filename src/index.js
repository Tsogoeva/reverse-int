module.exports = function reverse (n) {
    const reverseNum = String(n)
        .split('')
        .filter(element => element !== '-')
        .reverse()
        .join('');
    return Number(reverseNum);
}
