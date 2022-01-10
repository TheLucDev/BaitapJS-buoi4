
function xuatChaoHoi() {
    var luaChonValue = document.getElementById("luaChon").value;
    console.log(luaChonValue);

    switch (luaChonValue) {
        case "B":
            alert("chào bố");
            break;
        case "M":
            alert("chào mẹ");
            break;
        case "A":
            alert("chào anh");
            break;
        case "E":
            alert("chào em");
            break;

        default:
            alert("mời nhập lại");
            break;
    }
}