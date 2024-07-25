const sumAll = function(start, finish) {
    if(start < 0 || finish < 0 || !(Number.isInteger(start)) || !(Number.isInteger(finish))){return "ERROR"}
    if (start > finish){[start, finish] = [finish, start]}
    let res = start;
    for(i = start+1; i <= finish; i++){res += i}
    return res;
};


// Do not edit below this line
module.exports = sumAll;
