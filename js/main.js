

    $("section").each(function(){
        /*each examina uno a uno los objetos seleccionados */
        // console.log("Prueba");
        var tituloSeccion=$(this).find("h2").text();
        console.log(tituloSeccion);
        //$(this) hace referencia al objeto que en estos momentos se esta examinando
        //Con find se busca un objeto dentro del obejeto seleccionado
        //con text() se extrae el contenido texto de un objeto 

            var idSeccion = $(this).attr("id")
            console.log("---" + idSeccion)


        $("#menu-principal").append('<li class="nav-item">'
    +'<a class="nav-link  text-dark" aria-current="page" href="#'+idSeccion+'">'+tituloSeccion+'</a>'
    +'</li>');
    })




    $("#galeriadinamica figure").append("<figcaption>");

    $("#galeriadinamica figure").mouseenter(function(){
        $(this).find("figcaption").slideDown().slideDown("fast");
    })

    $("#galeriadinamica figure").mouseleave(function(){
        $(this).find("figcaption").slideUp().slideUp("fast");
    })




    $("#galeriadinamica figure").each(function(){
        var nombre  =   $(this).find("img").attr("title");
        console.log(nombre);
        $(this).find("figcaption").html("<div><h6>" +   nombre  +   "</h6></div>");       
        $(this).find("figcaption div").prepend("<i class='bi bi-zoom-in'></i>")
        var rutaImagen=$(this).find("img").attr("src");

     

        $(this).find("figcaption div i").click(function(){
            $("body").append("<div id='fondo-transparente'>");
            $("#fondo-transparente").append("<img src='" + rutaImagen + "'>")
            $("#fondo-transparente").append("<h3>" + nombre + "</h3");
            $("#fondo-transparente").click(function(){
                $(this).remove();
            })
        })

    })

   



//Fetch
$("#appleColors li").click(function(){
    console.log($(this).attr("color-applewatch"));
    var nombrearchivo= $(this).attr("color-applewatch");


    $("#appleColors li").removeClass("active");
    $(this).addClass("active");

    fetch("AppleWatchColors/" + nombrearchivo + ".html")
            .then(function(response){
                return response.text();
            })
            .then(function(data){
                console.log(data);
                $("#preview-applewatch").html(data)
            })

    })






    //Fetch de las paginas main-content
    $("#menu-item-page1").click(function(){
        fetch("Page1.html")
        .then(function(response){
            return response.text()
        })
        .then(function(data){
            $("#main-content").html(data);
        })

    })




    $("#menu-item-page2").click(function(){
        fetch("Page2.html")
        .then(function(response){
            return response.text()
        })
        .then(function(data){
            $("#main-content").html(data);
        })

    })



    $("#menu-item-page3").click(function(){
        fetch("Page3.html")
        .then(function(response){
            return response.text()
        })
        .then(function(data){
            $("#main-content").html(data);
        })

    })
