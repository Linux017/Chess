window.onload = function(){   
    $.ajax({
        url : "partida/all",
        type : "get",
        dataType : "json",
        success : function (r){
            console.log(r)
        },
        error : function(e){
            console.log(e)
        }
    })
}