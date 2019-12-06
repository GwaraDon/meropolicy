$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

//jquery for mobile menu
jQuery('#menu').metisMenu().show();


$('#plus').click(function(e) {
    $('.mobile-sub-menu').slideToggle("fast");
    $('.tog').toggleClass(" icofont-plus icofont-minus");
    e.stopPropagation();
    $('body').click(function(){
        $('.mobile-sub-menu').hide();
    });
});
$(function () {
    $(".date-picker").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});

$('#edit_vehicle .details-section .detail button').click(function(){
    $('button.active').removeClass('  active');
    $(this).addClass(' active ');

});
$('#edit_vehicle .details-section .detail .edit-icon').click(function(){
    $('form.edit-detail-view-text').show();
    $('.detail-view-text').hide();
});

$('#NCB_value .clam-yes-no button').click(function(){
    $('button.active').removeClass('  active');
    $(this).addClass(' active ');

});
$('#NCB_value .clam-yes-no .claim-yes-button').click(function(){
    $('.claim-made-yes-alert').show();
    $('.claim-made-no-alert').hide();
});
$('#NCB_value .clam-yes-no .claim-no-button').click(function(){
    $('.claim-made-no-alert').show();
    $('.claim-made-yes-alert').hide();
});
$('#NCB_value .ncb-options button').click(function(){
    $('button.selected-ncb').removeClass('  selected-ncb');
    $(this).addClass(' selected-ncb ');

});
$('#existing_policy .buttons button').click(function(){
    $('button.selected').removeClass('  selected');
    $(this).addClass(' selected ');

});
$('.form-section .go-to-second').click(function(){
    $('.second-level').fadeIn(800).delay(300);
    $('.first-level').fadeOut(500);
});
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});


//radio button check of show and hide in modal IDV

$('input[type="radio"]').on('click', function() {
    if ($(this).val() == 'user_defined') {
        $('#range').show();
    }
    else {
        $('#range').hide();
    }
});
$("#select-all").on('change',function(){
    $(".insurer-checkbox").prop('checked',$(this).is(":checked"));
});
$("#reset-all").on('click',function(){
    $(".insurer-checkbox").prop('checked',$(this).is(":checked"));
});

$('#write-review').click(function(){
    $('.write_review').toggle();
});

$(function() {
    $('article.reviews').slice(0,3).show();
    $('.show-more').on('click',function(){
        $('article:hidden').slice(0,3).slideDown();
        if($('article:hidden').length === 0){
            $('.show-more').fadeOut('slow');
        }
    });
});

$("#collection-details .next").click(function(){
 var current_fs = $(this).parents('fieldset');
    var next_fs=$(this).parents('fieldset').next();
    next_fs.fadeIn(800);
    current_fs.hide();
    // $(window).scrollTop(100);

});
$("#collection-details .back").click(function (){
    var current_fs = $(this).parents('fieldset');
    var prev_fs=$(this).parents('fieldset').prev();

    prev_fs.fadeIn(800);
    current_fs.hide();
    $(window).scrollTop(100);
});

//health insurance script of the form pagination

$('#continue_form').click(function(){
  $('.form_pagination li.step_2').addClass(' active ');
   $('.mobile_number').fadeOut(300);
   $('.about_you').fadeIn(1200).delay(500);
});
$('#continue_form-2').click(function(){
    $('.form_pagination li.step_3').addClass(' active ');
    $('.about_you').fadeOut(300);
    $('.about_your_family').fadeIn(1200).delay(500);
});
$('#continue_form-3').click(function(){
    $('.form_pagination li.step_4').addClass(' active ');
    $('.about_your_family').fadeOut(300);
    $('.about_your_family_age').fadeIn(1200).delay(500);
});

// inputmask is a plugin
$('#txtDate').inputmask('mm/dd/yyyy');

var handlers = {
    calculateAge: function (dob) {
        if (!dob) {
            return;
        }

        var ageDifMs = Date.now() - new Date(dob).getTime();
        var ageDate = new Date(ageDifMs);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
    populateAge: function () {
        var dob = $('#txtDate').val();
        var age = handlers.calculateAge(dob);
        $('#exact_age').text(age + 'years');
    },
    submit: function(e) {
        e.preventDefault();
        handlers.populateAge();
    }
};

$('#txtDate').on('blur', handlers.submit);

// script to add dash(-) in card number

$('#card-number').keyup(function() {
    var foo = $(this).val().split("-").join(""); // remove hyphens
    if (foo.length > 0) {
        foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
    }
    $(this).val(foo);
});

//append input field for the age
$('#add-age-input').click(function(){
    $('.age-travellers').append(`
      <input class="uk-input w-25 mx-1" id="form-stacked-age" type="number" placeholder="age..." style="height: 40px">                            
    `);
});
$('#add-vehicle').click(function(){
    $('#add-vehicle').hide();
    $('.vehicle-detail').append(`
      <form action="" class="user-form mt-5 pt-5 border-top">
                    <div class="row">
                        <div class="col-sm-6 mb-3">
                            <div class="uk-inline w-100">
                                <label for=""> Vehicle Type</label>
                                <select name="" id="" class="uk-select">
                                    <option value="">Select Your Vehicle Type</option>
                                    <option value="">Two Wheeler</option>
                                    <option value="">Car</option>
                                </select>
                         </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <div class="uk-inline w-100">
                                <label for=""> Reg. No*</label>
                                <input type="number" class="uk-input" placeholder="Registeration Number">
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <div class="uk-inline w-100">
                                <label for=""> Fuel Type</label>
                                <select name="" id="" class="uk-select">
                                    <option value="">Select Your Fuel Type</option>
                                    <option value="">Diesel</option>
                                    <option value="">Petrol</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <div class="uk-inline w-100">
                                <label for=""> Vehicle Make</label>
                                <input type="text" class="uk-input" placeholder="Vehicle maker">
                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <div class="uk-inline w-100">
                                <label for=""> Vehicle Reg year</label>
                                <input type="text" class="uk-input" placeholder="Registration Year">

                            </div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <div class="uk-inline w-100">
                                <label for="">Expiry Date</label>
                                <input type="text" class="uk-input" placeholder="Date of Policy exp">
                            </div>
                        </div>
                         <div class="col-sm-12 text-center mx-auto d-block my-3">
                            <a href="companies.html" class="button-primary">
                                Get Quotes
                            </a>
                        </div>
                    </div>
                </form>                            
    `);
});

//on radion button show hide the content
$('.old-one').click(function(){
    $('.radio-checked-old').show();
    $('.radio-checked-new').hide();
});
$('.new-one').click(function(){
    $('.radio-checked-new').show();
    $('.radio-checked-old').hide();
});
$('#login-first').click(function(){
    $('.login-first--page').hide();
    $('.login-second--page').show()
});
$('#row-next-page').click(function(){
    $('.renew-first-row').fadeOut(200);
    $('.renew-second-row').fadeIn(300).delay(200)
})