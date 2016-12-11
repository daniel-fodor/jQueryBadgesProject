$(function() {

  // your code will go here
  $.ajax({
    url: "https://www.codeschool.com/users/2436579.json",
    dataType: 'jsonp',
    success: function(response) {
      var courses = response.courses.completed;
      for (var i = 0; i < courses.length; i++) {
        var div = $("<div />", {
          class: 'course'
        });

        var h3 = $("<h3 />").text(courses[i].title);
        var img = $("<img />", {
          src: courses[i].badge
        });
        var button = $("<a />", {
          href: courses[i].href,
          target: "_blank",
          class: "btn, btn-primary"
        }).text("See Course");

        div.append(h3);
        div.append(img);
        div.append(button);
        $("#badges").append(div);
      }
    }
  });
});
