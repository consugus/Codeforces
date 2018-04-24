//constrains
//  * 1 <= t <= ^5
//  * -10^9 <= direction < 10^9

//Input
// var firstLine = "5 0 0 1 1"; var direction = "SESNW";           // 4
// var firstLine = "10 5 3 3 6"; var direction = "NENSWESNEE";     // -1
// var firstLine = "19 172106364 468680119 172106365 468680119"; var direction = "SSEEESSSESESWSEESSS";
//              13
// var firstLine = "19 172106364 468680119 172106363 468680119"; var direction = "SSEEESSSESESWSEESSS";

var firstLine = readline(); var direction = readline();

retorno = eval(firstLine, direction);

//Solution
function eval(firstLine, direction){
    var tmp = firstLine.split(" ").map(function(x){ return parseInt(x)});
    var t = tmp[0];
    var start = {
        x: tmp[1],
        y: tmp[2]    };
    var end = {
        x: tmp[3],
        y: tmp[4]    };
    write( timeToReach(t, start, end, direction) );
    //console.log(timeToReach(t, start, end, direction));
};

function timeToReach(t, s, e, direction){
    var ap = {
        x: s.x,
        y: s.y};

    var totalCount = -1;
    for(var i = 0 ; i < t ; i++){
        switch(direction[i]){
            case "N": // north direction
                if( Math.abs(e.y - (ap.y + 1)) < Math.abs(e.y - ap.y) ){
                    ap.y ++;
                };
                break;

            case "S": //south direction
                if( Math.abs(e.y - (ap.y - 1)) < Math.abs(e.y - ap.y) ){
                    ap.y --;
                };
                break;

            case "E": // east direction
                if( Math.abs(e.x - (ap.x + 1)) < Math.abs(e.x - ap.x) ){
                    ap.x++;
                };
                break;

            case "W": //west direction
                if( Math.abs(e.x - (ap.x - 1)) < Math.abs(e.x - ap.x) ){
                    ap.x--;
                };
                break;
        };
        if( (e.x == ap.x) && (e.y == ap.y) ){
            totalCount = i + 1;
            break;
        };
    };
    return totalCount;
};


