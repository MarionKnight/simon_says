$(document).ready(function(){
  $('#get_color').on('click', function(e) {
    e.preventDefault()
    $.ajax({
      url: "/color",
      type: "POST",
      success: function(data) {
        console.log(data.cell, data.color),
        // This line will change all of them
        // $('#color_me li').css('background', data.color)
        $('#color_me li')[data.cell].style.backgroundColor = data.color
      }
    })
  })
});
