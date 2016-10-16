open System
open System.Linq
open System.Collections.Generic



let GOMSdict = dict[
                "K",0.2;
                "P",1.1; 
                "H",0.4; 
                "M",1.35;
                ]

let dropdownSequence = "EIBEBEEBI"

let DROPDOWNdict = dict[
                    "E","PKPK";
                    "I","PKHKKH"; 
                    "B","PK";
                    ]

let tableSequence = "BIBBBBBBIB"

let TABLEdict = dict[
                    "I","PKHKKH"; 
                    "B","PK";
                    ]

let autocompleteSequence = "PKHKKHPKPKHKKHPKPKHKKKHPKPKHPKKKKKHPKPKHKKKKKHPKPKPKHKKHPK"


let stringToList (s:string) = s.ToList() |> Seq.map Char.ToString |> Seq.toList 

let ruleZero s = (String.concat "" s).Replace("PK", "MPK") |> stringToList
let ruleOne s = (String.concat "" s).Replace("PMK", "PK") |> stringToList

let rec customToGOMS (dict:IDictionary<string, string>) acc x =  match x with
        | [] -> acc
        | h::t -> customToGOMS dict ((dict.Item h) :: acc) t

let calculateGOMS = List.map (function(c) -> (c, GOMSdict.Item c))

let showGOMS = 
    List.map (function(s, (v:float)) -> String.concat ":" [s; v.ToString()]) 
    >> String.concat "\n"

let sumGOMS = 
    List.map (function((s:string), (v:float)) -> v) 
    >> List.reduce (+)

[<EntryPoint>]
let main argv = 
    autocompleteSequence
    |> stringToList 
    //|> customToGOMS DROPDOWNdict []
    |> ruleZero
    |> ruleOne    
    |> calculateGOMS
    |> function(g) -> printf "%A\n\n" (sumGOMS g); printf "%A\n\n" (showGOMS g)
    Console.ReadLine() |> ignore
    0
