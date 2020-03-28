// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devBurger").on("click", function(event) {
    var id = $(this).data("id");

    var updDevour = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/" + id, {
      type: "PUT",
      data: updDevour
    }).then(
      function() {
        console.log("Burger has been eaten!");
        // Reload the page to get the updated list
        location.assign("/");
      }
    );
  });

  
});
