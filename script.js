var inputText = document.querySelector("#input");
var outputText = document.querySelector("#output");

function encrypt() {
    var text = inputText.value;

    var resultEncrypt = text.replace(/a/g, "lol").replace(/e/g, "ik").replace(/i/g, "btw").replace(/o/g, "tbh").replace(/u/g, "smth")
    .replace(/r/g, "jk").replace(/s/g, "asap").replace(/n/g, "np").replace(/t/g, "gtg").replace(/m/g, "ty");

    document.getElementById('output').innerHTML = '<textarea readonly id="outputArea" class="response__text">' + resultEncrypt +
    '</textarea>' + '<input type="button" id="copyb" value="Copiar" class="copy-btn" onclick="copyText()">';
}

function decrypt() {
    var text = inputText.value;

    var resultDecrypt = text.replace(/ty/g, "m").replace(/gtg/g, "t").replace(/np/g, "n").replace(/asap/g, "s").replace(/jk/g, "r")
    .replace(/smth/g, "u").replace(/tbh/g, "o").replace(/btw/g, "i").replace(/ik/g, "e").replace(/lol/g, "a");

    document.getElementById('output').innerHTML = '<textarea readonly id="outputArea" class="response__text">' + resultDecrypt +
    '</textarea>' + '<input type="button" id="copyb" value="Copiar" class="copy-btn" onclick="copyText()">';
}

function copyText() {
    var textCopied = document.getElementById('outputArea').value;

    navigator.clipboard.writeText(textCopied);
        alert('Texto copiado com sucesso!');

}