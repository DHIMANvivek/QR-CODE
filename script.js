 'use-strict'

function genQR()
        {
            var gapi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
            var myimg=document.getElementById("img");
            var mytext=document.getElementById("qrtext").value;
            var mysize=document.getElementById("size").value;
         
         for(int i = 1 ; i < mytext ; i++){
          if (mytext!=="" && mysize=="100")
            {
                myimg.src=gapi+"100x100"+"&chl="+mytext;
                // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
            }

            else if(mytext!=="" && mysize=="150")
            {

                myimg.src=gapi+"150x150"+"&chl="+mytext;
            }

            else if(mytext!=="" && mysize=="200")
            {
                myimg.src=gapi+"200x200"+"&chl="+"https://ropsten.etherscan.io/tx/"+mytext;
            }

            else if (mytext!=="" && mysize=="250")
            {
             for(int j = 1 ; j <= i ; j++){
                myimg.src=gapi+"250x250"+"&chl="+i;
             }
            }

            else if (mytext!=="" && mysize=="300")
            {
                myimg.src=gapi+"300x300"+"&chl="+"https://ropsten.etherscan.io/tx/"+mytext;
            }

            else
            {
                alert("Please Enter Text");
            }
         }

           
        
        }
