var nd = require('needle')
// var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=cbe60b46335276e8249acddb016f5fbf&language=en-US&page=1"
// nd.get(url, (err, response, body)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(body);
//     }
// })

// var nd = require('needle')
// var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=cbe60b46335276e8249acddb016f5fbf&language=en-US&page=1"
// nd.get(url, (err, response, body)=>{
//     if(err){
//         console.log(err);
//     }else{
//         var results = body.results;
//         for(ele in results){
//             console.log(results[ele].title);
//         }
//     }
// })

// var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1Ijoia2lyYW5tYWkxIiwiYSI6ImNsM28wcWFsdjBpZDAzZXBlN3A2MmdtZG0ifQ.RxsXqfC75C3OsTcaRLiFdw"

// nd.get(url, (err, response, body) => {
//     if(err)
//         console.log(err)
//     else 
//         console.log(body)
// })




// var nd = require('needle')
// var url = "http://api.weatherstack.com/current?access_key=e69fa7c8f863edcaf4bf41aafe269344&query=rajahmundry"
// nd.get(url, (err, response, body)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(body.current.temperature);
//         console.log(body.location.lat);
//         console.log(body.location.lon);
//         var desc  = body.current.weather_descriptions
//         for(ele in desc){
//             console.log(desc[ele]);
//         }
//     }
// })


// for(i = 1;i <=499;i++){
//     var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=cbe60b46335276e8249acddb016f5fbf&language=en-US&page="+i
//     nd.get(url, (err, response, body) =>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             var results  = body.results
//             for(ele in results){
//                 console.log(results[ele].original_language)
//             }
//         }
//     })}

for(i = 1;i <=499;i++){
    var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=cbe60b46335276e8249acddb016f5fbf&language=en-US&page="+i
    nd.get(url, (err, response, body) =>{
        if(err){
            console.log(err)
        }
        else{
            var results  = body.results
            for(ele in results){
                if(results[ele].original_language = "te")
                    console.log(results[ele].title);
            }
        }
    })}