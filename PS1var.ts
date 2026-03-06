const pLinear = (gab1 : number, gab2 : number) : any  => {
    let x = gab1 + gab2 ;
    x = x / 2;

    let y = x - gab2;

    console.log(`Hasil X = ${[x]} Hasil = ${y}`)
    return [x, y]   

}
pLinear(6, 6)
