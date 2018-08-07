"use strict";

$(document).ready (() =>  {

    const bugArray = [];
    const time = new Date();

    $("#submit").click(function () {
        bugArray.unshift(time.toDateString() + " : " +$("#description").val());
        viewFirstBug();
        console.log(bugArray);
    });

    $("#complete").click(function () {
            bugArray.shift();
            viewFirstBug();
    });

    function viewFirstBug () {
        $(".top_priority_bug").remove();
        $(".bug_view").prepend($(`<section class='top_priority_bug'>${bugArray[0]}</section>`));
    }
});