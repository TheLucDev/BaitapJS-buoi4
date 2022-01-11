// const thang1 = 31 ;
// const thang3 = 31 ;
// const thang5 = 31 ;
// const thang7 = 31 ;
// const thang8 = 31 ;
// const thang10 = 31 ;
// const thang12 = 31 ;
// var thang2 = 28 ;
// const thang4 = 30 ;
// const thang6 = 30 ;
// const thang9 = 30 ;
// const thang11 = 30 ;

function ketQua(){
    var month = document.getElementById("month").value*1;
    var year = document.getElementById("year").value*1;

    if(month==2 && year % 100 != 0 && year % 4 == 0){
        alert("Tháng này có 29 ngày");
    }
    else if(month==2){
        alert("Tháng này có 28 ngày");
    }
    else if(month==1 || month==3 || month==5|| month==7|| month==8|| month==10|| month==12){
        alert("Tháng này có 31 ngày");
    }
    else if (month==4 || month==6|| month==9|| month==11){
        alert("Tháng này có 30 ngày");
    }
    else{
        alert("Mời nhập lại!");
    }
}