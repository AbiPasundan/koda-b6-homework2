# Flowchart Task 4

## Konversi Suhu

```mermaid
    flowchart TB
        Start@{ shape: circ, label: "Start"}

        counter@{ shape: lean-r, label: "input: counter"}
        temperature@{ shape: lean-r, label: "input: counter"}
        tempSource@{ shape: lean-r, label: "input: tempSource"}
        convertTo@{ shape: lean-r, label: "input: convertTo"}
        firstPrint@{ shape: lean-r, label: "Output: ''Masukan nilai : ''"}

        %% PROSES BAKALAN PENTING !!!
        proccess@{ shape: rect, label: "('data', (data) => {...})"}

        starting@{ shape: lean-r, label: "start = data.toString().trim()"}

        %% CONDITION
        %% Counter 0
        counter0@{ shape: diamond, label: "counter === 0"}
        counter0True@{ shape: lean-r, label: "output: ''Masukan temperature : ''"}
        temp0@{ shape: lean-r, label: "temp = Number(start)"}
        counterInc0@{ shape: rect, label: "counter++"}

        %% COUNTER 1
        counter1@{ shape: diamond, label: "counter === 1"}
        counter1True@{ shape: lean-r, label: "output: ''konversi ke : ''"}
        temp1@{ shape: lean-r, label: "tempSource = start"}
        counterInc1@{ shape: rect, label: "counter++"}


        
        %%tempSource == celcius  
        celcius@{ shape: diamond, label: "tempSource === ''celcius''"}
        %%ctc
        ctc@{ shape: diamond, label: "convertTo === ''celcius''"}
        ctcPrint@{ shape: lean-r, label: "output ''Tidak bisa konversi ''temp'' ''tempSource'' ke ''convertTo'' "}
        %%ctf
        ctf@{ shape: diamond, label: "convertTo === ''fahrenheit''"}
        ctfTrue@{ shape: rect, label: "tempResult = (temp * 9/5) + 32"}
        ctfPrint@{ shape: lean-r, label: "''Hasil konversi ''temp + tempSource ''ke '' convertTo adalah'' tempResult"}
        %%ctr
        ctr@{ shape: diamond, label: "convertTo === ''reamure''"}
        ctrTrue@{ shape: rect, label: "tempResult = temp * 4 / 5"}
        ctrPrint@{ shape: lean-r, label: "''Hasil konversi ''temp + tempSource ''ke '' convertTo adalah'' tempResult"}
        %%ctk
        ctk@{ shape: diamond, label: "convertTo === ''kelvin''"}
        ctkTrue@{ shape: rect, label: "tempResult = temp + 273.15"}
        ctkPrint@{ shape: lean-r, label: "''Hasil konversi ''temp + tempSource ''ke '' convertTo adalah'' tempResult"}

        %%tempSource == fahrenheit  
        fahrenheit@{ shape: diamond, label: "tempSource === ''fahrenheit''"}
        %%ftc
        ftc@{ shape: diamond, label: "convertTo === ''celcius''"}
        ftcTrue@{ shape: rect, label: "tempResult = temp - 32 * 5/9"}
        ftcPrint@{ shape: lean-r, label: "''Hasil konversi ''temp + tempSource ''ke '' convertTo adalah'' tempResult"}
        %%ftf
        ftf@{ shape: diamond, label: "convertTo === ''fahrenheit''"}
        ftfPrint@{ shape: lean-r, label: "output ''Tidak bisa konversi ''temp'' ''tempSource'' ke ''convertTo'' "}
        %% ftr
        ftr@{ shape: diamond, label: "convertTo === ''reamure''"}
        ftrTrue@{ shape: rect, label: "tempResult = (temp - 32) * 4/9"}
        ftrPrint@{ shape: lean-r, label: "''Hasil konversi ''temp + tempSource ''ke '' convertTo adalah'' tempResult"}
        %% ftk
        ftk@{ shape: diamond, label: "convertTo === ''kelvin''"}
        ftkTrue@{ shape: rect, label: "tempResult = (temp + 459) * (5/9)"}
        ftkPrint@{ shape: lean-r, label: "''Hasil konversi ''temp + tempSource ''ke '' convertTo adalah'' tempResult"}

        %%tempSource == reamure
        reamure@{ shape: diamond, label: "tempSource === ''reamure''"}
        %% rtc
        rtc@{ shape: diamond, label: "convertTo === ''celcius''"}
        rtcTrue@{ shape: rect, label: "tempResult = temp * (5/4)"}
        rtcPrint@{ shape: lean-r, label: "''Hasil konversi ''temp + tempSource ''ke '' convertTo adalah'' tempResult"}
        %% rtf
        rtf@{ shape: diamond, label: "convertTo === ''fahrenheit''"}
        rtfTrue@{ shape: rect, label: "tempResult = temp * (9/4) + 32"}
        rtfPrint@{ shape: lean-r, label: "''Hasil konversi ''temp + tempSource ''ke '' convertTo adalah'' tempResult"}
        %% rtr
        rtr@{ shape: diamond, label: "convertTo === ''reamure''"}
        rtrPrint@{ shape: lean-r, label: "output ''Tidak bisa konversi ''temp'' ''tempSource'' ke ''convertTo'' "}
        %% rtk
        rtk@{ shape: diamond, label: "convertTo === ''kelvin''"}
        rtkTrue@{ shape: rect, label: "tempResult = temp * (5/4) + 273.15"}
        rtkPrint@{ shape: lean-r, label: "''Hasil konversi ''temp + tempSource ''ke '' convertTo adalah'' tempResult"}

        %%tempSource == kelvin  
        kelvin@{ shape: diamond, label: "tempSource === ''kelvin''"}
        ktc@{ shape: diamond, label: "convertTo === ''celcius''"}
        ktcTrue@{ shape: rect, label: "tempResult = temp * (5/4) + 273.15"}
        ktcPrint@{ shape: lean-r, label: "''Hasil konversi ''temp + tempSource ''ke '' convertTo adalah'' tempResult"}

        %% EXIT BEFORE STOP
        processExit@{ shape: rect, label: "process.exit()"}

        %% sambungna Start dan counter 0
        Start-->counter-->temperature-->tempSource-->convertTo-->firstPrint-->proccess-->starting-->counter0-->|true|counter0True-->temp0-->counterInc0-->counter0
        %% sambungna Start dan counter 1
        counter0-->|false|counter1-->|true|counter1True-->temp1-->counterInc1-->counter1
        %% sambungan celcius
        %% ctc
        counter1-->|false|celcius-->|true|ctc-->|true|ctcPrint-->processExit-->Stop
        %%ctf
        ctc-->|false|ctf-->|true|ctfTrue-->ctfPrint-->processExit
        %%ctr
        ctf-->|false|ctr-->|true|ctrTrue-->ctrPrint-->processExit
        %% ctk
        ctr-->|false|ctk-->|true|ctkTrue-->ctkPrint-->processExit
        ctk-->|false|processExit

        %% sambungan fahrenheit
        %% ftc
        celcius-->|false|fahrenheit-->ftc-->|true|ftcTrue-->ftcPrint-->processExit
        %% ftf
        ftc-->|false|ftf-->|true|ftfPrint-->processExit
        %% ftr
        ftf-->|false|ftr-->|true|ftrTrue-->ftrPrint-->processExit
        %% ftk
        ftr-->|false|ftk-->|true|ftkTrue-->ftkPrint-->processExit
        ftk-->|false|processExit

        %% sambingan remure
        %% rtc
        fahrenheit-->|false|reamure-->|true|rtc-->|true|rtcTrue-->rtcPrint-->processExit
        %% rtf
        rtc-->|false|rtf-->|true|rtfTrue-->rtfPrint-->processExit
        %% rtr
        rtf-->|false|rtr-->|true|rtrPrint-->processExit
        %% rtk
        rtr-->|false|rtk-->|true|rtkTrue-->rtkPrint-->processExit
        rtk-->|false|processExit

        %% sambungan kelvin
        %% ktc
        reamure-->|false|kelvin


        Stop@{ shape: dbl-circ, label: "Stop"}

```
