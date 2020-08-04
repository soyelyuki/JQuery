$(document).ready(function(){
    console.log("Usando Jquery correctamente")
    //load

   // $("#datos").load("https://reqres.in/")

    //get y post

    $.get("https://reqres.in/api/users",{page: 2},function(response){
        response.data.forEach((element,index) => {
            $("#datos").append("<p>"+ element.first_name+" "+ element.last_name+"<p>");
        });
    });
    
    $("#formulario").submit(function(e){
        e.preventDefault(); //evita que se cambie la pagina
        var usuario = {
            name:$('input[name="name"]').val(),
            web:$('input[web="web"]').val(),
        };
        /*
        $.post($(this).attr("action"),usuario,function(response){
            console.log(response);
        }).done(function(){
            alert("Usuarion añadido exitosamente");
        */
        $.ajax({
            type:'POST',
            url:$(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("enviando usuario...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("a ocurrido un error");
            },
            timeout: 2000
        });
        
    });

        return false;
    });
