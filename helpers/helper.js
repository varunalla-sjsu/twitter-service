
function checkStartupReq(){
    if(process.env.consumer_key&&process.env.consumer_secret&&process.env.access_token_key &&process.env.access_token_secret){
        return true;
    }
    else{
       throw new Error('Please Setup the twitter api properties');
    }
}
function getServerPort(){
    return parseInt(process.env.serverPort || 3000);
}
function getTwitterClientConfig(){
   
    if(checkStartupReq()){
        return {
            subdomain: "api", // "api" is the default (change for other subdomains)
            version: "1.1",
            consumer_key: process.env.consumer_key, // from Twitter.
            consumer_secret: process.env.consumer_secret, // from Twitter.
            access_token_key: process.env.access_token_key,
            access_token_secret: process.env.access_token_secret
        }
    }
}

module.exports={
    getTwitterClientConfig,
    getServerPort
}