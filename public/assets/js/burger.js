// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-status").on("click", function (event) {
    let id = $(this).data("id");

    let newBurgerState = {
      devoured: true,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState,
    }).then(function () {
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("new burger");

      location.reload();
    });
  });
});
