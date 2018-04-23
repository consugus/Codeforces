//Input
var firstLine = "3 4"; var arr = [".*..", "....", ".*.."];
// var firstLine = "3 3"; var arr = ["..*", ".*.", "*.."];
// var firstLine = "6 5"; var arr = ["..*..", "..*..", "*****", "..*..", "..*..", "..*.."];

retorno = eval(firstLine);

//Solution
function eval(firstLine){
    var tmp = firstLine.split(" ");
    console.log(tmp);
    var n = parseInt(tmp[0]);
    var m = parseInt(tmp[1]);

    //var arr = new Array( m+1 ).join("0").split("");
    //console.log("arr: "+ arr);
    // for(var i = 0 ; i < n ; i++){
    //     arr[i] = readline();
    // };


    console.log("n: " + n + "    m: " + m);
    for(var i = 0 ; i < n ; i++){
        for(var j = 0 ; j < m ; j++){
            if(arr[i][j] == "*"){
                console.log("coord: " + i + "," + j);
            };
        };
    };
};



