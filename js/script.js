function showLink() {
    $('.copy-link').mouseenter(function () {
        $('.tooltip-link').addClass('show');
        $('.copy-link').mouseleave(function () {
            $('.tooltip-link').delay(1000).queue('fx', function() { $(this).removeClass('show'); });
        })
    });
    $('.tooltip-link').mouseenter(function () {
        $('.tooltip-link').addClass('show');
        $('.tooltip-link').mouseleave(function () {
            $('.tooltip-link').removeClass('show')
        })
    });
}

function showDropdownBalance() {
    $('.choose-balance').click(function() {
        $('.choose-balance').toggleClass('active');
        $('.dropdown-balance').slideToggle(300);
    })
}

function chooseLanguage() {
    $('.choose-language').click(function() {
        $('.choose-language .dropdown-language').slideToggle(200);
        $('.choose-language').toggleClass('open');
    })
}

function showNav() {
    $('.btn-toggle-nav').click(function () {
        $('.menu').toggleClass('active');
        $('.btn-toggle-nav').toggleClass('active')
    })
}

function toggleMenu() {
    $('.mobile-menu-toggle').click(function() {
        $('.dropdown-header').toggleClass('open')
    })
}

function addClassNavScroll() {
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if(height > 86){
            $('.menu').addClass('fixed');
        } else{
            $('.menu').removeClass('fixed');
        }
    });
}

$(window).on('load', function() {
 showLink();
 showDropdownBalance();
 chooseLanguage();
 showNav();
 toggleMenu();
 addClassNavScroll();
});