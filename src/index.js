module.exports = function reverse (n) {
    let str = String(n);
    let result = '';
    let i = 0;

    while(i < str.length) {
        if (n < 0) {
            n = n * (-1);
            str = String(n);
        }
        result = str[i] + result;
        i += 1;
    }
    return Number(result);
};
