// homework2
process.stdout.write('Masukan nilai jari-jari: ');
process.stdin.on('data', (data) => {
    const r = Number(data.toString().trim())
    if(!Number.isFinite(r)){
        console.log("yang anda masukan bukan angka!")
        process.exit()
    } else {
        let phi = 22/7
        if(phi === 3.14) {
            const l = phi * r * r 
            const d = 2 * r 
            const k = 2 * phi * r 

            console.log(`luas lingkaran dengan r nya ${r} adalah ${ l}`);
            console.log(`diameter lingkaran dengan r nya ${r} adalah ${ d}`);
            console.log(`keliling lingkaran dengan r nya ${r} adalah ${ k}`);
        }else if(phi === 22/7){
            const l = phi * r * r 
            const d = 2 * r 
            const k = 2 * phi * r 

            console.log(`luas lingkaran dengan r nya ${r} adalah ${ l}`);
            console.log(`diameter lingkaran dengan r nya ${r} adalah ${ d}`);
            console.log(`keliling lingkaran dengan r nya ${r} adalah ${ k}`);
        } else {
            console.log(`Tentukan phi yang benar`);
        }
        process.exit();
}
});

