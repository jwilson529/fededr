$(document).ready(function($) {
    console.log('ready');

    /* Shorthand Ajax request for JSON */
    $.getJSON('./baby-steps.json', function(data) {
    	console.log(data);
    });
});
