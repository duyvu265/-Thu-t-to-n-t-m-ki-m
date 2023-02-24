function countNumber(number:number[],taget:number) {
    let cout:number=0;
    for (let i = 0; i <number.length-1 ; i++) {
        if (number[i]==taget){
            cout++;
        }

    } console.log(`${taget} co ${cout} lan xuat hien` );
}

let arr:Array<number>=[1,2,4,5,6,7,8,9,5,3,2];
countNumber(arr,5);
