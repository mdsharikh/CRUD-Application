$("#add_user").submit(function (event) {
  alert("Data addedd successfully");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  var request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "put",
    data: data,
  };
  $.ajax(request).done(function (response) {
    alert("data updated successfully");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };
    if (conform("confirm delete")) {
      $.ajax(request).done(function (response) {
        alert("data deleted successfully");
        location.reload;
      });
    }
  });
}
