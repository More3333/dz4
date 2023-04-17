$(document).keydown(f1)

function f1(){
    if ($('#dino').classList !=='jump'){
        $('#dino').addClass('jump')
}
    setTimeout(
        function (){
            $('#dino').removeClass('jump')
           } ,1000)
}
 function f2(){
    let kaktusleft = $('#kaktus').css('left')
     let dinotop = $('#dino').css('top')
     console.log(kaktusleft+'--'+dinotop)
     dinotop = Number( dinotop.slice(0,-2))
     kaktusleft = Number( kaktusleft.slice(0,-2))
     console.log(dinotop)
     if (0<kaktusleft && kaktusleft<50 && dinotop > 300){
         alert('попался на кактус')
         location.reload()
     }
 }
 setInterval(f3,10)
function f3(){
    let ptizaleft = $('#ptiza').css('left')
     let dinotop = $('#dino').css('top')
     console.log(ptizaleft+'--'+dinotop)
     dinotop = Number( dinotop.slice(0,-2))
     ptizaleft = Number( ptizaleft.slice(0,-2))
     console.log(dinotop)
     if (0<ptizaleft && ptizaleft<50 && dinotop > 300){
         alert('попался на птице')
         location.reload()
     }
 }
 setInterval(f2,10)

