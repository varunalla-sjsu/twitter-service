const express=require('express');
const twitterhelper=require('./helpers/twitterhelper');
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
function createRoutes(){
    let router=express.Router();
    /*
        Route Endpoint to create a tweet
        Developed By:
    */
    router.get('/tweet',function(req,res){
        //call twitter helper file for creationg
        res.send('Hello World!!!')
    });
    return router;
}
let router=createRoutes();
try{
    if(twitterhelper.createTwitterClient()){
        createStartExpressServer(router);
    }
}
catch(error){
    console.log('Could not start server. ',error)
}
