// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.ui.all

//= require jquery_ujs
//= require fullcalendar
//= require_tree .

$(function() {
    $(".datepicker").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        yearRange: '1950:2020'
    });
    $('.calendar').fullCalendar({
        height : 600,
        editable: true,
       events: '/events.json'
    });
    $('.my-calendar').fullCalendar({
        height : 600,
        events: '/my.json'
    });
});

