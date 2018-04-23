//constrains
//  * 1 <= t <= ^5
//  * -10^9 <= direction < 10^9

//Input
var firstLine = "5 0 0 1 1"; var direction = "SESNW";           // 4
// var t = "10 5 3 3 6"; var direction = "NENSWESNEE";     // -1
// var t = "19 172106364 468680119 172106365 468680119"; var direction = "SSEEESSSESESWSEESSS";    // 13

// var t = "10 5 3 3 6"; var direction = "NENSWESNEE";
// var t = "10 5 3 3 6"; var direction = "NENSWESNEE";



retorno = eval(firstLine, direction);

//Solution
function eval(firstLine, direction){
    var tmp = firstLine.split(" ").map(function(x){ return parseInt(x)});
    var t = tmp[0];
    var start = {
        x: tmp[1],
        y: tmp[2]
    };
    var end = {
        x: tmp[3],
        y: tmp[4]
    };
    console.log(timeToReach(t, start, end, direction));
};

function timeToReach(t, s, e, direction){
    var answer = -1;
    console.log("s.x: " + s.x + "    s.y: " + s.y + "        e.x: " + e.x + "    e.y: " + e.y);

    return answer;
};


