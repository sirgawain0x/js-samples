// Your name
// Project description

$('#one').on('pageinit', function () {
    console.log("Page one loaded."); // only runs on the first load unless the page is refreshed.
    // Latest update
    /*
    // Step 1: target our list and empty it http://api.jquery.com/empty/
    $("ul").empty();
    // Step 2: Grab list item details from index.html
    $('<li data-role="list-divider">Friday, October 8, 2010 <span class="ui-li-count">3</span></li>' +
        '<li><a href="index.html"><h3>Stephen Weber</h3>' +
        '<p><strong>You have been invited to a meeting at Filament Group in Boston, MA</strong></p>' +
        '<p>Hey Stephen, we have got a meeting with the jQuery team.</p>' +
        '<p class="ui-li-aside"><strong>6:24</strong>PM</p></a></li>').appendTo("ul");

    // Step 3: refresh the listview
    $("ul").listview('refresh');
    */
    // Get localStorage
    $("#storage").on('click', function(){
        $("#itemList").empty();
        for (var i= 0, j=localStorage.length; i<j ; i++){
            var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
            console.log(item);
            var makeSubList = $("<li></li>");
            var makeSubLi = $( "<h3>"+item.iname[1]+"</h3>"+
                "<p><strong>"+item.category[1]+"</strong></p>"+
                "<p>"+item.quantity[1]+"</p>" +
                "<p>"+item.notes[1]+"</p>" );
            var makeLink = $("<a href='#' id='"+key+"'>Edit</a>");
            makeLink.on('click', function(){
                console.log("This is my key: "+this.id);
            });
            makeLink.html(makeSubLi);
            makeSubList.append(makeLink).appendTo("#itemList");
        }; // end for loop
        $("ul").listview('refresh');
    });  // end storage.on

}); // end #one pageinit

/*
 // transition to page, using data from a form and reloading the page from scratch
 var toChangePage = function (toPageId) {
 $.mobile.changePage("#" + toPageId , {
 type:"post",
 data:$("form").serialize(),
 reloadPage:true
 });
 };
 */

$('#two').on('pageinit', function () {
    console.log("Page two loaded.");
}); // end #two pageinit

$('#popup').on('pageinit', function () {
    console.log("Popup page loaded.");
    /*
     // finds a link that has href="#one" and overrides the link action
     $("a[href='#one']").on('click', function(e){  // .on is defined in jQ 1.7.1
     e.preventDefault();
     console.log("Moving to PAGE ONE with the toChangePage function");
     toChangePage("one");
     });
     */
});  // end #popup pageinit