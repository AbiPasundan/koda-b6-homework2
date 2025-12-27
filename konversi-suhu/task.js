let counter = 0
let temp, tempSource, convertTo
// nilai awal
process.stdout.write('Masukan nilai : ');
process.stdin.on('data', (data) => {
    let start = data.toString().trim()
    if(counter === 0){
        process.stdout.write('Masukan temperature : ');
        temp = Number(start)
        counter++
    } else if(counter === 1){
        process.stdout.write('konversi ke : ');
        tempSource = start
        counter++
    } else if(counter === 2){
        process.stdout.write("\n \n \n \nProcess ... \n \n \n \n");
        convertTo = start

        console.log(typeof(temp));
        console.log(typeof(tempSource));
        console.log(typeof(convertTo));
        

        console.log(temp, tempSource, convertTo)
        process.stdout.write(`Hasil konversi ${temp} ${tempSource} ke ${convertTo} adalah $ `);

        if (tempSource == "celcius") {
            
        }

        process.exit()
    } 

})