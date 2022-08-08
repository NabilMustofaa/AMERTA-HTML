

jQuery(function ($) {
    $(document).ready(function(){
        $("#play").on("load", function(){
            $(this).contents().on("mousedown, mouseup, click", function(){
                alert("Click detected inside iframe.");
            });
        });
    });
    // $(document).ready(function () {
    //     $('#play').click(function(event) { 
    //         console.log('play');
    //         $(this).removeClass('filter')
    //      });
    //    });

    /* ===================================
    Header Appear On Scroll
    ====================================== */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 70) { // Set position from top to add class
            $('header').addClass('sticky header-appear');
            $('.left-logo .navbar-brand').addClass("display_none");
        }
        else {
            $('header').removeClass('sticky header-appear');
            $('.left-logo .navbar-brand').removeClass("display_none");
        }
    });

    $(window).on('scroll', function () {
        var position = $(this).scrollTop(); //position scrolled sofar
        
        $('section').each(function() { //for each loop(chcecks for every element with that class)
        //for your every section on site or your class of main sections you are targetting
            var target = $(this).offset().top-200;//each element position from top
            var targetBot = target + $(this).height()//each element position from top + height of element
            var id = $(this).attr('id');//this element ID - should be same as data-id on your nav link
            $('.navbar-nav li#'+id+'_nav').removeClass('active'); //clearing
            if (position >= target && targetBot >= position) { //if you are scrolled over element with some id 
                $('.navbar-nav li#'+id+'_nav').addClass('active');
                //this will check wich element you are scrolled on and selects in menu that item with same data-id :) 
            }
        });
    });

// fixing bottom nav to top on scrolliing
var $fixednav = $(".bottom-nav .navbar-fixed-top");
$(window).on("scroll", function () {
    var $heightcalc = $(window).height() - $fixednav.height();
    if ($(this).scrollTop() > $heightcalc) {
        $fixednav.addClass("navbar-bottom-top");
    } else {
        $fixednav.removeClass("navbar-bottom-top");
    }    
});
})
function opensidebar(){
    let menubars=document.querySelector('.menu_bars');
    let pushmenu = document.querySelector('.pushmenu');
    menubars.classList.toggle('active');
    pushmenu.classList.toggle('pushmenu-open');
}
function openModal(modalName){
    let modal = document.querySelector('#modal_'+modalName);
    modal.classList.toggle('show-modal');
}
function closeModal(){
    let modal = document.querySelector('.show-modal');
    modal.classList.toggle('show-modal');
}
// $(window).on('scroll',() => {
//     let mouse = document.querySelector('.scroll-container');
//     mouse.classList.add('hide-mouse');
//     setTimeout(() => {
//         mouse.classList.remove('hide-mouse');
//     },2000)
// })



    









