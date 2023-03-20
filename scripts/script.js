function welcome (name, time = "day")
{
    console.log("Hello, good " + time + " " + name )
    console.log("")
};

welcome("Riona", )

let greet = function(name1, time = "day"){
    console.log("Hello, good " + time + " " +  name1 )
};

greet("Angela")


let hello = (name2, time = "day") => {
    console.log("Hello, good " + time + " " + name2)
};

hello("Julianna")

greet("Neda", "night", "sandwich");