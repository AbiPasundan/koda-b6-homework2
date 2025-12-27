// homework2
process.stdout.write('Masukan nilai : ');
process.stdin.on('data', (data) => {
    
    let temp = Number(data.toString().trim())
    console.log(typeof temp);
    console.log(temp);
    
    const tempSource = "Celcius"
    const convertTo = "Farenheit"

    if (tempSource == "Celcius") {
        // do somthing
        if (convertTo == "Celcius") {
            console.log("error");
        } else if (convertTo == "Farenheit") {
            temp = temp * (9/5) + 32
            console.log(`Celcius ke Farenheit adalah ${temp}`);
        } else if (convertTo == "Reamure") {
            temp = temp * 4 / 5
            console.log(`Celcius ke Reamure adalah ${temp}`);
        } else if(convertTo == "Kelvin") {
            temp = temp + 273
            console.log(`Celcius ke Kelvin adalah ${temp}`);
        }
        return process.exit();
    } else if(tempSource == "Farenheit"){
        // do somthing
    }
    else if(tempSource == "Reamure"){
        // do somthing
    }
    else if(tempSource == "Kelvin"){
        // do somthing
    }else {
        // do somthing
    }

});

// const celcius = 40
// const celciusToFarenheit = (celcius * 9/5) + 32
// const celciusToReamure = celcius * 4 / 5
// const celciusToKelvin = celcius + 273
// // c to f
// console.log(`Hasil konversi suhu dari celcius ke Farenheit adalah ${celciusToFarenheit}`);
// // c to r
// console.log(`Hasil konversi suhu dari celcius ke Reamure adalah ${celciusToReamure}`);
// // c to k
// console.log(`Hasil konversi suhu dari celcius ke Kelvin adalah ${celciusToKelvin}`);
