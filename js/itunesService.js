angular.module('itunes').service('itunesService', function($http, $q){

    this.getMusicByArtist = function(artist) {
      var searchResult = $http({
         method: 'JSONP',
         url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
       })

      searchResult.then(function(reply) {
       console.log(reply.data.results);
       var searchResult = reply.data.results;
       for (var v = 0; v < searchResult.length; v++) {
         searchResult[v] = {
           AlbumArt: searchResult[v].artworkUrl100,
           Artist: searchResult[v].artistName,
           Song: searchResult[v].trackName,
           Collection: searchResult[v].collectionName,
           CollectionPrice: searchResult[v].collectionPrice,
           Play: searchResult[v].previewUrl,
           Type: searchResult[v].kind
         }
       }

       return searchResult;
     })

      return searchResult;

    }



    // You need to sort the data you get back from the itunes API to be an object in the following format.
    /*
      AlbumArt: "http://a3.mzstatic.com/us/r30/Features4/v4/22/be/30/22be305b-d988-4525-453c-7203af1dc5a3/dj.srlprmuo.100x100-75.jpg"
      Artist: "Nelly"
      Song: "Ride Wit Me"
      Collection: "Nellyville"
      CollectionPrice: 11.99
      Play: "http://a423.phobos.apple.com/us/r1000/013/Music4/v4/4a/ab/7c/4aab7ce2-9a72-aa07-ac6b-2011b86b0042/mzaf_6553745548541009508.plus.aac.p.m4a"
      Type: "song"
  */
  //the iTunes API is going to give you a lot more details than ng-grid wants. Create a new array and then loop through the iTunes data pushing into your new array objects that look like the above data. Make sure your method returns this finalized array of data.
  // When this is complete, head back to your controller.


});
