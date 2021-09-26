const twitterlite=require('twitter-lite');
const helpers=require('./helper');
class TwitterService {
    constructor(){
        try{
            let config=helpers.getTwitterClientConfig();
            this.client = new twitterlite(config);
            return true;
        }
        catch(clientCreateErr){
            throw clientCreateErr;
        }
    }
    
    createTweet(tweetMessage){
        console.log('Tweet service requested');
    
    }

}
module.exports= TwitterService;