$(document).ready(function(){
    //SOPHIE DESCRIPTORS
    var quotation = new Array();
    quotation[0] = "PROGRAMMER EXTRAORDINAIRE";
    quotation[1] = "FABULOUS MUSICIAN";
    quotation[2] = "PYTHON SAVVY";
    quotation[3] = "ROBOT LOVING";
    quotation[4] = "EXCITED ENGINEER";
    quotation[5] = "BOMBASTIC BAKER"

    var q_length = quotation.length;
    var selected_quote;

    var old = $(".sophie_descriptor").html();

    var timeout = 0;
    var hovering = false;

    $('.menu').hide();
    $('.flavortext').hide();
    $('.sophie_descriptor').hide();

    // selected_quote = Math.round(Math.random()*(q_length - 1));
    // $(".sophie_descriptor")
    //         .stop(true,true)
    //         .fadeIn(500)
    //         .html(quotation[selected_quote]);

    $('#titletext')
        .on("mouseenter", function () {
        hovering = true;
        selected_quote = Math.round(Math.random()*(q_length - 1));

        $(".sophie_descriptor")
            .stop(true,true)
            .fadeIn(500)
            .html(quotation[selected_quote]);

        $('.menu')
            .stop(true, true)
            .fadeIn(500);

        $('.flavortext')
            .stop(true, true)
            .fadeIn(700);

        if (timeout > 0){
            clearTimeout(timeout);
        }
        })

        .on("mouseleave", function () {
            resetHover();
      });

    $(".menu")
        .on("mouseenter", function (){
            hovering = true;
            startTimeout();
        })
        .on("mouseleave", function (){
            resetHover();
        })

    function startTimeout() {
        timeout = setTimeout(function() {closeMenu();}, 7000);
    }

    function closeMenu(){
        if(!hovering){
            $(".menu, .flavortext")
                .stop(true, true)
                .fadeOut(400);

            setTimeout(function() {
                $(".sophie_descriptor").stop(true, true).fadeOut(200);
            }, 1500);
        }
    }

    function resetHover() {
        hovering = false;
        startTimeout();
    }

    //Rumble stuff
    $('#titletext, .sophie_descriptor').jrumble({
        speed: 200,
        rotation: 0.5
    });

    $('#titletext').trigger('startRumble');

    $('#titletext').hover(function(){
        $(this).trigger('stopRumble');
    }, function(){
        $(this).trigger('startRumble');
    });

});