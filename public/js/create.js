$('#twitterid').click(function(e){
    let textboxcontent=$('#twittertext').val();
    console.log('button clicked' +textboxcontent);
    let request={
        "tweetMessage": textboxcontent
    }
    $.ajax('/tweet',{
            data: JSON.stringify(request),
            contentType: 'application/json',
            method: 'POST'
    }).done(function(data) {
        console.log(data);
        window.location.reload();
    });
    
});