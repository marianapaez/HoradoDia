function carregar () {
    
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML=`Agora são ${hora} horas.`
if (hora >= 0  && hora < 12) {
    // BOM DIA!
    img.src = 'manha.jpg'
    document.body.style.background = '#0089ff6b'
    } else if (hora >= 12 && hora < 18){
    // BOA TARDE!
    img.src = 'tarde.jpg'
    document.body.style.background = '#ffbb94'
}
else {
    // BOA NOITE!
    img.src = 'noite.jpg'
    document.body.style.background = '#11012b'
}

}
