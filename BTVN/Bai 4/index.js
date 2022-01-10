
function ketQua(){
    var val1 = document.getElementById("canhThu1").value*1;
    var val2 = document.getElementById("canhThu2").value*1;
    var val3 = document.getElementById("canhThu3").value*1;

    if( val1 == 0 || val2 == 0 || val3 == 0 ){
        alert("Moi nhap lai");
    }
    else if(val1 == val2 && val1 == val3){
        alert("tam giac deu");
    }
    else if( val1 == val2 || val1 == val3 || val2 == val3){
        alert("tam giac can");
    }
    else if ( Math.pow(val1,2) == Math.pow(val2,2) + Math.pow(val3,2) || Math.pow(val2,2) == Math.pow(val1,2) + Math.pow(val3,2) || Math.pow(val3,2) == Math.pow(val1,2) + Math.pow(val2,2) ){
        alert("tam giac vuong");
    }
    else{
        alert("tam giac thuong");
    }

}