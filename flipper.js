$(function () {
  $("#btn").click(function () {
    let hexColor = "#";
    const result = hexColor + Math.random().toString(16).substring(9);
    $("#color").text(result);
    $("body").css("background", result);
  });
  $(".border-btn").click(function () {
    let hexColor = "#";
    const result = hexColor + Math.random().toString(16).substring(9);
    let border = "5px solid" + result;
    $("header").css("border", border);
  });
  $("#color").click(function () {
    let searchBar = $('<input type="text" id="input"/><button class="search"><i class="fa-solid fa-magnifying-glass"></i></button>');
    let innerTxt = $("#color").html();
    searchBar.attr("value", innerTxt);
    $("#color").replaceWith(searchBar);
    $('.search').click(function(){
      $('body').css("background",$('#input').val())
    })
  });
});
