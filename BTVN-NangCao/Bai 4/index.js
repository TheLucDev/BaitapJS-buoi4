const schoolVal = 0 ; //gia su toa do cua truong la 0
function ketQua() {
    var sv1Name = document.getElementById("tenSv1").value;
    var sv1Val = document.getElementById("viTriSv1").value*1;

    var sv2Name = document.getElementById("tenSv2").value;
    var sv2Val = document.getElementById("viTriSv2").value*1;

    var sv3Name = document.getElementById("tenSv3").value;
    var sv3Val = document.getElementById("viTriSv3").value*1;
//-------------------------- - - - - - - - - - - - - - - - - - - -
    if(sv1Val-schoolVal > sv2Val-schoolVal && sv1Val-schoolVal > sv3Val-schoolVal){
        alert("Sinh viên xa trường nhất : "+ sv1Name);
    }
    else if(sv2Val-schoolVal > sv1Val-schoolVal && sv2Val-schoolVal > sv3Val-schoolVal){
        alert("Sinh viên xa trường nhất : " + sv2Name);
    }
    else if(sv3Val-schoolVal > sv1Val-schoolVal && sv3Val-schoolVal > sv2Val-schoolVal){
        alert("Sinh viên xa trường nhất : " + sv3Name);
    }
    else{
        alert("Mời nhập lại!");
    }
}