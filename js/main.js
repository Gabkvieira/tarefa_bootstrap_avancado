$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-produto button').click(function(){
        const destino = $('#contato');
        const nomeProduto = $(this).parent().find('h4').text();

        $('#produto-interesse').val(nomeProduto);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})