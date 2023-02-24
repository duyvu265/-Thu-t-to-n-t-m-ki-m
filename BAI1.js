function countNumber(number, taget) {
    var cout = 0;
    for (var i = 0; i < number.length - 1; i++) {
        if (number[i] == taget) {
            cout++;
        }
    }
    console.log("".concat(taget, "co").concat(cout, " lan xuat hien"));
}
var arr = [1, 2, 4, 5, 6, 7, 8, 9, 5, 3, 2];
countNumber(arr, 5);
