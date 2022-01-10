
function ketQua(){
    var x = 0; //x la so chan
    var y = 0; // y la so le
    var val1 = document.getElementById("soThu1").value*1;
    var val2 = document.getElementById("soThu2").value*1;
    var val3 = document.getElementById("soThu3").value*1;

    if(val1 % 2 == 0){
        x++;
    }
    else y++;

    if(val2 % 2 == 0){
        x++;
    }
    else y++;

    if(val3 % 2 == 0){
        x++;
    }
    else y++;

    document.getElementById("soChan").innerText = x;
    document.getElementById("soLe").innerText = y ;

}