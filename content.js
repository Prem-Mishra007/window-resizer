chrome.runtime.onMessage.addListener(function (request) {
    resize(request)
 })
 
 function resize(request) {
    var width = request.width;
    var height = request.height;
    if(width<=0 || height<=0){
        alert("Please enter a positive number");
    }else if(width>window.innerWidth || height>window.innerHeight){
        alert("Please enter a number smaller than the screen size");
    }else{
    window.open(document.URL,'','width='+width+',status=yes,height='+height);
    }
  }