$(document).ready(function () {

    $('ul').on('click', 'li', function () {
        $(this).toggleClass('selecionado');
    });


    $('form').on('submit', function (e) {
        e.preventDefault();
        const nomeDaTarefa = $('#Nome-da-tarefa').val();
        const novoItem = $('<li id="lili"></li>');
        novoItem.text(nomeDaTarefa);
        $('ul').append(novoItem);
        $('#Nome-da-tarefa').val('');

        $('#apagar-todas').on('click', function () {
            $('ul').empty();
        });


    });





});

