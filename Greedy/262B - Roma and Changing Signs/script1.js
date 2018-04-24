//Input
var firstLine = "3 2"; var secondLine = "-1 -1 1"; // 3
// var firstLine = "3 1"; var secondLine = "-1 -1 1"; // 1
// var firstLine = "17 27"; var secondLine = "257 320 676 1136 2068 2505 2639 4225 4951 5786 7677 7697 7851 8337 8429 8469 9343"; // 81852
// var firstLine = "12 28"; var secondLine = "-6652 -6621 -6471 -5559 -5326 -4551 -4401 -4326 -3294 -1175 -1069 -43"; // 49488
// var firstLine = "4 1"; var secondLine = "218 3441 4901 7601"; // 15725
// var firstLine = "1 1"; var secondLine = "10000"; // -10000
// var firstLine = "1 2"; var secondLine = "-1"; // -1
// var firstLine = "2 1"; var secondLine = "0 1"; // 1
// var firstLine = "2 2"; var secondLine = "-1 0"; // 1
// var firstLine = "5 6"; var secondLine = "-3 -2 -1 5 6"; // 15
// var firstLine = "3 3"; var secondLine = "-50 -10 30"; // 70
// var firstLine = "4 4"; var secondLine = "-100 -90 -80 1"; // 269
// var firstLine = "6 4"; var secondLine = "-6 -3 -2 1 2 3"; // 15


retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var tmp = firstLine.split(" ").map(function(x){ return parseInt(x)});
    var n = tmp[0] ; var k = tmp[1];
    var seq = secondLine.split(" ").map(function(x){ return parseInt(x)});
    console.log(maximizeIncomes(n, k, seq));
};

function maximizeIncomes(){
    var result = Number.MIN_SAFE_INTEGER;


    return result;
};

