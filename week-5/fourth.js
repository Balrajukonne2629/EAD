const analyzeString = function() {
    const input = document.getElementById("userInput").value;
    const resultsDiv = document.getElementById("results");
    if (!input) {
        resultsDiv.innerHTML = "Please enter some text first!";
        return;
    }
    
    const reverseText = function(str) {
        return str.split("").reverse().join("");
    };

    const countVowels = (str) => {
        const vowels = ["a", "e", "i", "o", "u"];
        return str.toLowerCase().split("").filter(char => vowels.includes(char)).length;
    };

    const findLongest = function(str) {
        const words = str.split(" ");
        return words.reduce((longest, current) => {
            return current.length > longest.length ? current : longest;
        }, "");
    };

    const upperText = input.toUpperCase();
    resultsDiv.innerHTML = `
        <p><strong>Reversed:</strong> ${reverseText(input)}</p>
        <p><strong>Vowel Count:</strong> ${countVowels(input)}</p>
        <p><strong>Longest Word:</strong> ${findLongest(input)}</p>
        <p><strong>Uppercase:</strong> ${upperText}</p>
    `;
};