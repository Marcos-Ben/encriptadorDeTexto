
let valorTxtArea = document.getElementById("textArea_encriptar");
let textArea2= document.getElementById("textoADesencriptar");
let btnEncriptar = document.getElementById("btn1");
let btnDesencriptar = document.getElementById("btn2");
let btnCopiar = document.getElementById("textCopy");
let parrafoMins = document.getElementById("p_mins");
let imgSection2 = document.getElementById("waves_footer");

function encriptar() {
    let texto = valorTxtArea.value;
    if (/^[a-z\s]+$/.test(texto)) {
        let textoEncriptado = texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat").toLowerCase();
        btnCopiar.style.display="flex";
        textArea2.value = textoEncriptado;
        parrafoMins.innerHTML = `${String.fromCharCode(9830)} texto encriptado`;
        parrafoMins.style.color="";
    }else{
        btnCopiar.style.display="";
        limpiar();
        parrafoMins.style.color="red";
        parrafoMins.innerHTML = `${String.fromCharCode(9830)} Solo se permiten letras minusculas y espacios`;
    }
    
  }
function desencriptar(){
    let texto = valorTxtArea.value;
    if (/^[a-z\s]+$/.test(texto)) {
        let textoDesencriptado = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u").toLowerCase();
        btnCopiar.style.display="flex";
        textArea2.value = textoDesencriptado;
        parrafoMins.innerHTML = `${String.fromCharCode(9830)} texto desencriptado`;
        parrafoMins.style.color="";
    } else {
        btnCopiar.style.display="";
        limpiar();
        parrafoMins.style.color="red";
        parrafoMins.innerHTML = `${String.fromCharCode(9830)} Solo se permiten letras minusculas y espacios`;
    }
}
function limpiar (){
    valorTxtArea.value = "";
    textArea2.value = "";
}
function copiarTextArea(){
    let caracter = '\u263B';
    let textoCopiar = textArea2.value;
    navigator.clipboard.writeText(textoCopiar);
    alert(`¡El texto fue copiado ! ` + caracter);
    limpiar();
}