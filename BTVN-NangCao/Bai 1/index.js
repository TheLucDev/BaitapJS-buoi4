
function ketQua(){
    var day = document.getElementById("day").value*1;
    var month = document.getElementById("month").value*1;
    var year = document.getElementById("year").value*1;

    var x = day+1;
    document.getElementById("ngayTiepTheo").innerText = "Ngày tiếp theo là : " + x + "/" + month + "/" + year ;

    var y = day - 1;
    document.getElementById("ngayHomQua").innerText = "Ngày hôm qua là : " + y + "/" + month + "/" + year ;

}