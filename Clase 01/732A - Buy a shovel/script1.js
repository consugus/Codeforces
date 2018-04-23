//Input
// k - Precio por pala
// r - demonimación de la moneda que Polycarp tiene en su bolsillo
// var firstLine = "117 3";        // 9
// var firstLine = "237 7";        // 1
// var firstLine = "15 2";         // 2
// var firstLine = "1 1";         // 1
// var firstLine = "1 9";         // 9
// var firstLine = "5 5";         // 1      yo obtengo 2

var firstLine = readline();

retorno = eval(firstLine);

//Solution
function eval(firstLine){
    var tmp = firstLine.split(" ").map(function(x) { return parseInt(x); });
    var k  = tmp[0];
    var r = tmp[1];

    write(minimumNumberOfShovels(k, r));
    // console.log(minimumNumberOfShovels(k, r));
    // return "Hola;"
};

function minimumNumberOfShovels(k, r){
    var m = 0;

    if(k == 1){ return r;};
    if(r%k == 0){ return r/k;};

    for(var n = 1 ; n < 1000 ; n++){
        // console.log("n*10/k: " + Math.floor(n*10/k));
        if( (n*10/k) == Math.floor(n*10/k) || ((n*10+r)/k) == Math.floor((n*10+r)/k)  ){
            if( (n*10/k) == Math.floor(n*10/k) ){
                m = n*10/k;
            } else{
                m = (n*10+r)/k;
            };
            break;
        };
    };

    // console.log("m: " + m);

    return m;
};



