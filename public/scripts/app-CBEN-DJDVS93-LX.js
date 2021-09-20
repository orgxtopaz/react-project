"use strict";

console.log("I am running");

//JSX -JS XML

var obj = {

    "name": "migz",
    "age": 2,
    "location": "naa"
};

function checkLocation() {}
var heh = "hehe";

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        heh
    ),
    React.createElement(
        "h1",
        null,
        sampleobj.age
    ),
    React.createElement("input", { type: "text", id: "myInput" })
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
