// #region Constrains
//    * <= n, a, b, c, 4000
// #endregion

// #region Input
var firstLine = "5 5 3 2" // 2
// var firstLine = "7 5 5 2" // 2
// var firstLine = "4 4 4 4" // 1
// var firstLine = "1 1 1 1" // 1
// var firstLine = "4000 3 4 5" // 1333
// var firstLine = "10 3 4 5" // 3
// var firstLine = "100 23 15 50" // 2
// var firstLine = "3119 3515 1021 7" // 11
// var firstLine = "918 102 1327 1733" // 9
            //  var firstLine = "3164 42 430 130*" // 15
// var firstLine = "370 2 1 15" // 370
// var firstLine = "418 18 14 17" // 29
// var firstLine = "5 5 6 7";
// endregion

retorno = eval(firstLine);

//Solution
function eval(firstLine){
    var nabc = firstLine.split(" ").map(function(x){ return parseInt(x)});
    var n = nabc[0]; var a = nabc[1]; var b = nabc[2]; var c = nabc[3];
    var results = [];

    console.log("tmp: " + nabc + "    n: " + n + "    a: " + a + "    b: " + b + "    c: " + c + "\n\n");

    // write(getMaximumCuts(n, a, b, c));
    //console.log(getMax(n));


    function f(n){
        //console.log(n);
        if(n in results){ return results[n];};
        if(n == 0){ return 0;};
        if(n < Math.min(a, b, c)){ return -n;};

        console.log(    "getMax(" + n + " - " + a + "): " + f(n - a) , "    getMax(" + n + " - " + b + "): " + f(n - b) , "    getMax(" + n + " - " + c + ") + 1: " + (f(n - c) + 1  ));
        var tmp = Math.max(   f(n - a), f(n - b), f(n - c) +1) ;

        results[n] = tmp;
        console.log("tmp: " + tmp + "    results: " + results + "    len: " + results.length + "\n\n");

        return tmp;
    };


    console.log(f(n));

};










// function getMaximumCuts(n, min, mid, max){
//     var count = 0;
//     var leftToCut = n
//     while(leftToCut != 0){
//         if(leftToCut >= min){
//             leftToCut -= min;
//             count++;
//         } else {
//             leftToCut += min;
//             count--;
//             if(leftToCut >= mid){
//                 leftToCut -= mid;
//                 count++;
//             } else{
//                 leftToCut += mid;
//                 count--;
//                 if(leftToCut >= max){
//                     leftToCut -= max;
//                     count++;
//                 };
//             };
//         };
//         if(leftToCut <= 0){
//             console.log("Se pasó para el otro lado");
//             break;
//         };
//     };
//     return count;
// };