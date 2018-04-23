//constrains
//  * 1 <= t <= ^5
//  * -10^9 <= direction < 10^9

//Input
var t = "5 0 0 1 1"; var direction = "SESNW";           // 4
// var t = "10 5 3 3 6"; var direction = "NENSWESNEE";     // -1
// var t = "19 172106364 468680119 172106365 468680119"; var direction = "SSEEESSSESESWSEESSS";    // 13

// var t = "10 5 3 3 6"; var direction = "NENSWESNEE";
// var t = "10 5 3 3 6"; var direction = "NENSWESNEE";



retorno = eval(t, direction);

//Solution
function eval(t, direction){
    t = t.split(" ").map(function(x){ return parseInt(x)});
    console.log(timeToReach(t, direction));
};

function timeToReach(t, direction){
    var answer = -1;

    return answer;
};


