$(document).ready(function() {

    /*Animar página*/
    $(window).on('scroll', function() {
        var scrollDist = $(this).scrollTop(); /*Pegar a altura do scroll da página, mais o cálculo da sua proximidade da sua proximidade*/
        $('[data-anime]').each(function() {
            if (scrollDist > $(this).scrollTop()) {
                $(this).addClass('anime');
            } else {
                $(this).removeClass('anime');
            }
        });

    });

    /*Scroll suave ao clicar nos links do menu*/

    $('nav a').click(function(e) {
        /* Para que ao clicar em uma opção do menu, não apareça o nome 
         * da âncora associada a section selecionada */
    });


    /*Validar formulário*/






});