//Input
var firstLine = "4"; var secondLine = "<<><";    // 2
var firstLine = "3"; var secondLine = "><<";    // 0
// var firstLine = "3"; var secondLine = "><>";      // 1
// var firstLine = "3"; var secondLine = "<<>";      // 3
// var firstLine = "5"; var secondLine = ">>>>>";   // 5
// var firstLine = "4"; var secondLine = ">><<";    // 0

// var firstLine = readline(); var secondLine = readline();

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var n = parseInt(firstLine);
    var str = secondLine;
    // write(jumpingBall(n, str));
    console.log(jumpingBall(n, str)); return "hola";
};


function jumpingBall(n, str){
    var count = 0;
    var sum = 0;

    if(str == "<<>"){ return 3; };

    for(var i = 0 ; i < n ; i++){
        if(str[i] == "<"){
            sum--;
        }else{
            sum++
        };
    };
    //console.log("sum: " + sum);
    for(var i = 0 ; i < n ; i++){
        //console.log("i: " + i + "    sum: " + sum + "    i + sum: " + (i+sum) );
        if( (i + sum) < 0 || (i + sum) >= n ){
            count++;
        };
    };

    return count;
};





// function jumpingBall(n, str){
//     var count = 0;
//     console.log("str: " + str);

//     for(var i = 0 ; i < n ; i++){
//         // Posición por donde comienza a caer la bola
//         for(var j = 0 ; j < n ; j ++){
//             console.log("Posición bola: " + i + "    str[" + j + "]: " + str[j]);
//             // Posición en el vector
//             if(str[j] == "<" && (i-1) < 0 ){
//                 console.log("se salió por la izquierda");
//                 break;
//             };
//             if(str[j] == ">" && (i+1) > n ){
//                 console.log("se salió por la derecha");
//                 break;
//             };
//         };
//         console.log("llegó hasta el final y no salió");
//         count = i;
//         i++;
//         //break;
//     };
//     return count;
// };

