 'use-strict'

function genQR(){
    var gapi = "https://chart.apis.google.com/chart?cht=qr&chs=";
    var myimage = document.getElementById("img");
    var mytext = document.getElementById("qrtext").value;
    var mysize = document.getElementById("size").value;

    if(mytext!=""&& mysize=="100"){

        myimage.src = gapi+"100x100"+"&ch1="+mytext;
    }
       else if(mytext!=""&& mysize=="150"){

        myimage.src = gapi+"150x150"+"&ch1="+mytext;
    }
     else  if(mytext!=""&& mysize=="200"){

        myimage.src = gapi+"200x200"+"&ch1="+mytext;
    }

    else  if(mytext!=""&& mysize=="250"){

        myimage.src = gapi+"250x250"+"&ch1="+mytext;
    }

    else  if(mytext!=""&& mysize=="300"){

        myimage.src = gapi+"300x300"+"&ch1="+mytext;
    }
    else{
        alert("please enter text then click on button");
    }
}