const helpers=require('../helpers/helper');
const chai=require('chai');
let expect=chai.expect;
describe("Server Startup Test Suite",function(){
    it("Test if valid port is being initialized",function(){
        expect(helpers.getServerPort()).to.be.equal(3000);
    });
})