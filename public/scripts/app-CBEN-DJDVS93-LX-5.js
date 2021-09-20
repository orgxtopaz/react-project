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

//----------------------------------------
// var template =(
//     <div> 

//         <h1>Name:{obj.name}</h1>
//         <h1>Age:{obj.age}</h1>
//         <h1>Location:{checkLocation(obj.location)}</h1>
//         <input type="text" id="myInput"></input>


//     </div>);
// --------------------------------------------

// let count =0;

// const addOne = () =>{
//     count+=1;
//    renderAddTemplate();
//  }
//  const minusOne =() =>{
//      count--;
//      renderAddTemplate();
//  }

//  const reset = ()=>{
//      count=0;
//      renderAddTemplate();
//  }

//-----------FORM SUBMIT

var storeDatas = [""];

var submitForm = function submitForm(e) {
    e.preventDefault();
    var datas = e.target.elements.inputs.value;

    console.log(e.target.elements.inputs.value);

    if (submitForm) {

        storeDatas.push(datas);
        e.target.elements.inputs.value = "";
    }
};

var render = function render() {};
var formRender = React.createElement(
    "div",
    null,
    React.createElement(
        "form",
        { onSubmit: submitForm },
        React.createElement("input", { type: "text", placeholder: "input here", name: "inputs" }),
        React.createElement(
            "button",
            { type: "submit" },
            "click"
        )
    )
);

var appRoot = document.getElementById('app'); //----------------------------ORIGIN---------------------


ReactDOM.render(formRender, appRoot);
