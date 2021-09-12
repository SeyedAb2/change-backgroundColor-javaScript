///With colorInput
let changeColorFunction = function() {
    let bodyElemet = document.querySelector("body");
    let colorInput = document.querySelector("#colorInput").value;
    bodyElemet.style.backgroundColor = colorInput;
}
document.querySelector("#colorInput")
    .addEventListener("focusout", changeColorFunction);

///With textInput
let changeTextColorFunction = function() {
    let bodyElemet = document.querySelector("body");
    let colorText = document.querySelector("#colorText").value;
    if (/^#[0-9A-F]{6}$/i.test(colorText) || /^#[A-F]{6}$/i.test(colorText) ||
        /^#[A-F]{3}$/i.test(colorText)) {
        bodyElemet.style.backgroundColor = colorText;
    } else if (/^[0-9A-F]{6}$/i.test(colorText) || /^[A-F]{6}$/i.test(colorText) ||
        /^[0-9A-F]{3}$/i.test(colorText)) {
        colorText = "#" + colorText;
        bodyElemet.style.backgroundColor = colorText;
    } else if (colorText === '') {
        alert("Please Enter A color Hex Number!")
    } else {
        alert("Wrong value \n\n Please type like this structure : \n\n #ff123d \n #ffc \n fb1d4d \n ffb")
    }
}
document.querySelector("#changeColorBtn")
    .addEventListener("click", changeTextColorFunction);