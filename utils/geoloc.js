
// Include request Module

var nd = require('needle')


exports.geoloc=function(townvalue,callbackfunc){
var url = "http://api.weatherstack.com/current?access_key=e69fa7c8f863edcaf4bf41aafe269344&query="+townvalue
nd.get(url,(err,response,body)=>{
        if(err)
                callbackfunc(err,null)
        else
                var jasonobj = {"longitude" : body.location.lon, "latitude" : body.location.lat}
                callbackfunc(null,jasonobj)
})
}
   


/* Call request function by sending url and json option with true(See the syntax of request function).
 Implement following steps in the callback request function
 Step 1: if error occurred, then call callbackfunc by sending arguments error and null.
 Step 2 : otherwise if response.body.features.length is 0, then call callbackfunc with error description as 'Error:Invalid Location' and null
 Step 3 : otherwise call callbackfunc with null and json as longitude with value of response.body.features[0].center[0] and latitude with 
        value of response.body.features[0].center[1]
*/



//After request function, Store geoloc function into module.exports.geoloc
