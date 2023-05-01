const inpText = document.getElementById("inpText");
const inpColor = document.getElementById("inpColor");
const list = document.getElementById("list")

let arr=[];

function textAndColor() {
    if (inpText.value.trim() != '') {
        arr.push(inpText.value.trim());
        inpText.value = "";
        colorList();
        fillList();
    }
    else{
        alert("Nese daxil et");
    }
}

let colors=[];
function colorList() {
    colors.push(inpColor.value);
    inpColor.value = "#rrggbb";

}

function fillList() {
    list.innerHTML = arr.reduce((total, val)=> total + `<li class="list-group-item" style="color:${colors.reduce((total, val)=> val)}">${val}</li>`,'');
}


