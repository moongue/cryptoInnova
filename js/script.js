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

function activeSelectType() {
    $('.select-wrapper').click(function() {
        $('.select-wrapper').toggleClass('active')
    })
}

function stylesSelect() {
    $('.select-filter').each(function(){
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
        $('<div>',{
            class: 'select__gap',
            text: 'All'
        }).insertAfter($this);

        var selectGap = $this.next('.select__gap'),
            caret = selectGap.find('.caret');
        // Add ul list
        $('<ul>',{
            class: 'select__list'
        }).insertAfter(selectGap);

        var selectList = selectGap.next('.select__list');
        // Add li - option items
        for(var i = 0; i < selectOptionLength; i++){
            $('<li>',{
                class: 'select__item',
                html: $('<span>',{
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }
        // Find all items
        var selectItem = selectList.find('li');

        selectList.slideUp(0);
        selectGap.on('click', function(){
            if(!$(this).hasClass('on')){
                $(this).addClass('on');
                selectList.slideDown(dur);

                selectItem.on('click', function(){
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



function addBlocker() {
    $('.show-tooltip').click(function() {
        $('.show-tooltip + .tooltip').addClass('show');
        $('body').append('<div class="blocker"></div>')
    });
    $('.modal-close').click(function() {
        $('.show-tooltip + .tooltip').removeClass('show');
        $('.blocker').remove()
    })
}

function changeTextCheckbox() {
    var text = document.querySelector('#changedText');
    ('#check2f').onclick = function() {
        if (c.checked) {
            text.textContent='On'
        } else {
            text.textContent='Off'
        }
    };

    var text2 = document.querySelector('#changedText2');

    ('#milling').onclick = function() {
        if (c2.checked) {
            text2.textContent = 'Subscribed'
        } else {
            text2.textContent = 'Off'
        }
    }
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
    choosePlan();
    chooseCurrency();
    choosePaymentSystem();
    activeSelectType();
    stylesSelect();
    dateToday();
    dateTomorrow();
    addBlocker();
    changeTextCheckbox();
    videoPlay();
});