
// index.html UI code: Implemented by Aakanksha Gupta

// get user data
var that = this;
var userData=null;
$(document).ready(function(){
    $.ajax('/user', {
        contentType: 'application/json',
        method: 'GET'
    }).done(function (data) {
        console.log(data);
        userData = data;
        $('#loggedInUser').html("as "+userData.name);
    });
    
});



var modal = document.getElementById("myModal");
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
  }

  function getTweetDetails(name, text, likesCount, retweetCount) {

    // console.log(id);
    if (name === that.userData.name)
    {
        // var modal =  $("#myModal");
       
        

    }
}



