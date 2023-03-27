// function welcome (name, time = "day")
// {
//     console.log("Hello, good " + time + " " + name )
//     console.log("")
// };

// welcome("Riona", )

// let greet = function(name1, time = "day"){
//     console.log("Hello, good " + time + " " +  name1 )
// };

// greet("Angela")


// let hello = (name2, time = "day") => {
//     console.log("Hello, good " + time + " " + name2)
// };

// hello("Julianna")

// greet("Neda", "night", "sandwich");




// const radiusPara = document.querySelector("#radius");
// console.log(radiusPara)
// const resultPara = document.querySelectorAll("#result");
// console.log(resultPara)

// function for area
// function circleAreaCalculation(radius)
// {

//    radius = prompt("How long is the radius? ")
// //    if the input is not a number, display alert
//    if(isNaN(radius)){
//     // alert("This is not a string")
//     radiusPara.textContent = radius
// }
// else{
//    result = Math.PI * (radius*radius)
//    return result;
// }
//  if (result !== undefined){
//     resultPara,textContent = "This is not a number"
//  }  
// // if result !== undefined{

// }
// //    alert("The area of your radius " + radius + " is " + result)}


// circleAreaCalculation()

const ulList = document.querySelector(".shopping");
function populateList(shoppingListArray){
    
    //for each item in the shoppingListArray, add a list item with its value to the ul
    for (let item of shoppingListArray)
    {
        console.log(item)
        // make a new li
        const newLi = document.createElement("li");
        // update the li's text ot item
        // newLi.textContent = item;
        const newContent = document.createTextNode(item)
        newLi.appendChild(newContent)
        //append li to the ul
        ulList.appendChild(newLi);
    }
}

let myShoppingList = ["cheese","bread","green pepper"];
populateList(myShoppingList);


function squareListMaker(){
    ulList.classList.add("squareList");
    ulList.classList.remove("circleList");
}
squareListMaker()

function updateImage(){
    const image = document.querySelector("#shoppingCart");
    image.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/263/263142.png")
image.setAttribute("width", "50")
image.setAttribute("height", "50")
image.setAttribute("alt", "shopping cart")
}

updateImage()

function makeListGreen(){
    // 1. find li -> return array-like structure
    const listItems = document.querySelectorAll(".shopping > li");
    // 2. loop the array-like structure
    for (let item of listItems){
        let text = item.textContent;
        if (text.includes("green")){
            item.classList.add("greenText");
        }
    }
}
makeListGreen()
    // 3. find the textContent of each item of the array
    // 4. use .includes() to check if the text contains green

