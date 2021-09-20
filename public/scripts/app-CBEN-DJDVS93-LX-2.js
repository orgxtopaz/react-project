"use strict";

console.log("I am running");

//JSX -JS XML

var obj = {

    "name": "migz",
    "age": 2,
    "location": "naa"
};

function checkLocation(location) {
    if (location) {}
}
var heh = "hehe";

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Name:",
        heh
    ),
    React.createElement(
        "h1",
        null,
        "Age:",
        sampleobj.age
    ),
    React.createElement(
        "h1",
        null,
        "Location:",
        checkLocation.location
    ),
    React.createElement("input", { type: "text", id: "myInput" })
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
