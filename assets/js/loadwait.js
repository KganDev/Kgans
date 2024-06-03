document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
         document.getElementById('contentsnav').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           document.getElementById('loadnav').style.visibility="hidden";
           document.getElementById('contents').style.visibility="visible";
           document.getElementById('contentsnav').style.visibility="visible";
        },1000);
    }
  }