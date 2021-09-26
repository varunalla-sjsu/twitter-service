const express=require('express');
const twitterservice=require('./helpers/twitterhelper');
const helpers=require('./helpers/helper');
let app=null;

function createStartExpressServer(router){
    app=express();
    app.use(express.json());
    app.use(express.static('public'));
    app.use('/',router);
    app.listen(helpers.getServerPort(),function(){
        console.log('Server Started');
    });
}
function createRoutes(twitterserviceclient){
    let router=express.Router();
    
    /*
        Route Endpoint to create a tweet
        Developed By:
    */
    router.get('/tweet',function(req,res){
        //call twitter helper file for creationg
        twitterserviceclient.createTweet();
        res.send('Hello World!!!')
    });
    return router;
}

try{
    let twitterserviceclient=new twitterservice();
    let router=createRoutes(twitterserviceclient);
    createStartExpressServer(router);
}
catch(error){
    console.log('Could not start server. ',error)
}
