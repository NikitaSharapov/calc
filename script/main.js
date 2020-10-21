"use strict";
var insertNum = function (num) {
    var math_field = document.getElementById('math_field');
    if (math_field.value === "Ошибка!") {
        math_field.value = "";
    }
    if (math_field.value === "undefined") {
        math_field.value = "";
    }
    if (math_field.value === "0") {
        math_field.value = "";
    }
    math_field.value = math_field.value + num;
};
var insertSym = function (num) {
    var math_field = document.getElementById('math_field');
    var lastSymdol = math_field.value.slice(-1);
    if (math_field.value === "Ошибка!") {
        math_field.value = "";
    }
    if (math_field.value === "undefined") {
        math_field.value = "";
    }
    if (lastSymdol === num) {
        math_field.value = math_field.value;
    }
    else {
        math_field.value = math_field.value + num;
    }
};
var clean = function () {
    var math_field = document.getElementById('math_field');
    math_field.value = "0";
};
var back = function () {
    var math_field = document.getElementById('math_field');
    var exp = math_field.value;
    math_field.value = exp.substring(0, exp.length - 1);
};
var equal = function () {
    var math_field = document.getElementById('math_field');
    var exp = math_field.value;
    try {
        if (exp) {
            math_field.value = eval(exp);
        }
    }
    catch (err) {
        math_field.value = "Ошибка!";
    }
};
