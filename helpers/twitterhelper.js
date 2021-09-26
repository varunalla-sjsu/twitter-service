const twitterlite=require('twitter-lite');
const helpers=require('./helper');
class TwitterService {
    constructor(config){
            this.client = new twitterlite(config);
    }
    
    async createTweet(tweetMessage){
        return await this.client.post('statuses/update',{
            status:tweetMessage
        });
    }

    async deleteTweet(tweetId){

       let response = await this.client.post("statuses/destroy/"+tweetId);
       if(response!=null){
          return true;
       }else
       return false;
    }

    async getTweet(tweetId) {
        let tweet = await this.client.get("statuses/show", {
            id: tweetId
        });
        return tweet;

    }

    async postRetweet(tweetId) {
        let retweetRes = await this.client.post("statuses/retweet", {
            id: tweetId
        });
        return retweetRes;

    }

}
module.exports= TwitterService;