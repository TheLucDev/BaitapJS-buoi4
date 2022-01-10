

function ketQua() {
    var val1 = document.getElementById("soThu1").value*1;
    var val2 = document.getElementById("soThu2").value*1;
    var val3 = document.getElementById("soThu3").value*1;
    var temp;
    if(val1>val2){
        temp=val1;
        val1=val2;
        val2=temp;
    }
    if(val1>val3){
        temp=val1;
        val1=val3;
        val3=temp;
    }
    if(val2>val3){
        temp=val2;
        val2=val3;
        val3=temp;
    }

    console.log(val1,val2,val3);
    document.getElementById("ketQua").innerText = val1 + " " + val2 + " " + val3;

}