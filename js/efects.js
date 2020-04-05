$(document).ready(function() {
    cadastro.onsubmit = function() {
        const nome = document.getElementById('nome').value;
        const regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
        const email = document.getElementById('email').value;
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (nome.length < 1) {
            $('#camp-obrigatorio').css('display', 'block');

        } else if (nome != regexNome) {
            $('#camp-tipo').css('display', 'block');
        } else if (email.length == 0) {
            $('#camp-obrigatorio').css('display', 'block');
        } else if (email != regexEmail) {
            $('#camp-tipo').css('display', 'block');
        }

    }
});