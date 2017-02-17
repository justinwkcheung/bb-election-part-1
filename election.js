$(document).ready(function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(data){

    for (var i = 0; i < data.candidates.length; i++) {
      console.log(data.candidates);
      $('<li>').html(data.candidates[i].name + "  Votes: " + data.candidates[i].votes).appendTo('#candidateList');

    };
  });
});
