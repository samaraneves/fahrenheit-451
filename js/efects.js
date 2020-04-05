$(document).ready(function() {
    cadastro.onsubmit = function() {
        const nome = document.getElementById('nome').value;
        const regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
        const email = document.getElementById('email').value;
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (nome.length == 0) {
            $('.camp-obrigatorio').css('display', 'block');

        } else if (nome != regexNome) {
            $('.camp-tipo').css('display', 'block');
        } else if (email.length == 0) {
            $('.camp-obrigatorio').css('display', 'block');
        } else if (regexEmail.test(email) == false) {
            $('.camp-tipo-email').css('display', 'block');
        } else {
            $('button.btn.btn-primary').text('Enviando...');
        }

    }
});