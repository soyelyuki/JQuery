$(document).ready(function(){
    console.log("hola")
    //load

   // $("#datos").load("https://reqres.in/")

    //get y post

    $.get("https://reqres.in/api/users",{page: 2},function(response){
        response.data.forEach((element,index) => {
            $("#datos").append("<p>"+ element.first_name+" "+ element.last_name+"<p>");
        });
    });
});