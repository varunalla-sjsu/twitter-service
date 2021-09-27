const helpers=require('../helpers/helper');
const twitterClient=require('../helpers/twitterhelper')
const chai=require('chai');
let expect=chai.expect;
describe("Test Twitter Integration",function(){
    let twitterclient;
    let tweetId;
    before(function(){
        let config=helpers.getTwitterClientConfig();
        this.twitterclient=new twitterClient(config);
    });
    
    it("Try Fetching user Settings",async function(){
        let user=await this.twitterclient.getUserDetails();
        expect(user).to.be.not.null;
    });
    it("Make sure tweet can be sent",async function(){
        let tweet=await this.twitterclient.createTweet("mocha test tweet"+Math.random(0,1));
        this.tweetId=tweet.id_str;
        expect(tweet).to.be.not.null;
    });
    it("Make Sure re Tweet",async function(){
        let tweet=await this.twitterclient.postRetweet(this.tweetId);
        expect(tweet).to.be.not.null;
    });

    it("Make Sure delete Tweet",async function(){
        let tweet=await this.twitterclient.deleteTweet(this.tweetId);
        expect(tweet).to.be.equal(true);
    });
});
