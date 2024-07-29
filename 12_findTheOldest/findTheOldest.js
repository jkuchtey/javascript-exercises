
const findTheOldest = function(people) {
    const lifespans = people.map((person) => {
        if(person.yearOfDeath === undefined){
            return 2024 - person.yearOfBirth;
        }
        else {
            return person.yearOfDeath - person.yearOfBirth;
        }
    });
    const oldestIdx = lifespans.findIndex((i) => i === Math.max(...lifespans));
    return people[oldestIdx];


};

// Do not edit below this line
module.exports = findTheOldest;



