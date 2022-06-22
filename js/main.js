$(document).ready(function(){

    let $btn = $('.project-area .button-group .button');
    
    $btn.click(function(e){

        $('.project-area .button-group .button').removeClass('active');
            e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })
});

