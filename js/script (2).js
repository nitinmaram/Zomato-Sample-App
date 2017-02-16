$(document).ready(function(){
    $('#btnSearch').on('click',function(){
        $('#results').html("");
        var title=$("#search").val();
        console.log(title);
          $.getJSON(`https://developers.zomato.com/api/v2.1/search?entity_id=${title}&entity_type=city&apikey=e7d66af9fb8c94906a2e8ed0f4c3c203`,function(json){
                displayResult(json);
                console.log(json);
              });
    });
    function displayResult(data){
      if(data["Response"]=="False")
      {
        alert(data["Error"]);
      }
      else
      {
        var movieArray=data["restaurants"];
        $("#tempelate").tmpl(movieArray).appendTo("#results");
      }
    }
});
