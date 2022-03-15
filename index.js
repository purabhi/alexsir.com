

$('.sidenav_button img').click(()=>{
  $('.sidebar').css('width','400px')
   $('.dark-bg').css('display','block')
})

$('.sidebar .sidebar-icon').click(()=>{
    $('.sidebar').css('width','0')
    $('.dark-bg').css('display','none')
})
$('.dark-bg').click(()=>{
    $('.sidebar').css('width','0')
    $('.dark-bg').css('display','none')
})

// FOR SMALLER SCREEN
$('#icon_img').click(()=>{
    $('.sidebar').css('width','100%')
    $('.dark-bg').css('display','block')
})



  //testimonal
  var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer
    ;

window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);

}

// // sidebar icon
// $(".sidebar-icon i").mouseenter(()=>{
//  $(".sidebar-icon i").removeClass('fa-solid fa-xmark')
//  $(".sidebar-icon i").addClass('fa-solid fa-arrow-left')
// })
// $(".sidebar-icon i").mouseleave(()=>{
//     $(".sidebar-icon i").addClass('fa fa-solid fa-xmark')
//     $(".sidebar-icon i").removeClass('fa-solid fa-arrow-left')
//    })
