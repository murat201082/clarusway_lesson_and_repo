function islem(){
    let deger = document.getElementsByName("ilgialanları")
    for (let i = 0; i < deger.length; i++) {
        deger[i].checked = true;
        
    }
}
function kislem(){
    let deger = document.getElementsByName("ilgialanları")
    for (let i = 0; i < deger.length; i++) {
        deger[i].checked = false;
        
    }
}
