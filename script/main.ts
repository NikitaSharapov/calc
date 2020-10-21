const insertNum = (num: string | number) => {
    let math_field = < HTMLInputElement > document.getElementById('math_field');
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
}

const insertSym = (num: string | number) => {
    let math_field = < HTMLInputElement > document.getElementById('math_field');
    let lastSymdol = math_field.value.slice(-1);
    
    if (math_field.value === "Ошибка!") {
        math_field.value = "";
    }
    if (math_field.value === "undefined") {
        math_field.value = "";
    }
    if(lastSymdol===num){
        math_field.value=math_field.value;
    }
    else{
        math_field.value = math_field.value + num;
    }
   
}

const clean = () => {
    let math_field = < HTMLInputElement > document.getElementById('math_field');
    math_field.value = "0";
}

const back = () => {
    let math_field = < HTMLInputElement > document.getElementById('math_field');
    let exp = math_field.value;
    math_field.value = exp.substring(0, exp.length - 1)
}

const equal = () => {
    let math_field = < HTMLInputElement > document.getElementById('math_field');
    let exp = math_field.value;
    try {
        if (exp) {
            math_field.value = eval(exp);
        }
    } catch (err) {
        math_field.value = "Ошибка!"
    }

}