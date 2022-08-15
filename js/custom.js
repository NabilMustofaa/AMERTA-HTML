

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

// let moveForce= 20;
// let rotateForce=20;

// $(document).mousemove(function (e) {

//     let docX = $(document).width();
//     let docY = $(document).height();
//     let moveX = (e.pageX -  docX/2) / (docX/2) * -moveForce;
//     let moveY = (e.pageY - docY/3) / (docY/3) * -moveForce;
//     let moveX1 = moveX + docX * 0.775, 
//     moveX2 = moveX + docX * 0.815,
//     moveX3=moveX+docX*0.555,
//     moveX4=moveX+docX*0.295,
//     moveX5=moveX+docX*0.095,
//     moveX6=moveX+docX*0.0095;
//     let moveY1 = moveY + docY * 0.013, 
//     moveY2 = moveY + docY * 0.007,
//     moveY3=moveY + docY * 0.0167,
//     moveY4=moveY+docY*0.0157,
//     moveY5=moveY+docY*0.0127,
//     moveY6=moveY+docY*0.0187;

//     $('.awan1')
//         .css('left', moveX1 +'px')
//         .css('top', moveY1 +'px') ;
//     $('.awan2')
//         .css('left', moveX2 +'px')
//         .css('top', moveY2 +'px');
//     $('.awan3')
//        .css('left', moveX3 +'px')
//         .css('top', moveY3 +'px');
//     $('.awan4')
//         .css('left', moveX4 +'px')
//         .css('top', moveY4 +'px') ;
//     $('.awan5')
//         .css('left', moveX5 +'px')
//         .css('top', moveY5 +'px');
//     $('.awan6')
//        .css('left', moveX6 +'px')
//         .css('top', moveY6 +'px');
        
// })
window.onload = function(){
	var wrapper = document.querySelector('body'),
			layerOne = document.querySelector('.awan1'),
			layerTwo = document.querySelector('.awan2'),
			layerThree = document.querySelector('.awan3'),
			layerFour = document.querySelector('.awan4');
            layerFive = document.querySelector('.awan5');
            layerSix = document.querySelector('.awan6');

	wrapper.addEventListener('mousemove',function(e){
		var pageX = e.clientX - window.innerWidth/2,
            pageY = e.clientY - window.innerHeight/2;
  	layerOne.style.transform = 'translateX(-'+ (5 + pageX/100) + '%) translateY(-' + (5 + pageY/100) + '%) ';
  	layerTwo.style.transform = 'translateX(-' + (5 + pageX/100) + '%) translateY(-' + (5 + pageY/100) +  '%)';
  	layerThree.style.transform = 'translateX(-' + (5 + pageX/100) + '%) translateY(-' + (5 + pageY/100) +  '%)';
  	layerFour.style.transform = 'translateX(-' + (5 + pageX/100) + '%) translateY(-' + (5 + pageY/100) + '%) scaleX(-1)';
    layerFive.style.transform = 'translateX(-' + (5 + pageX/100) + '%) translateY(-' + (5 + pageY/100) +  '%) scaleX(-1)';
  	layerSix.style.transform = 'translateX(-' + (5 + pageX/100) + '%) translateY(-' + (5 + pageY/100) + '%) scaleX(-1)';
	});
}


    









