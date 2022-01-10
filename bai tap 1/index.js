const luongMoiGio=50000;

function tinhTien() {
    var soGioValue=document.getElementById("txtSoGio").value*1;
    var tongTien=0;
    if(soGioValue<=40){
        tongTien=luongMoiGio*soGioValue;
    }
    else{
        var soGioOT=soGioValue-40;

        tongTien=40*luongMoiGio+soGioOT*1.5*luongMoiGio;
    }
    document.getElementById("ketQua").innerText = "Lương của bạn là: "+ tongTien.toLocaleString();
}