
//pegar todos os cursos da ufam
$.ajax({
    url:"/curso/all",
    method : "get",
    dataType: "json",
    success : function(e){
        //array de cursos
        console.log(e)
        $(e).each((i,v)=>{
            $("#curso").append(
                "<option value='"+ v.id +"' >"+ v.sigla + " - " + v.nome +"</option>"
            )
        })
    },
    error : function(e){
        console.log(e)
    }
})


$('#formzao').submit(function() {
    if( $('#password').val() != $('#pass').val()){
        alert("As senhas não são iguais ! favor corrigir.")
        $('#password').focus()
        return false;
    }
    return true; 
});
