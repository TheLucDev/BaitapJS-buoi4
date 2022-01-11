
function ketQua() {
    var value = document.getElementById("soNguyen").value*1;

    var hangTram =  Math.floor(value/100);
    var hangChuc =  Math.floor(value%100/10);
    var hangDonVi =  Math.floor(value%100%10);

    document.getElementById("ketQua").innerText = hangTram + " " + "trăm" + " " + hangChuc+ " " + "mươi"+ " " + hangDonVi+ " " ;
}