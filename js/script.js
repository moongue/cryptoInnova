function showLink() {
    $('.copy-link').mouseenter(function () {
        $('.tooltip-link').addClass('show');
        $('.copy-link').mouseleave(function () {
            $('.tooltip-link').delay(1000).queue('fx', function () {
                $(this).removeClass('show');
            });
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
    $('.choose-balance').click(function () {
        $('.choose-balance').toggleClass('active');
        $('.dropdown-balance').slideToggle(300);
    })
}

function chooseLanguage() {
    $('.choose-language').click(function () {
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
    $('.mobile-menu-toggle').click(function () {
        $('.dropdown-header').toggleClass('open')
    })
}

function addClassNavScroll() {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 86) {
            $('.menu').addClass('fixed');
        } else {
            $('.menu').removeClass('fixed');
        }
    });
}

function choosePlan() {
    $('.rail-freight').click(function () {
        $('.rail-freight').addClass('active');
        $('.sea-freight, .air-freight, .multimodal-transportation').removeClass('active');
    });
    $('.sea-freight').click(function () {
        $('.sea-freight').addClass('active');
        $('.rail-freight, .air-freight, .multimodal-transportation').removeClass('active');
    });
    $('.air-freight').click(function () {
        $('.air-freight').addClass('active');
        $('.rail-freight, .sea-freight, .multimodal-transportation').removeClass('active');
    });
    $('.multimodal-transportation').click(function () {
        $('.multimodal-transportation').addClass('active');
        $('.rail-freight, .air-freight, .sea-freight').removeClass('active');
    })
}

function chooseCurrency() {
    var panels = document.getElementsByClassName("one-currency");
    var actives = document.getElementsByClassName('choose');
    for (i = 0; panels.length > i; i++) {
        panels[i].onclick = function() {
            var currentActive = actives[0];
            if (currentActive)
                currentActive.classList.remove("choose");

            if (currentActive !== this)
                this.classList.add("choose");
        };
    }
}

function choosePaymentSystem() {
    var panels = document.getElementsByClassName("payment-system");
    var actives = document.getElementsByClassName("choose");
    for (i = 0; panels.length > i; i++) {
        panels[i].onclick = function() {
            var currentActive = actives[0];
            if (currentActive)
                currentActive.classList.remove("choose");

            if (currentActive !== this)
                this.classList.add("choose");
        };
    }
}

$(window).on('load', function () {
    showLink();
    showDropdownBalance();
    chooseLanguage();
    showNav();
    toggleMenu();
    addClassNavScroll();
    choosePlan();
    chooseCurrency();
    choosePaymentSystem();
});