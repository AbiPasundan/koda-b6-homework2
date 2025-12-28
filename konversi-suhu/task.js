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
                case "fahrenheit": 
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
        } else if (tempSource == "fahrenheit"){
            switch (convertTo) {
                case "celcius": 
                {
                    const tempResult = temp - 32 * 5/9
                    console.log(`Hasil konversi ${temp} ${tempSource} ke ${convertTo} adalah ${tempResult}`);
                    break;
                }
                case "fahrenheit": 
                {
                    console.log(`Tidak bisa konversi ${tempSource} ke ${convertTo}`);
                    break;
                }
                case "reamure":
                {
                    // 32 * 4/9
                    const tempResult = (temp - 32) * 4/9
                    console.log(`Hasil konversi ${temp} ${tempSource} ke ${convertTo} adalah ${tempResult}`);
                    break;    
                }
                case "kelvin":
                {
                    // (4°F + 459.67) * (5/9)
                    const tempResult = (temp + 459) * (5/9)
                    console.log(`Hasil konversi ${temp} ${tempSource} ke ${convertTo} adalah ${tempResult}`);
                    break;    
                }
            }
        } else if (tempSource == "reamure"){
            switch (convertTo) {
                case "celcius": 
                {
                    // R * (5/4) = 37.5°C
                    const tempResult = temp * (5/4)
                    console.log(`Hasil konversi ${temp} ${tempSource} ke ${convertTo} adalah ${tempResult}`);
                    break;
                }
                case "fahrenheit": 
                {
                    // R * (9/4) + 32
                    const tempResult = temp * (9/4) + 32
                    console.log(`Hasil konversi ${temp} ${tempSource} ke ${convertTo} adalah ${tempResult}`);
                    break;
                }
                case "reamure":
                {
                    console.log(`Tidak bisa konversi ${tempSource} ke ${convertTo}`);
                    break;    
                }
                case "kelvin":
                {
                    // R * (5/4) + 273.15
                    const tempResult = temp * (5/4) + 273.15
                    console.log(`Hasil konversi ${temp} ${tempSource} ke ${convertTo} adalah ${tempResult}`);
                    break;    
                }
            }
        } else if (tempSource == "kelvin"){
            switch (convertTo) {
                case "celcius": 
                {
                    // K − 273,15 
                    const tempResult = temp - 273.15
                    console.log(`Hasil konversi ${temp} ${tempSource} ke ${convertTo} adalah ${tempResult}`);
                    break;
                }
                case "fahrenheit": 
                {
                    // K * (9/5)- 459.67
                    const tempResult = temp * (9/5) - 459.67
                    console.log(`Hasil konversi ${temp} ${tempSource} ke ${convertTo} adalah ${tempResult}`);
                    break;
                }
                case "reamure":
                {
                    // K - 273.15) *(4/5)
                    const tempResult = temp - 273.15 * (4/5)
                    console.log(`Hasil konversi ${temp} ${tempSource} ke ${convertTo} adalah ${tempResult}`);
                    break;    
                }
                case "kelvin":
                {
                    console.log(`Tidak bisa konversi ${tempSource} ke ${convertTo}`);
                    break;    
                }
            }
        } else {
            console.log("masukan derajat \n suhu yang benar!");
            
        }

        process.exit()
    } 

})