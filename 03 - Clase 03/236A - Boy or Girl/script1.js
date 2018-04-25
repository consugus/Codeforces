//Input
// var str = "wjmzbmr";    // R: "CHAT WITH HER!"
// var str = "abcdefg";    // R: "CHAT WITH HER!"
// var str = "xiaodao";    // R: "IGNORE HIM!""
// var str = "sevenkplus"; // R: "CHAT WITH HER!"

var str = readline();

retorno = eval(str);

//Solution
function eval(str){
    write(boyOrGirl(str));
    //console.log(boyOrGirl(str));
};

function boyOrGirl(str){
    var answer = "";
    var numberOfDifferentCharacters = 0;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var hashAlphabet = new Array(27).join("0").split("").map(parseInt); hashAlphabet[1] = 0;
    var len = str.length;
    for(var i = 0 ; i < len ; i++){
        index = (str.charCodeAt(i))-97;
        hashAlphabet[index]++ ;
    };
    for(var i = 0 ; i < hashAlphabet.length ; i++){
        if(hashAlphabet[i]!= 0){
            numberOfDifferentCharacters++;
        };
    };
    if(numberOfDifferentCharacters%2 == 0){
        answer = "CHAT WITH HER!";
    } else{
        answer = "IGNORE HIM!"
    };
    return answer;
};


