"use strict";

$(document).ready (() =>  {

    const bugArray = [];

    $("#submit").click(function () {
        bugArray.unshift($("#description").val());
        viewFirstBug();
        console.log(bugArray);
    });

    $("#complete").click(function () {
            bugArray.shift();
            viewFirstBug();
    });

    function viewFirstBug () {
        $(".bug_view").prepend($(`<section class='top_priority_bug'>${bugArray[0]}</section>`));
    }
});