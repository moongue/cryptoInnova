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
        $('.dropdown-header').toggleClass('open');
        $('.overlay-shadow').fadeToggle(300);
        $('.overlay-shadow').click(function() {
            $('.overlay-shadow').fadeOut(300);
            $('.dropdown-header').removeClass('open');
            $('.ham-burger').removeClass('active');
        })
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

function addClassNavTwoScroll() {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 60) {
            $('.dropdown-header').addClass('fixed');
        } else {
            $('.dropdown-header').removeClass('fixed');
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
        panels[i].onclick = function () {
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
        panels[i].onclick = function () {
            var currentActive = actives[0];
            if (currentActive)
                currentActive.classList.remove("choose");

            if (currentActive !== this)
                this.classList.add("choose");
        };
    }
}

function activeSelectType() {
    $('.select-wrapper').click(function () {
        $('.select-wrapper').toggleClass('active')
    })
}

function stylesSelect() {
    $('.select-filter').each(function () {
        // Variables
        var $this = $(this),
            selectOption = $this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            dur = 500;

        $this.hide();
        // Wrap all in select box
        $this.wrap('<div class="select"></div>');
        // Style box
        $('<div>', {
            class: 'select__gap',
            text: 'All'
        }).insertAfter($this);

        var selectGap = $this.next('.select__gap'),
            caret = selectGap.find('.caret');
        // Add ul list
        $('<ul>', {
            class: 'select__list'
        }).insertAfter(selectGap);

        var selectList = selectGap.next('.select__list');
        // Add li - option items
        for (var i = 0; i < selectOptionLength; i++) {
            $('<li>', {
                class: 'select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }
        // Find all items
        var selectItem = selectList.find('li');

        selectList.slideUp(0);
        selectGap.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(dur);

                selectItem.on('click', function () {
                    var chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectGap.text($(this).find('span').text());

                    selectList.slideUp(dur);
                    selectGap.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });

    });
}

function dateToday() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#theDateToday").attr("value", today);
}

function dateTomorrow() {
    var date = new Date();

    var day = date.getDate() + 1;
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#theDateTomorrow").attr("value", today);
}

function sliderPerson() {
    $('.carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        responsive: {
            0: {
              items: 1
            },
            576: {
              items: 2
            },
            992: {
                items: 3
            }
        }
    })
}

function sliderPlan() {
    $('.carousel-plan').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        items: 1

    })
}

function tabsCalculate() {
    $('.calculate-tabs').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs-calculate').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
}

function chooseInvest() {
    $('.choose-invest').click(function () {
        $('.choose-invest').toggleClass('active');
        $('.dropdown-invest').slideToggle(300);
    });

    $('.dropdown-invest .invest').click(function(){
        $('.dropdown-invest .invest').removeClass('active');
        $(this).addClass('active');
        var active = $(this).text();
        $('.invest-show').text(active);
    })
}

function selectMassMeasurement() {
    $('.calculate-select-mass-measurement').click(function(){
        $('.calculate-select-mass-measurement').toggleClass('active');
        $('.dropdown-select-mass-measurement').slideToggle(300);

    } );
    $('.dropdown-select .mass-measurement').click(function(){
        $('.dropdown-select .mass-measurement').removeClass('active');
        $(this).addClass('active');
        var active = $(this).text();
        $('.select-mass-measurement').text(active);
    })
}

function selectLengthMeasurement() {
    $('.calculate-select-length-measurement').click(function(){
        $('.calculate-select-length-measurement').toggleClass('active');
        $('.dropdown-select-length-measurement').slideToggle(300);

    } );
    $('.dropdown-select .length-measurement').click(function(){
        $('.dropdown-select .length-measurement').removeClass('active');
        $(this).addClass('active');
        var active = $(this).text();
        $('.select-length-measurement').text(active);
    })
}

function selectOriginCountry() {
    $('.calculate-select-origin-county').click(function(){
        $('.calculate-select-origin-county').toggleClass('active');
        $('.dropdown-select-origin-county').slideToggle(300);

    } );
    $('.dropdown-select .origin-county').click(function(){
        $('.dropdown-select .origin-county').removeClass('active');
        $(this).addClass('active');
        var active = $(this).text();
        $('.select-origin-county').text(active);
    })
}

function selectDestinationCountry() {
    $('.calculate-select-destination-county').click(function(){
        $('.calculate-select-destination-county').toggleClass('active');
        $('.dropdown-select-destination-county').slideToggle(300);

    } );
    $('.dropdown-select .destination-county').click(function(){
        $('.dropdown-select .destination-county').removeClass('active');
        $(this).addClass('active');
        var active = $(this).text();
        $('.select-destination-county').text(active);
    })
}

function addBlocker() {
    $('.show-tooltip').click(function () {
        $('.show-tooltip + .tooltip').addClass('show');
        $('body').append('<div class="blocker"></div>')
    });
    $('.modal-close').click(function () {
        $('.show-tooltip + .tooltip').removeClass('show');
        $('.blocker').remove()
    })
}

function changeTextCheckbox() {
    var text = document.querySelector('#changedText');
    var c = document.querySelector('#check2f');

    c.onclick = function () {
        if (c.checked) {
            text.textContent = 'On'
        } else {
            text.textContent = 'Off'
        }
    };

    var text2 = document.querySelector('#changedText2');
    var c2 = document.querySelector('#milling');


    c2.onclick = function () {
        if (c2.checked) {
            text2.textContent = 'Subscribed'
        } else {
            text2.textContent = 'Off'
        }
    }
}

function alertNotification () {
    $('.alert-success').click(function() {
        $('.alert-notifications.success').toggleClass('alert-show');
    });
    $('.alert-error').click(function() {
        $('.alert-notifications.error').toggleClass('alert-show');
    })
}


function videoPlay() {
    var overlay = document.getElementById('overlay');
    var vid = document.getElementById('video');

    if (overlay.addEventListener) {
        overlay.addEventListener("click", play, false)
    } else if (overlay.attachEvent) {
        overlay.attachEvent("onclick", play)
    }

    function play() {
        if (vid.paused) {
            vid.play();
            overlay.className = "o";
        } else {
            vid.pause();
            overlay.className = "";
        }
    }
}



$(window).on('load', function () {
    showLink();
    showDropdownBalance();
    chooseLanguage();
    showNav();
    toggleMenu();
    addClassNavScroll();
    addClassNavTwoScroll();
    choosePlan();
    chooseCurrency();
    choosePaymentSystem();
    activeSelectType();
    stylesSelect();
    dateToday();
    dateTomorrow();
    sliderPerson();
    addBlocker();
    tabsCalculate();
    selectMassMeasurement();
    selectLengthMeasurement();
    selectDestinationCountry();
    selectOriginCountry();
    alertNotification();
    chooseInvest();
    sliderPlan();
    videoPlay();
    changeTextCheckbox();
});