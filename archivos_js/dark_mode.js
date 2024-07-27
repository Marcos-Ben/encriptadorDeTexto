/*header*/
let toggleButton = document.getElementById("toggle-button");
let bodyHtml = document.querySelector("body");
let img1G = document.getElementById("linkedin");
let img2L = document.getElementById("github");
let item1 = document.getElementById("redes");
let item2 = document.getElementById("redes2");
/* main content */
let txtcolorArea = document.getElementById("textArea_encriptar");
let footerBorder = document.getElementById("footer_contain");
let main2Background = document.getElementsByClassName("main_2");
let valortxtArea2Clr= document.getElementById("textoADesencriptar");
/*toogle*/
let change = true;

    function darkMode(){
        if(change){
            bodyHtml.style.backgroundColor="black";
            bodyHtml.style.color="white";
            toggleButton.style.filter="invert(0)";
            toggleButton.style.transform="rotate(180deg)";
            item1.style.color="white";
            item2.style.color="white";
            txtcolorArea.style.color="white";
            valortxtArea2Clr.style.color="white";
            footerBorder.style.backgroundColor="";
    
        }else{
            bodyHtml.style.backgroundColor="white";
            bodyHtml.style.color="black";
            toggleButton.style.filter="invert(1)";
            toggleButton.style.transform="rotate(0deg)"; 
            item1.style.color="black";
            item2.style.color="black";
            txtcolorArea.style.color="black";
            valortxtArea2Clr.style.color="black";
            footerBorder.style.backgroundColor="white";
        }
        change = !change;
    }
