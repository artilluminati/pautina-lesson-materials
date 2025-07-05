/**
 * Возвращает сумму элементов массива.
 * @param {number[]} arr
 * @return {number}
 */
function sumArray(arr) {
    return arr.reduce((acc, x) => acc + x, 0);
}

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

export { sumArray, isPalindrome };
