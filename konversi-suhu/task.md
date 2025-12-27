# Flowchart Task 4

## Konversi Suhu

```mermaid
    flowchart TB
        Start@{ shape: circ, label: "Start"}

        counter@{ shape: lean-r, label: "input: counter"}
        temp@{ shape: lean-r, label: "input: counter"}
        tempSource@{ shape: lean-r, label: "input: tempSource"}
        convertTo@{ shape: lean-r, label: "input: convertTo"}
        firstPrint@{ shape: lean-r, label: "Output: ''Masukan nilai : ''"}
        
        Start-->counter-->temp-->tempSource-->convertTo-->firstPrint

        Stop@{ shape: dbl-circ, label: "Stop"}

```
