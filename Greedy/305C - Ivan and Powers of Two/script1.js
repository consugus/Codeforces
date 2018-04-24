//Input
var firstLine = "4"; var secondLine = "0 1 1 1";   // 0
// var firstLine = "1"; var secondLine = "3";   // 0

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var integers = secondLine.split(" ").map(function (x){ return parseInt(x)});

    // write(findQuantityOfNumbers(n, integers));
    console.log(findQuantityOfNumbers(n, integers));
};

function findQuantityOfNumbers(n, integers){
    var num = 0;


    return num;
};



