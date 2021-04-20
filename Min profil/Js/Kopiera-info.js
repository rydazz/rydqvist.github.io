function kopieraEmail(){


    var r = document.createRange();
    r.selectNode(document.getElementById("kopEmail"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Email kopierad");


}
function kopieraTel(){

    var r = document.createRange();
    r.selectNode(document.getElementById("kopTel"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Telefonnummer kopierad");
}