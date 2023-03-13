$(function () {
  $("#btn").click(function(){
    let hexColor = "#";
    const result = hexColor + Math.random().toString(16).substring(9);
    $('#color').text(result)
    $('body').css("background",result)
})
$('.border-btn').click(function(){
  let hexColor = "#";
  const result = hexColor + Math.random().toString(16).substring(9);
  let border = "5px solid" + result;
  $('header').css("border",border)
})

});

