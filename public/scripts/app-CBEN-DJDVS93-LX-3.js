"use strict";

console.log("I am running");

//JSX -JS XML

//FUNCTION IF LOCATION EXIST OR NOT

// var obj={

//     "name":"migz",
//     "age":2,
//     "location":"Naay Location"
// }

// function checkLocation(location){
//     if(location){
//         return location;
//     }else{
//         return "Walay Location";
//     }

// }


// var template =(
//     <div> 

//         <h1>Name:{obj.name}</h1>
//         <h1>Age:{obj.age}</h1>
//         <h1>Location:{checkLocation(obj.location)}</h1>
//         <input type="text" id="myInput"></input>


//     </div>);


var obj = {

    "name": "migz",
    "age": 2,
    "location": "Naay Location"
};

function checkLocation(location) {
    if (location) {
        return location;
    } else {
        return "Walay Location";
    }
}

//----------------------------------------
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Name:",
        obj.name
    ),
    React.createElement(
        "h1",
        null,
        "Age:",
        obj.age
    ),
    React.createElement(
        "h1",
        null,
        "Location:",
        checkLocation(obj.location)
    ),
    React.createElement("input", { type: "text", id: "myInput" })
);
// --------------------------------------------

var count = 0;

var addOne = function addOne() {
    count += 1;
    console.log(count);
};
var minusOne = function minusOne() {
    count--;
};

var reset = function reset() {
    count;
};

var addTemplate = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "count:",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    )
);

//----------------------------
var appRoot = document.getElementById('app');

ReactDOM.render(addTemplate, appRoot);
