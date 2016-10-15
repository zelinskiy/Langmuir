open System
open System.Linq

let GOMSdict = dict[
                "K",0.2;
                "P",1.1; 
                "H",0.4; 
                "M",1.35;
                ]

let DROPDOWNdict = dict[
                    "E","PKPK";
                    "I","PKKK"; 
                    "B","PK";
                    ]
let stringToList (s:string) = s.ToList() |> Seq.map Char.ToString |> Seq.toList

let ruleZero s = (String.concat "" s).Replace("PK", "MPK") |> stringToList
let ruleOne s = (String.concat "" s).Replace("PMK", "PK") |> stringToList

let rec _dropdownToGOMS acc x =  match x with
        | [] -> acc
        | h::t -> _dropdownToGOMS ((DROPDOWNdict.Item h) :: acc) t

let dropdownToGOMS = stringToList >> _dropdownToGOMS []

let calculateGOMS = List.map (function(c) -> (c, GOMSdict.Item c))

let showGOMS = List.map (function(s, (v:float)) -> String.concat ":" [s; v.ToString()]) >> String.concat "\n"

let sumGOMS = List.map (function((s:string), (v:float)) -> v) >> List.reduce (+)

[<EntryPoint>]
let main argv = 
    "EIBEBEEBI"
    |> dropdownToGOMS
    |> ruleZero
    |> ruleOne    
    |> calculateGOMS
    |> function(g) -> (showGOMS g , sumGOMS g)
    |> function(a, b) -> printf "%A\n\n" b; (a,b)
    |> function(a, b) -> printf "%A" a; (a,b)
    Console.ReadLine() |> ignore
    0
