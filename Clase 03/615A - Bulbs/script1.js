//Input
// var nm = "3 4"; var arr = ["2 1 4", "3 1 3 1", "1 2"];  // YES
// var nm = "3 3"; var arr = ["1 1", "1 2", "1 1"];        // NO
// var nm = "3 4"; var arr = ["1 1", "1 2", "1 3"];        // NO
// var nm = "1 5"; var arr = ["5 1 2 3 4 5"];              // YES
// var nm = "1 5"; var arr = ["5 4 4 1 2 3"];              // NO
// var nm = "1 5"; var arr = ["5 1 1 1 1 5"];                 // NO
// var nm = "2 5"; var arr = ["4 3 1 4 2", "4 2 3 4 5"];      // YES
// var nm = "5 7"; var arr = ["2 6 7", "5 1 1 1 1 1", "3 6 5 4", "0", "4 4 3 2 1"];      // YES
// var nm = "2 5"; var arr = ["4 3 1 4 2", "4 2 3 4 5"];      // YES

var nm = readline();

retorno = eval(nm);
// retorno = eval(nm, arr);

//Solution
function eval(nm){
// function eval(nm, arr){
    var tmp = nm.split(" ").map(function(x){ return parseInt(x)});
    var n = tmp[0]; var m = tmp[1];
    var integers = [];


    var arr = [];
    for(var i = 0 ; i < n ; i++){
        arr.push(readline());
    };


    for(var i = 0 ; i < n ; i++){
        var line = arr[i].split(" ").map(function(x){ return parseInt(x)});
        integers.push(line);
        //console.log("arr[" + i + "]: " + arr[i] + "   line: " + line + "    integers["  + i + "]: " + integers[i]);
    };

    write(canAllBulbsBeTurnedOn(n, m, integers));
    // console.log(canAllBulbsBeTurnedOn(n, m, integers));
};


function canAllBulbsBeTurnedOn(n, m, integers){
    var answer = "NO";
    var bulbs = new Array(m+1).join("0").split("").map(parseInt); if(m > 1){bulbs[1] = 0};
    for(var i = 0 ; i < integers.length ; i++){
        for(var j = 1 ; j < integers[i][0] + 1 ; j++){
            //console.log("j : " + j);
            bulbs[ (integers[i][j]) - 1 ]++;
        };
    };
    //console.log("bulbs: " + bulbs);
    bulbs.sort(function(a,b){ return a-b});
    if(bulbs[0] != 0){
        answer = "YES";
    };

    return answer;
};

