
var that = this;
$.ajax('/user', {
    // data: JSON.stringify(request),
    contentType: 'application/json',
    method: 'GET'
}).done(function (data) {
    console.log(data);
    that.userData = data;
    // myResolve(); // when successful
});



// initial timeline get call..

$.ajax('/timeline', {
    // data: JSON.stringify(request),
    contentType: 'application/json',
    method: 'GET'
}).done(function (data) {
    console.log(data);
    $(document).ready(function () {
        console.log("ready!");
        var lihtml = '';
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        for (var i = 0; i < data.length; i++) {
            lihtml = lihtml + '<article> <h3><a onclick="getTweetDetails(' + "'" + data[i].user.screen_name + "'" +')">' + data[i].user.name + '</a></h3><h4><a> @' + data[i].user.screen_name + '</a></h4> <p>' + data[i].text + '</p> <br> <p> Likes ' + data[i].favorite_count + '&nbsp;Retweets ' + data[i].retweet_count + '<p> <button onclick="onDeletePost(' + "'" + data[i].id + "'" + ',' + "'" + data[i].user.screen_name + "'" + ')"' + 'class="mui-btn mui-btn--primary mui-btn--raised"> Delete </button> </article>';
            // lihtml = lihtml + '<article> <h1> <a onclick="getTweetDetails(' + data[i].user.name + "," + data[i].text + "," + data[i].favorite_count + "," + data[i].retweet_count  + ')">' + data[i].user.name + '</a></h1></article>'
        }
        $("#tweetContentId").append(lihtml);

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