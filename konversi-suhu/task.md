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
        %%fahrenheit@{ shape: diamond, label: "tempSource === ''fahrenheit''"}
        %%tempSource == fahrenheit  
        %%reamure@{ shape: diamond, label: "tempSource === ''reamure''"}
        %%tempSource == kelvin  
        %%kelvin@{ shape: diamond, label: "tempSource === ''kelvin''"}

        %% EXIT BEFORE STOP
        processExit@{ shape: rect, label: "process.exit()"}

        %% sambungna Start dan counter 0
        Start-->counter-->temperature-->tempSource-->convertTo-->firstPrint-->proccess-->starting-->counter0-->|true|counter0True-->temp0-->counterInc0-->counter0
        %% sambungna Start dan counter 1
        counter0-->|false|counter1-->|true|counter1True-->temp1-->counterInc1-->counter1
        %% sambungan celcius
        %% ctc
        counter1-->|false|celcius-->ctc-->|true|ctcPrint-->processExit-->Stop
        %%ctf
        ctc-->|false|ctf-->|true|ctfTrue-->ctfPrint-->processExit
        %%ctr
        ctf-->|false|ctr-->|true|ctrTrue-->ctrPrint-->processExit
        %% ctk
        ctr-->|false|ctk-->|true|ctkTrue-->ctkPrint-->processExit
        ctk-->|false|processExit

        %% Exit
        %%counter1-->|false|processExit-->Stop

        Stop@{ shape: dbl-circ, label: "Stop"}

```
