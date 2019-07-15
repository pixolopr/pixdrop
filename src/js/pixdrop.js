$.fn.pixdropdown = function (optionsObj) {
    $('head').append('<style type="text/css">.pix_active {background-color: red !important;}.pix_active a{background-color: transparent !important; color: #fff !important}</style>');

    $('.pix_drpul').children().first().addClass('pix_active');

    document.addEventListener('keydown', function (e) {

        if (e.keyCode == 40) {

            if ($('.pix_drpul:visible').find('.pix_active').next('li').length > 0) {
                $('.pix_drpul:visible').find('.pix_active').next('li').addClass('pix_active');
                $('.pix_drpul:visible').find('.pix_active:first').removeClass('pix_active');
            }

            var value = $('.pix_drpul:visible').find('.pix_active').text();
            $('.pix_drpul:visible').parent().siblings('input.pix_input').val(value);


        } else if (e.keyCode == 38) {

            if ($('.pix_drpul:visible').find('.pix_active').prev('li').length > 0) {
                $('.pix_drpul:visible').find('.pix_active').prev('li').addClass('pix_active');
                $('.pix_drpul:visible').find('.pix_active:last').removeClass('pix_active');
            }

            var value = $('.pix_drpul:visible').find('.pix_active').text();
            $('.pix_drpul:visible').parent().siblings('input.pix_input').val(value);

        } else if (e.keyCode == 13) {

            var value = $('.pix_drpul:visible').find('.pix_active').text();
            $('.pix_drpul:visible').parent().siblings('input.pix_input').val(value);

            optionsObj.onEnter();
        }
    });

}
