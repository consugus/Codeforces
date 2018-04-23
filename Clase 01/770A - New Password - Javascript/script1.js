//Input
var firstLine = "4 3";
var firstLine = "6 6";
var firstLine = "5 2";

var firstLine = readline();

retorno = eval(firstLine);

//Solution
function eval(firstLine){
    var tmp = firstLine.split(" ");
    var n = parseInt(tmp[0]);
    var k = parseInt(tmp[1]);

    // console.log(getPassword(n, k));
    write(getPassword(n, k));
    //return "Hola";
};

function getPassword(n, k){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var newPassword = "";

    for(var i = 0 ; i < k ; i++){
        newPassword += alphabet[i];
    };
    for(var i = k ; i < n  ; i++){
        newPassword += newPassword[i%k];
    };

    return newPassword;
};
