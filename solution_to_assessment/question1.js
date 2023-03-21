// Question One
// Task
// You are given a dictionary/hash/object containing some languages and your test results 

//in the given languages. Return the list of languages where your test score is at least 60, 

//in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

// use the function;

// function myLanguages(results) {

// }

// solution 
function myLanguages(results) {
    // now lets filter and just have the scores that are up to 60. Remember that it the result is 
    // a dictionary/hash/object containing some languages and the scores. so we are filtering by the 
    // score not the language.
    const filteredResults = Object.entries(results).filter(([language, score]) => score >59);
    //now we want to sort the array where the highest score comes first 
    const sortedResult = filteredResults.sort(([languageA, scoreA], [languageB, scoreB]) => scoreB - scoreA);
    // now we just need the language of the dictionary/hash/object. We don't need the score 
    const languages = sortedResult.map(([language,score]) => language);
    return languages;
}

const results1 = {"Java": 10, "Ruby": 80, "Python": 65};
console.log(myLanguages(results1));

const results2 = {"Hindi": 60, "Dutch" : 93, "Greek": 71};
console.log(myLanguages(results2));

const results3 = {"C++": 50, "ASM": 10, "Haskell": 20};
console.log(myLanguages(results3));