function phanloai(data) {
    var Viettel = [];
    var Mobilephne = [];
    var Vinaphone = [];
    for (var i = 0; i < data.length - 1; i++) {
        if (data[i].substring(0, 3) === '084' || data[i].substring(0, 3) === '085') {
            Viettel.push(data[i]);
        }
        else if (data[i].substring(0, 3) === '082' || data[i].substring(0, 3) === '083') {
            Mobilephne.push(data[i]);
        }
        else {
            Vinaphone.push(data[i]);
        }
        console.log(Viettel);
        console.log(Mobilephne);
        console.log(Vinaphone);
    }
}
var arr = ["08219845", "08314597", "084675759", "085198264", "081736829", "08026416817"];
phanloai(arr);
