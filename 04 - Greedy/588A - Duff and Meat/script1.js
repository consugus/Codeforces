//Input
//                      ai pi          1 <= ai, pi <= 100
// var n = "3"; var arr = ["1 3", "2 2", "3 1"];       // 10
// var n = "3"; var arr = ["1 3", "2 2", "3 2"];       // 8
// var n = "1"; var arr = ["39 52"];                   // 2028
// var n = "2"; var arr = ["125 56", "94 17"];         // 2998
// var n = "5"; var arr = ["39 213", "95 89", "70 90", "9 55", "85 32"];       // 6321
// var n = "12"; var arr = ["70 11",  "74 27",  "32 11",  "26 83",  "57 18",  "97 28",  "75 43",  "75 21",  "84 29",  "16 2",  "89 63",  "21 88"];       // 6742

var n = readline();

// retorno = eval(n, arr);
retorno = eval(n);

//Solution
// function eval(n, arr){
function eval(n){
    n = parseInt(n);
    var daysCosts = new Array(n+1).join("").split("");

    var arr = "";
    for(var i = 0 ; i < n ; i++){
        arr = readline();
        daysCosts[i] = arr.split(" ").map(function(x){ return parseInt(x)});
        // daysCosts[i] = arr[i].split(" ").map(function(x){ return parseInt(x)});
    };
    write(giveTheLowestCost(n, daysCosts));
    // console.log(giveTheLowestCost(n, daysCosts));
};

function giveTheLowestCost(n, daysCosts){
    var answer;
    var minimumCost = 0;
    var totalCost = 0;
    //console.log(daysCosts[0]);
    for(var i = 0 ; i < n ; i++){
        if(i == 0){
            minimumCost = daysCosts[i][1];
            totalCost = daysCosts[i][0]*daysCosts[i][1];
            //console.log("minimumCost: " + minimumCost + "    totalCost: " + totalCost);
            //console.log("dayCosts[" + i + "][1]: " + daysCosts[i][1] + "    minimumCost: " + minimumCost);
        } else{
            if(minimumCost > daysCosts[i][1]){
                minimumCost = daysCosts[i][1];
            };
            totalCost += daysCosts[i][0]*minimumCost;
            //console.log("dayCosts[" + i + "][1]: " + daysCosts[i][1] + "    minimumCost: " + minimumCost);
        };
    };

    //console.log("minimumCost: " + minimumCost + "    totalCost: " + totalCost);
    return totalCost;
};


