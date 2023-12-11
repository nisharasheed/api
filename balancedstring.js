function isBalancedSubstring(substring) {
    if (substring.length < 2) {
        return false;
    }

    const charCount = new Map();

    for (const char of substring) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    const uniqueChars = Array.from(charCount.keys());

    if (uniqueChars.length !== 2) {
        return false;
    }

    const count1 = charCount.get(uniqueChars[0]);
    const count2 = charCount.get(uniqueChars[1]);

    return count1 !== undefined && count2 !== undefined && count1 === count2;
}

function getBalancedSubstrings(S) {
    const result = [];

    for (const str of S) {
        let longestBalanced = '';
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j <= str.length; j++) {
                const substring = str.substring(i, j);
                if (isBalancedSubstring(substring) && substring.length > longestBalanced.length) {
                    longestBalanced = substring;
                }
            }
        }
        result.push(longestBalanced);
    }

    return result;
}

// Examples
const strings = ["aabbab", "aabba", "aabbcc", "computer"];
const balancedSubstrings = getBalancedSubstrings(strings);

console.log("Balanced Substrings:");
balancedSubstrings.forEach((substring, index) => {
    console.log(`"${strings[index]}": "${substring}"`);
});
