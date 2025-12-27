# Flowchart Task 4

## Konversi Suhu

```mermaid
    flowchart TB
        Start@{ shape: circ, label: "Start"}

        firstPrint@{ shape: rect, label: "Output: ''Masukan nilai : ''"}
        data@{ shape: rect, label: "process.stdin.on('data', (data)...)"}
        temp@{ shape: lean-r, label: "input: Number(data.toString().trim())"}
        tempSource@{ shape: rect, label: "tempSource = Farenheit"}
        convertTo@{ shape: rect, label:  "convertTo = Celcius"}

        %% CELCIUS START
        celcius@{ shape: diamond, label:  "tempSource == Celcius"}
        celciusFalse@{ shape: lean-r, label:  "output : ''error''"}
        celciusTrue@{ shape: rect, label:  "temp = temp * (9/5) + 32"}
        



        %% SAMBUNGAN START
        celcius --> |false| celciusFalse
        celcius --> |true| celciusTrue
        %% SAMBUNGAN END

        %% CELCIUS END
        Start --> temp --> tempSource --> ConvertTo


        Stop@{ shape: dbl-circ, label: "Stop"}

```
