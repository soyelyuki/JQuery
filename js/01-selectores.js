$(document).ready(function(){
    // Selector de ID     
    $("#rojo").css("background","red")
                        .css("color","white");
    $("#amarillo").css("background","yellow")
                    .css("color","green");
    $("#verde").css("background","green")
                .css("color","white");
                
    //selectores de clase
    var miclase = $('.zebra').css("padding","5px");     
    
    $('.Sinborde').click(function(){
        console.log("click");
        $(this).addClass('zebra');
    });

    //Selectores de etiqueta

    var Parrafos =$('p');
    Parrafos.click(function(){
        var that =$(this);
        if($(this).hasClass('zebra')){
            $(this).addClass('grande');
        }else{
            that.removeClass('grande');
        }
        
    });
    //Selectores de atributo
    $('[title="Google"]').css('background','#ccc');
    $('[title="facebook"]').css('background','blue');

    //Otros 
    //$('p,a').addClass('margen-superior');

    var busqueda =$("#caja").find('resaltado');
    console.log(busqueda);
});
