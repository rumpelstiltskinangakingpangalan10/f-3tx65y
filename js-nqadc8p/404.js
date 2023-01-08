
function redirect() {


    //--------------------prepare 404 countdown function----------------------
    var sec = 10;
    var displayCount = "";
                        

    function countdown() {

        if (sec > 0) {

            sec -= 1;
            displayCount = `
                <p style="color: #474747; text-align: center; letter-spacing: 2px; font-weight: 700; display: block; font-size: 40px;">Content Not Found</p><br>
                <p style="text-align: center; color: #474747;">Seems the content you're looking for does not exist.</p><br>
                <p style="text-align: center; color: #474747;">Returning to home in </p><br>
                <p style="text-align: center; color: #474747; font-weight: 700;">${sec}s</p>`;
                
                document.querySelector("#divContent").innerHTML = displayCount;
            }

        else {
                sessionStorage.setItem("Category", "Home");
                window.location.replace('https://figureddit.com/home');
            }
    }

    //----------------------------------------------------------------------------

    //get the author name from the URL
    var authPath = window.location.pathname;
    var authLink = window.location.href;
    var author = authPath.split('/')[2];
    
    if(authPath.split('/')[1] == "author") {

        //the path is /author/ now check if the author name is valid
        fetch("https://figureddit.com/store-z7g2sh9/author.json") //fetch all and post all author's details
        .then(function(response){
        return response.json();
        })
        .then(function(data){
                
                var max = Object.keys(data).length;
                
                for (var i = max; i >= 1; i-- ) {

                    var prevID = data[i];
                    
                    
                    if(prevID[1].toLowerCase() == author.toLowerCase()) {
                        
                        
                        sessionStorage.setItem("Author", author);
                        sessionStorage.setItem("AuthLink", authLink);
                        sessionStorage.setItem("AuthName", prevID[4]);
                        window.location.href = "https://figureddit.com/author/author";
                    }

                    else {

                        document.title = "404 | Figureddit";
                        document.getElementById("divContent").style.display = "block";
                        setInterval(countdown, 1000);

                    }
                }
               
            }
        );
   
    }

    else {

        document.title = "404 | Figureddit";
        document.getElementById("divContent").style.display = "block";
        setInterval(countdown, 1000);

    }

}