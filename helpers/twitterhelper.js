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

    async getTweet(tweetId) {
        console.log("Twitter get call.")
        let tweet = await this.client.get("statuses/show", {
            id: tweetId
        });
        console.log("Twitter get call.")
        return tweet;

    }

    async postRetweet(tweetId) {
        console.log("Retweet user.")
        let retweetRes = await this.client.post("statuses/retweet", {
            id: tweetId
        });
        console.log("Retweet initiated.")
        return retweetRes;

    }

}
module.exports= TwitterService;