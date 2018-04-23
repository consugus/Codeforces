//Input
// var firstLine = "Is it a melon?"; //R: NO
// var firstLine = "Is it an apple?"; //R: YES
// var firstLine = "  Is     it a banana ?"; //R: YES
// var firstLine = "Is   it an apple  and a  banana   simultaneouSLY?"; //R: YES


var firstLine = readline();

retorno = eval(firstLine);

//Solution
function eval(firstLine){
    var str = firstLine;

    write(sleuth(str));
    // console.log(sleuth(str));
    return "Hola";
};

function sleuth(str){
    str = str.toLowerCase();
    //console.log(str);
    var vowels = "aeiouy";
    var char = "";
    var len = str.length;
    var answer = "NO";
    for(var i = len ; i >= 0 ; i--){
        if(str[i] >= "a" && str[i] <= "z"){
            char = str[i];
            break;
        };
    };
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "y"){
        answer = "YES"
    };
    return answer;
};



