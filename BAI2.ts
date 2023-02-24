function phanloai(data: string[]) {
    let Viettel: string[] = [];
    let Mobilephne: string[] = [];
    let Vinaphone: string[] = [];

    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].substring(0, 3) === '084' || data[i].substring(0, 3) === '085') {
            Viettel.push(data[i]);
            console.log(Viettel)

        } else if (data[i].substring(0, 3) === '082' || data[i].substring(0, 3) === '083') {
            Mobilephne.push(data[i]);
            console.log(Mobilephne)
        } else {
            Vinaphone.push(data[i]);
            console.log(Vinaphone)
        }
    }
}
let arr:Array<string>=["08219845","08314597","084675759","085198264","081736829","08026416817"];
phanloai(arr)