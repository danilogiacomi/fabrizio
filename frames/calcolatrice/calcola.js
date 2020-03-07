function calcola() {
    a = $("#unoterm").val();
    b = $("#dueterm").val();
    s = $("#segno").val();
    risultato = "";
    switch(s) {
        case("plus"):
            risultato += parseInt(a) + parseInt(b);
        break;
        case("minus"):
            risultato += a - b;
        break;
        case("times"):    
            risultato += a * b;  
        break;
        case("divide"):
            risultato += a / b;
        break;
        default:
            risultato += "Errore";
        break;
    }
    console.log(risultato);
    $("#risultato").html(risultato);
}