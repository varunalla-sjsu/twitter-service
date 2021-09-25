const twitterlite=require('twitter-lite');
const helpers=require('./helper');
let client=null;
function createTwitterClient(){
    try{
        let config=helpers.getTwitterClientConfig();
        client = new twitterlite(config);
        return true;
    }
    catch(clientCreateErr){
        throw clientCreateErr;
    }
}
function createTweet(tweetMessage){
    
}
module.exports={
    createTwitterClient
}