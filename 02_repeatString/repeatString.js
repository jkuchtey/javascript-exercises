const repeatString = function(string, count) {
    if(count < 0){
        return "ERROR";
    }
    else if(count == 0 || string == ""){
        return "";
    }
    else if(count == 1){
        return string;
    }
    else {
        let ans = string;
        for(let i = 0; i < count-1; i++){
            ans += string;
        }
        return ans;

    }
};

// Do not edit below this line
module.exports = repeatString;
