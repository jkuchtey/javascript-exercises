const fibonacci = function(idx) {
    if(typeof(idx) != "number"){
        idx = Number(idx);
    }
    if(idx < 0){
        return "OOPS";
    }
    if(idx === 0){
        return 0;
    }  
    if(idx === 1){
        return 1;
    }

    return fibonacci(idx-1) + fibonacci(idx-2);
    

};

// Do not edit below this line
module.exports = fibonacci;
