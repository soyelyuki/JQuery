$(document).ready(function(){

    //Mover elemento por la pagina
    $(".elemento").draggable();

    //redimencionar

    $(".elemento").resizable();

    //seleccionar elementos
    //$(".lista-seleccionable").selectable();

    //seleccionar y ordenar 
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("ha cambiado la lista");
        }
    });    
    //drag n drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("has insertado algo en el area");
        }
    });
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("explode");
        //efectos togle, explode, drop, fold,y monton deefectos
        
    }) 
    //tooltip
    $(document).tooltip();

    //Dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    })
    
    //datepicker
    $("#calendario").datepicker();

    //tabs
    $("#pestanas").tabs();

});