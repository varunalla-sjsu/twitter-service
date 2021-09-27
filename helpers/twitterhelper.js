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

    async getTimeline(){
        let tweets= await this.client.get("statuses/home_timeline",{
            count: 30

        });
        return tweets;
    }

    async getUserDetails(){
        let user= await this.client.get('account/settings');
        return {
           'name': user.screen_name};
    }
}
module.exports= TwitterService;