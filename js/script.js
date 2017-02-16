$(document).ready(function(){
    $('#btnSearch').on   ('click',function(){
        $('#results').html("");
        var title=$("#search").val();
          $.getJSON('https://developers.zomato.com/api/v2.1/search?q='+title,function(json){
                console.log(json);
                displayResult(json);
              });
    });
    function displayResult(data){
      if(data["Response"]=="False")
      {
        alert(data["Error"]);
      }
      else
      {
        var movieArray=data["Search"];
        $("#tempelate").tmpl(movieArray).appendTo("#results");
      }
    }
});
