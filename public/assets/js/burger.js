// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  //   $(".change-status").on("click", function (event) {
  //     let id = $(this).data("id");
  //     let isDevoured = $(this).data("devoured");
  //     console.log(isDevoured);
  // let newSleepState = {
  //   sleepy: newSleep,
  // };

  // // Send the PUT request.
  // $.ajax("/api/cats/" + id, {
  //   type: "PUT",
  //   data: newSleepState,
  // }).then(function () {
  //   console.log("changed sleep to", newSleep);
  //   // Reload the page to get the updated list
  //   location.reload();
  // });
  //   });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
