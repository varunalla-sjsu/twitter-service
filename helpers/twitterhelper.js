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
         return "tweet deleted";
    }

    async deleteTweet(tweetId){

       let response = await this.client.post("statuses/destroy/"+tweetId);
       if(response){
          return true;
       }else
       return false;
    }


}
module.exports= TwitterService;