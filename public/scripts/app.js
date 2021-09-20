"use strict";

console.log("I am running");

var storeDatas = ["1"];

var submitForm = function submitForm(e) {
    e.preventDefault();
    var datas = e.target.elements.inputs.value;

    if (submitForm) {
        storeDatas.push(datas);
        e.target.elements.inputs.value = "";
        console.log(storeDatas);
        render();
    }
};
var removeAll = function removeAll() {
    storeDatas = [""];
};

var appRoot = document.getElementById('app'); //----------------------------ORIGIN---------------------


var render = function render() {

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
            ),
            React.createElement(
                "button",
                { type: "submit", onClick: removeAll },
                "click"
            ),
            storeDatas.map(function (values) {
                return React.createElement(
                    "p",
                    { key: values },
                    "Values:",
                    values,
                    " "
                );
            })
        )
    );
    ReactDOM.render(formRender, appRoot);
};

render();
