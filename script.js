function verificar() {
    var data= new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novemente!')
    } else {
       var fsex= document.getElementsByName('radsex')
       var idade= ano - Number(fano.value)
       var genero= ''
       var img= document.createElement('img')
       img.setAttribute('id', 'foto') //img com ID Foto
       if (fsex[0].checked) {
           genero= '<strong>HOMEM</strong>'
           if (idade >= 0 && idade < 10) {
               //criança
               img.setAttribute('src', 'Criançamasculino.png')
           } else if (idade < 21) {
               //Jovem
               img.setAttribute('src', 'Jovemmasculino.png')
           } else if (idade < 50) {
               //Adulto
               img.setAttribute('src', 'Adultomasculino.png')
           } else {
               //idoso
               img.setAttribute('src', 'Idosomasculino.png')
           }
       } else if (fsex[1].checked) {
           genero= '<strong>MULHER</strong>'
           if (idade >= 0 && idade < 10) {
               //criança
               img.setAttribute('src', 'Criançafeminino.png')
           } else if (idade < 21) {
               //Jovem
               img.setAttribute('src', 'Jovemfeminino.png')
           } else if (idade < 50) {
               //Adulto
               img.setAttribute('src', 'Adultofeminino.png')
           } else {
               //idoso
               img.setAttribute('src', 'Idosofeminino.png')
           }
       }
   
       res.style.textAlign= 'center'
       res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
   }
   
   