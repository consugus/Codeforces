//Input
// var firstLine = "6 3";  var secondLine = "1 3 5 2 5 4";             var thirdLine = "1 1 0 1 0 0";              //R: 16
// var firstLine = "7 3";  var secondLine = "1 3 5 2 5 4 1";           var thirdLine = "1 1 0 1 0 0 1";            //R: 17
// var firstLine = "5 2";  var secondLine = "1 2 3 4 20";              var thirdLine = "0 0 0 1 0";                //R: 24
// var firstLine = "4 2";  var secondLine = "4 5 6 8";                 var thirdLine = "1 0 1 0";                  //R: 18
// var firstLine = "6 3";  var secondLine = "1 3 5 2 1 15";            var thirdLine = "1 1 0 1 0 0";              //R: 22
// var firstLine = "10 5"; var secondLine = "3 5 9 2 5 9 3 8 8 1";     var thirdLine = "0 1 1 1 0 1 0 0 0 0";      //R: 49
// var firstLine = "10 4"; var secondLine = "9 5 6 4 3 9 5 1 10 7";    var thirdLine = "0 0 0 0 0 0 1 0 0 1";      //R: 36
// var firstLine = "10 1"; var secondLine = "6 6 8 7 6 6 3 2 5 6";     var thirdLine = "0 0 1 0 0 1 0 1 1 1";      //R: 34
// var firstLine = "10 5"; var secondLine = "1 1 1 1 1 1 1 1 10000 1"; var thirdLine = "1 1 1 1 1 1 1 1 0 1";      //R: 10009

var firstLine = readline(); var secondLine = readline(); var thirdLine = readline();

retorno = eval(firstLine, secondLine, thirdLine);

//Solution
function eval(firstLine, secondLine, thirdLine){
    var tmp = firstLine.split(" ").map(function(x){ return parseInt(x)});
    var n = tmp[0];
    var k = tmp[1];
    var theorems = secondLine.split(" ").map(function(x){ return parseInt(x)});//.map(parseInt);
    var behavior = thirdLine.split(" ").map(function(x){ return parseInt(x)});

    write(calculate(n, k, theorems, behavior));
    // console.log(calculate(n, k, theorems, behavior));
    // return "Hola";
};

function calculate(n, k, theorems, behavior){
    var maxSecretTechnique = 0;
    var secretTechnique = 0;
    var startingIndex = 0;

    for(var i = 0 ; i < (k) ; i++){
        secretTechnique += theorems[i];
    }
    for(var i = k ; i < n ; i++){
        secretTechnique += theorems[i]*behavior[i]
    };

    maxSecretTechnique = secretTechnique;

    for (var i = 0 ; i < (n-k) ; i++){
        if(behavior[i+k] == 0){
            secretTechnique += (theorems[i+k]);
        };
        if(behavior[i] == 0){
            secretTechnique = secretTechnique - theorems[i];
        };
        //console.log("i:"  + i + "      secretTechnique: " + secretTechnique + "   + theorems[" + (i+k) + "]: "  + theorems[i+k] + ": " + secretTechnique);

        if(maxSecretTechnique < secretTechnique){
            maxSecretTechnique = secretTechnique;
        };

    };


    return maxSecretTechnique;
};
