//Input
// var n = 3 ; var m = 9 ; var arr = [1, 1, 2, 2, 2, 3, 1, 2, 3];
//var firstLine = "3 9"; var secondLine = "1 1 2 2 2 3 1 2 3";
//var firstLine = "1 20"; var secondLine = "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"

// **** Uncoment this two lines below to submit
var firstLine = readline();
var secondLine = readline();


retorno  = eval(firstLine, secondLine);

//Solution

function eval(firstLine, secondLine){
    var tmp = firstLine.split(" ").map(function(x) { return parseInt(x); });
    var n = parseInt(tmp[0]);
    var m = parseInt(tmp[1]);
    var arr = secondLine.split(" ").map(function(x) { return parseInt(x); });

    write(points(n, m, arr));
    // console.log(points(n, m, arr));
    //return "Hola";
};

function points(n, m, arr){
    var platform = new Array(n+1).join("0").split("").map(parseInt);
    if(n > 1){
        platform[1] = 0;
    };
    for(var i = 0 ; i < m ; i++){
        platform[ arr[i]-1 ]++;
    };
    platform.sort(function(a,b){return a-b});
    return platform[0];
};



