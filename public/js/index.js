
var that = this;
var userData=null;
$.ajax('/user', {
    contentType: 'application/json',
    method: 'GET'
}).done(function (data) {
    console.log(data);
    userData = data;
});



// initial timeline get call..



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

function onDeletePost(id, name)
{
    console.log(name,id);
    if (name === that.userData.name)
    {
        this.id = id;
        var modal = document.getElementById("myModal");
        modal.style.display = "block";


    }
    else
    {
        alert("You are not authorized to delete a post...")
    }
}

function pressOk()
{
    modal.style.display = "none";

    $.ajax('/tweet/' + this.id, {
        // data: JSON.stringify(request),
        contentType: 'application/json',
        method: 'DELETE'
    }).done(function (data) {
       
        alert("Post Deleted Successfully..")
        // myResolve(); // when successful
    });


}
function pressCancel()
{
    modal.style.display = "none";
}