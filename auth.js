$(function() {
  $("form").on("submit",function(e){
                e.preventDefault();
                var request = gapi.client.youtube.search.list({
                                                                part : "snippet",
                                                                type : "video",
                                                                q : encodeURIComponent($("#search").val()).replace(/%20/g,"+"),
                                                                maxResults : 10,
                                                                order : "viewcount",
                                                                publishAfter : "2015-01-01T00:00:00Z"
                                                                });
               request.execute(function(response){
                               console.log(response);
                               });
               });
});

function init(){
    gapi.client.setApiKey("AIzaSyBTcsHWelsFsaSFDdGxrgMHa-PAUhyMMko");
    gapi.client.load('youtube', 'v3', function(){
                     })
    
}



