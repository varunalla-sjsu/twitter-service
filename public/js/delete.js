var that = this;

let myPromise1 = new Promise(function (myResolve, myReject) {
    
    $.ajax('/user', {
        // data: JSON.stringify(request),
        contentType: 'application/json',
        method: 'GET'
    }).done(function (data) {
        console.log(data);
        that.userData = data;
        myResolve(); // when successful
    });
});

let myPromise2 = new Promise(function (myResolve, myReject) {
  
    $.ajax('/tweet/' + window.URL.split('/')[2], {

        contentType: 'application/json',
        method: 'GET'
    }).done(function (data) {
        console.log(data);
        that.tweetData = data;
        myResolve(); // when successful
    });

});

Promise.all([myPromise1, myPromise2]).then(function (data) {
    /* tweet.data.createdby === logged in userdata.username{
        //deleteTweetId button---.disabled.
        $('#deletetweetid').hide();
     }
    */
});


$('#deletetweetid').click(function(e){
    
    var txt;
  if (confirm("Are you sure you want to delete the post!!")) {
   // initiate delete Tweet service.. 
   
   $.ajax('/tweet/' + window.URL.split('/')[2], {
    
    contentType: 'application/json',
    method: 'DELETE'
}).done(function (data) {
   alert("Tweet deleted successfully!!");
});


  } else {
    // do nothing...
  }
    
});



