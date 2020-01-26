
var direzioni = ["n", "e", "s", "o"];




function ruota_orario(pos){
    var i = direzioni.indexOf(pos);
    i = (i + 1) % direzioni.length ;
    return direzioni[i];
}
function ruota_antiorario(pos){
var i = direzioni.indexOf(pos);
if (i == 0) {
        return direzioni[direzioni.length - 1];
}
i = (i - 1) % direzioni.length;
return direzioni[i];
}

function vai(){

var init = $("#initpos").val().split(",");
var mosse = $("#mosse").val().split(",");

var x = init[0];
var y = init[1];
var d = init[2];


var percorso = [];
var last = [x,y,d];
percorso.push(last);

for (i in mosse){
    var mossa = mosse[i];

    switch (mossa){
        case "f":
        // f -> vai avanti

        switch (d){
            case "n":
                // incremento y   
                y = parseInt(y) + 1;
            break;
            case "e":
                // incremento x
                x = parseInt(x) + 1;
            break;
            case "s":
                // decremento y
                y = parseInt(y) - 1;
                break;
            case "o":
                // decremento x
                x = parseInt(x) - 1;
                break;
            default: 
            // TODO: dare errore
        }

        break;

        case "F":
        // f -> vai avanti

        switch (d){
            case "n":
                // incremento y   
                y = parseInt(y) + 1;
            break;
            case "e":
                // incremento x
                x = parseInt(x) + 1;
            break;
            case "s":
                // decremento y
                y = parseInt(y) - 1;
                break;
            case "o":
                // decremento x
                x = parseInt(x) - 1;
                break;
            default: 
            // TODO: dare errore
        }

        break;

        case "o":
            // o -> ruota in senso orario
            d = ruota_orario(d);
        break;

        case "O":
            // o -> ruota in senso orario
            d = ruota_orario(d);
        break;

        case "a":
            // a -> ruota in senso antiorario
            d = ruota_antiorario(d);
        break;

        case "A":
            // a -> ruota in senso antiorario
            d = ruota_antiorario(d);
        break;

        default:
        // TODO: dare errore
    }

    last = [x,y,d];
    percorso.push(last);

}

$("#risultato").html("");
for (i in percorso){

    $("#risultato").append ("[" + percorso[i][0] + "," + percorso[i][1] + "," + percorso[i][2] + "]") 

    if (i < percorso.length - 1){
        $("#risultato").append(",");
    }

}
console.log(percorso);

}