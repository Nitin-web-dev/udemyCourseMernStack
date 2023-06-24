// calculate the age 
/// and answer how many days months years remain

function ageCal(age) {
    let year = 90 - age;
    let days = year * 365;
    let weeks = year * 52;
    let months = year * 12;

    return  `${year},days ${days}, weeks ${weeks}, months ${months}}`
}


console.log(ageCal(45))