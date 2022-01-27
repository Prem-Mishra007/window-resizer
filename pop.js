document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false)
     
      function onclick () {
        var width=document.getElementById("width").value;
        var height=document.getElementById("height").value;
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {"width":width,"height":height})
        })
      }
   }, false)
   