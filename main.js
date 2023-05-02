$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000');
    $('#Cpf').mask('000.000.000-00');
    $('#Cep').mask('00.000-000');

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
            Cpf: {
                required: true
            },
            Endereço: {
                required: true
            },
            Cep: {
                required: true
            }
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos `)
            }
        }
    });
});
