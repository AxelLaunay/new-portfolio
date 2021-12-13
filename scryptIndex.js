var container = document.getElementById("container");
var oui = document.getElementById("oui");
var non = document.getElementById("non");
var body = document.getElementById("body")
var acceuil  = document.getElementById("acceuil")

oui.addEventListener("click" , c_none);
non.addEventListener("click" , back);

function c_none() {
    container.setAttribute("style" , "display:none");
    body.setAttribute("style" , ("background-image:none"))
    acceuil.setAttribute("style" , ("display:block"))
};

function back() {
    window.history.back();
}
