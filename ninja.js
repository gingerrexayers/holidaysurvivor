// ninja

function showPageByClass(className){
    document.getElementsByClassName(className).removeAttribute("hidden");
}
function showPageById(id){
    document.getElementById(id).removeAttribute("hidden");
}

function hidePageByclass(className){
    document.getElementsByClassName(className).setAttribute("hidden","");
}
function hidePageById(id){
    document.getElementById(id).setAttribute("hidden","");
}