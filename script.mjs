console.log(sumOfArray([10, 20, 30]));

console.log(average([10,30, 50, 70, 100]));

console.log(longestString(["Said", "Masih", "Sajady"]));

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));

// ----------------------------Functions------------------------------

function sumOfArray(numbers) {
    let totalSum = 0;
    for ( let i = 0; i < numbers.length; i++ ) {
        totalSum += numbers[i];
    }
    return totalSum;
}

function average(numbers2) {
    let totalSum = 0;
    let totalAverage = 0;
    for ( let i = 0; i < numbers2.length; i++ ) {
        totalSum += numbers2[i]; 
    }
    totalAverage = totalSum / numbers2.length;
    return totalAverage;
}

function longestString(strings) {
    let longest = "";
    for ( let i = 0; i < strings.length; i++ ) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    return longest;
}

function stringsLongerThan(strings, lengthThreshold) {
    let longerStrings = []; 
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > lengthThreshold) { 
            longerStrings.push(strings[i]); 
        }
    }

    return longerStrings; 
}