const express = require('express');
const twitterservice = require('./helpers/twitterhelper');
const helpers = require('./helpers/helper');
let app = null;

function createStartExpressServer(router) {
    app = express();
    app.use(express.json());
    app.use(express.static('public'));
    app.use('/', router);
    app.listen(helpers.getServerPort(), function () {
        console.log('Server Started');
    });
}
function createRoutes(twitterserviceclient) {
    let router = express.Router();

    /*
        Route Endpoint to create a tweet
        Developed By: Varun Alla
    */
    router.post('/tweet', async function (req, res) {
        //call twitter helper file for creationg
        let tweetMessage = req.body.tweetMessage;
        console.log(tweetMessage);
        let tweet = await twitterserviceclient.createTweet(tweetMessage);
        if (tweet)
            res.status(200).send({ status: 'success', tweet: tweet });
        else
            res.status(200).send({ status: 'failure', tweet: null })
    });

    router.delete('/tweet/:id', async function (req, res) {
        let tweetId = req.params.id;
        try
        {
            let tweet = await twitterserviceclient.deleteTweet(tweetId);
            if (tweet) {
                res.send('Tweet deleted');
            } else
           
            res.send('Tweet not Deleted');
        }

        catch(err){
            console.log("Error whith deleting.." , err)
        }

      

    });
    router.get('/tweet/:tweetId', async function (req, res) {
        //call twitter helper file for creationg
        console.log("Requested tweet..", req.params.tweetId);
        let tweet = await twitterserviceclient.getTweet(req.params.tweetId);

        res.send(tweet);
    });

    router.get('/retweet/:tweetId', async function (req, res) {
        //call twitter helper file for creationg
        // console.log("Requested tweet..",req.params.tweetId);
        let tweet = await twitterserviceclient.postRetweet(req.params.tweetId);

        var htmlcontent = '<p>' + tweet.text + '</p> <button class="mui-btn mui-btn--primary mui-btn--raised" id="deleteTweetId" onclick="" >Delete</button>';
        var a = document.createElement("p");
        a.innerHTML = htmlcontent;
        res.send(a);

    });
    router.get('/user', async function (req, res) {
        //call twitter helper file for creationg
        // console.log("Requested tweet..",req.params.tweetId);
        let user = await twitterserviceclient.getUserDetails();
        res.send(user);

    });

    router.get('/timeline',async function(req,res){
        let tweets=await twitterserviceclient.getTimeline();
        res.send(tweets);
    })
    return router;
}

try {
    let config = helpers.getTwitterClientConfig();
    let twitterserviceclient = new twitterservice(config);
    let router = createRoutes(twitterserviceclient);
    createStartExpressServer(router);
}
catch (error) {
    console.log('Could not start server. ', error)
}
module.exports = app;