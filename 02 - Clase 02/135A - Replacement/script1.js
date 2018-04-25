//Input
// var firstLine = "5" ; var secondLine = "1 2 3 4 5"      //R: 1 1 2 3 4
// var firstLine = "5" ; var secondLine = "2 3 4 5 6 "      //R: 1 2 3 4 5
// var firstLine = "3" ; var secondLine = "2 2 2"      //R: 1 2 2
// var firstLine = "4" ; var secondLine = "1 1 2 3"      //R: 1 1 1 2
// var firstLine = "3" ; var secondLine = "1 1 1"      //R: 1 1 2
// var firstLine = "10" ; var secondLine = "5 6 1 2 3 1 3 45 7 1000000000"      //R: 1 1 1 2 3 3 5 6 7 45
// var firstLine = "1" ; var secondLine = "1 "      //R: 1


var firstLine = readline(); var secondLine = readline();


retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var arr = secondLine.split(" ").map(function (x){ return parseInt(x)});

    write(replace(arr));
    // console.log(replace(arr));
    return "Hola";
};

function replace(arr){
    var len = arr.length;
    var newArr = ""; new Array(len+1).join("0").split("").map(parseInt); if(len > 1){newArr[1] = 0};

    arr.sort(function (a, b){return a-b});
    if(arr[len-1] != 1){
        arr[len-1] = 1;
    } else{
        arr[len-1] = 2
    };
    arr.sort(function(a, b){ return a-b});

    for(var i = 0 ; i < len ; i++){
        newArr += "" + arr[i];
        if(i < len -1){
            newArr += " ";
        };
    };

    return newArr;
};





