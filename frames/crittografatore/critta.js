function scriviAlfabeto(alfabeto, id){
    var table = "<table> <tr>";
    for (var i = 0; i < alfabeto.length; i++) {    
    l = alfabeto[i];
    table += "<td width='25px'>" + l + "</td>";
    }
    table += "</tr></table>";
    $("#" + id).html(table);

}

function rot (testo, direzione, chiave, alf){

    alf2=[] ;
    // se la chiave e' > alf.length facciamo il modulo
    chiave = chiave % alf.length;
    if (direzione == 'left') {
        for(i=parseInt(chiave); i<alf.length; i++){
            alf2.push(alf[i]);
        }
        for(i=0; i<parseInt(chiave); i++){
            alf2.push(alf[i]);
        }
    }
    else {
        for(i=parseInt(alf.length-chiave); i<alf.length; i++){
            alf2.push(alf[i]);
        }
        for(i=0; i<parseInt(alf.length-chiave); i++){
            alf2.push(alf[i]);
        }
    }

    return alf2;

}


function cripta(a1, a2, testo, verso="direct"){

if (verso == "direct"){
    source = a1;
    dest = a2;
} else {
    source = a2;
    dest = a1;   
}


testoCriptato = "";
    for (var i = 0; i < testo.length; i++) {    
        l = testo.charAt(i).toUpperCase();
        switch(l) {
            case (" "):
                testoCriptato += " ";
            break;
            default:
                posizioneInAlf = source.indexOf(l);
                testoCriptato += dest[posizioneInAlf];
            break;
        }
        // l = testo.charAt(i).toUpperCase();
        // posizioneInAlf = source.indexOf(l);
    }

    return testoCriptato;
}

function vai(verso){

    alf=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    testo = $("#testo").val();
    direzione = $("#direzione").val();
    chiave = $("#chiave").val();

    alf2 = rot (testo, direzione, chiave, alf);
    


    testoCriptato = cripta(alf, alf2, testo, verso);


    scriviAlfabeto(alf, "alfabeto");
    scriviAlfabeto(alf2, "alfabeto-criptato");

    $("#risultato").html(testoCriptato);
}

// alfabetoCriptato = "";
    // for(lettera in alf2){

    //     alfabetoCriptato += alf2[lettera] + " ";
    // }
    // $("#alfabeto-criptato").html(alfabetoCriptato);


// per far riferimento a un id si usa il carattere # prima del nome
// es:  #alfabeto
//
// per far riferimento a una classe si usa il carattere . prima del nome
// es:  .risultato