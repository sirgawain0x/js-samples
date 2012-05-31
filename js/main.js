// Your name
// Project description

$('#one').on('pageinit', function () {
    console.log("Page one loaded."); // only runs on the first load unless the page is refreshed.

    // transition to page, using data from a form and reloading the page from scratch
    var toChangePage = function (toPageId) {
        $.mobile.changePage("#" + toPageId , {
            type:"post",
            data:$("form").serialize(),
            reloadPage:true
        });
    };

    $('#two').on('pageinit', function () {
        console.log("Page two loaded.");
    }); // end #two pageinit

    $('#popup').on('pageinit', function () {
        console.log("Popup page loaded.");

        // finds a link that has href="#one" and overrides the link action
        $("a[href='#one']").on('click', function(e){  // .on is defined in jQ 1.7.1
            e.preventDefault();
            console.log("Moving to PAGE ONE with the toChangePage function");
            toChangePage("one");
        });

    });  // end #popup pageinit
}); // end #one pageinit



