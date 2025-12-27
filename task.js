let counter = 0
let temp, tempSource, convertTo
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
        process.stdout.write("\n \n \n \n Process ... \n \n \n \n");
        convertTo = start

        if (tempSource == "celcius") {
            switch (convertTo) {
                case "celcius": 
                {
                    console.log(`Tidak bisa konversi ${tempSource} ke ${convertTo}`);
                    break;
                }
                case "farenheit": 
                {
                    const tempResult = (temp * 9/5) + 32
                    console.log(`Hasil konversi ${temp} ${tempSource} ke ${convertTo} adalah ${tempResult}`);
                    break;
                }
                case "reamure":
                {
                    const tempResult = temp * 4 / 5
                    console.log(`Hasil konversi ${temp} ${tempSource} ke ${convertTo} adalah ${tempResult}`);
                    break;    
                }
                case "kelvin":
                {
                    const tempResult = temp + 273.15
                    console.log(`Hasil konversi ${temp} ${tempSource} ke ${convertTo} adalah ${tempResult}`);
                    break;    
                }
            }
        } else if (tempSource == "farenheit"){

        } else if (tempSource == "reamure"){

        } else if (tempSource == "kelvin"){

        } else {
            console.log("masukan derajat \n suhu yang benar!");
            
        }

        process.exit()
    } 

})