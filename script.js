// doc ready
$(function(){
    // Prevent hidden items from flashing on screen before script loads.
    $('li.menu-item').hide();
    $('li.menu-item').removeClass('start-hidden');

    // Create an event listener on the menu titles that displays or hides the menu items on click. 
    $('li.menu-title').on('click',function(){
        // check whether the parent list of the clicked element currently has the "selected" class.
        if($(this).parent().hasClass('selected')){
              // if it does, remove the selected class from the clicked list.
            $(this).parent().removeClass('selected');
            // for accessibility: change the aria-expanded attribute on the clicked button to false.
            $(this).children('button').attr('aria-expanded','false')
        } else{
            // if it doesn't, remove the 'selected' class from whatever list currently has it, and add it to the clicked list.
            $('.selected').removeClass('selected');
            $(this).parent().addClass('selected');
            // for accessibility: change the aria - expanded attribute on the newly closed menu's button to false.
            $('.selected').children('button').attr('aria-expanded', 'false')
            // for accessibility: change the aria - expanded attribute on the newly opened menu's button to true.
            $(this).children('button').attr('aria-expanded', 'true')
        }
        // then, hide any menu items that are currently shown.
        $('.menu-item').slideUp();
        // and set the "expand cue" text back to a "+" (indicating the user's click will expand the list).
        $('.expand-cue').text('+')
        // Show any menu items contained within a list with the "selected" class.
        $('.selected').children('.menu-item').slideDown()
        // Set the "expand cue" text for the selected list to a "-" (indicating the user's click will minimize the list).
        $('.selected').find('.expand-cue').text('—')
    })
})