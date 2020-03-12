module.exports = function check(str, bracketsConfig) {
    let result = '';
    let previousResult = '';

    result = str;

    while (result.length > 0) {
        result = result.replace(/\(\)|{}|\[\]|\|\||12|34|56|77|88/g, '');

        if (result === previousResult) {
            break;
        }

        previousResult = result;
    }

    return result.length === 0;
}
