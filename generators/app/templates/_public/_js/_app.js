$(function(){
    // Get movies
    $.fn.getMovies = function () {
      $.getJSON("/movies", function(result){   
        $("#tblMovies").empty()   
        $("#tblMovies").append("<thead class='thead-dark'><tr><th>TITLE</th><th>YEAR</th><th>GENRE</th><th>SCORE</th><th>ACTIONS</th></tr></thead><tbody>")
        $.each(result, function(i, field){          
          console.log("ID1: " + field.id)
          console.log("ID2: " + field._id)
          $("#tblMovies").append("<tr><td>" + field.title + 
                                 "</td><td>" + field.year + 
                                 "</td><td>" + field.genre + 
                                 "</td><td>" + field.votes + 
                                 "</td><td><a id='" + field._id + "' class='remove'><i class='fas fa-trash-alt'></i></a>" +
                                 "</td></tr>");
        });
      });
    };

    // Post a new movie
    $("#btnAddMovie").click(function(){
      $.post( "/movie", $("#frmMovies").serialize())
        .done(function( data ) {
          $("#tblMovies").getMovies()
        });
    });

    // Delete a existent movie
    $('body').on('click', 'a.remove', function() {          
      $.ajax({
        method: "DELETE",
        url: "/movie/" + $(this).attr('id') 
      })
        .done(function( msg ) {          
          $("#tblMovies").getMovies()
        });
    });


 });