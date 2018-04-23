//Input

// var firstLine = "24" ; var secondLine = "17:30";     // pe: 17:30 (no changes)
// var firstLine = "12" ; var secondLine = "17:30";     // pe: 07:30 (1 change)
// var firstLine = "24" ; var secondLine = "99:99";     // pe: 19:19 (2 changes)
// var firstLine = "12" ; var  secondLine = "00:05";     // pe: 01:05 (1 changes)
// var firstLine = "12" ; var secondLine = "90:32";     // pe: 10:32 (1 changes)
// var firstLine = "12" ; var secondLine = "20:00";     // pe: 10:00 (1 changes)

var firstLine = readline(); var secondLine = readline();

retorno = eval(firstLine, secondLine);

//Solution
function eval(firstLine, secondLine){
    var format = firstLine;
    var hourMin = secondLine;

    write(correctTime(format, hourMin));
    // console.log(correctTime(format, hourMin));
    // return "Hola";
};

function correctTime(format, hourMin){
    if(parseInt(hourMin.slice(3,5)) > 59){
        hourMin = hourMin.slice(0, 3) + "1" + hourMin[4];
    };
    if( parseInt(hourMin.slice(0,2)) > 23 ){
        if(hourMin[1] != "0"){
            hourMin = "1" + hourMin.slice(1, 5);
        }else{
            hourMin = "10" + hourMin.slice(2, 5);
        };
    };
    if (format == "12" && parseInt(hourMin.slice(0,2)) > 12){

        if(hourMin[1] != "0"){
            hourMin = "0" + hourMin.slice(1, 5);
        }else{
            hourMin = "10" + hourMin.slice(2, 5);
        };
    };
    if (format == "12" && (hourMin.slice(0,2)) == "00"){
        hourMin = "01" + hourMin.slice(2, 5);
    };
    return hourMin;
};

