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
        for (let i = 0; i < data.length; i++) {
           if(userData.name==data[i].user.screen_name)
            lihtml = lihtml + '<article> <h3><a onclick="getTweetDetails(' + "'" + data[i].user.screen_name + "'" +')">' + data[i].user.name + '</a></h3><h4><a> @' + data[i].user.screen_name + '</a></h4> <p>' + data[i].text + '</p> <br> <p> Likes ' + data[i].favorite_count + '&nbsp;Retweets ' + data[i].retweet_count + '<p> <button onclick="onDeletePost(' + "'" + data[i].id_str + "'" + ',' + "'" + data[i].user.screen_name + "'" + ')"' + 'class="mui-btn mui-btn--primary mui-btn--raised"> Delete </button> </article>';
            // lihtml = lihtml + '<article> <h1> <a onclick="getTweetDetails(' + data[i].user.name + "," + data[i].text + "," + data[i].favorite_count + "," + data[i].retweet_count  + ')">' + data[i].user.name + '</a></h1></article>'
            else
            lihtml = lihtml + '<article> <h3><a onclick="getTweetDetails(' + "'" + data[i].user.screen_name + "'" +')">' + data[i].user.name + '</a></h3><h4><a> @' + data[i].user.screen_name + '</a></h4> <p>' + data[i].text + '</p> <br> <p> Likes ' + data[i].favorite_count + '&nbsp;Retweets ' + data[i].retweet_count + '<p> ' + '</article>';
           
        }
        $("#tweetContentId").append(lihtml);

    });

});