var authLink = "";

//-----------GENERATE AUTHOR DETAILS---------------

//revise author's name + link after title

fetch("https://figureddit.com/store-z7g2sh9/author.json") //only fetch to change author's hyperlink
.then(function(response){
return response.json();
})
.then(function(data){
        
        
        var max = Object.keys(data).length;
        var author = document.getElementById("authorName").innerHTML;
        
        for (var i = max; i >= 1; i-- ) {

            var prevID = data[i];

            if (prevID[4].toLowerCase() == author.toLowerCase()) {
                
                var authorLink = `BY <a class="two" href="${prevID[0]}" id="authorName">${prevID[4].toUpperCase()}</a>`;
            }
        }

        document.getElementById("publisher").innerHTML = authorLink;
    
    }
        
);

//------------------DATE FORMAT----------------
var postDate = "";
function formatDate(yyyy, mm, dd) {
	const month = ["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"];
	var published = month[Number(mm)-1] + " " + dd + " " + yyyy;
	postDate = "PUBLISHED " + published;
	
    return postDate;
}

//------------------PUBLISH DATE---------------------

fetch("https://figureddit.com/store-z7g2sh9/home.json") //only fetch published date
.then(function(response){
return response.json();
})
.then(function(data){

        var max = Object.keys(data).length;
        var title = document.getElementById("articleTitle").innerHTML;

        for (var i = max; i >= 1; i-- ) {
            
            var prevID = data[i];

            if (prevID[3].toLowerCase() == title.toLowerCase()) {
                
                formatDate(prevID[7], prevID[5], prevID[6]);
                
            } 
        }

        document.getElementById("publishDate").innerHTML = postDate;
    }
);



 //-----------------COUNT ARTICLES-------------------

fetch("https://figureddit.com/store-z7g2sh9/home.json") //only fetch to count articles
.then(function(response){
return response.json();
})
.then(function(data){
        
        var articleCount = 0;
        var max = Object.keys(data).length;
        var title = document.getElementById("articleTitle").innerHTML;
        var author = document.getElementById("authorName").innerHTML;
        
        for (var i = max; i >= 1; i-- ) {

            var prevID = data[i];

            if (prevID[3].toLowerCase() == title.toLowerCase()) {
                author = prevID[8];

                for (var i = max; i >= 1; i-- ) {

                    if (prevID[8].toLowerCase() == author.toLowerCase()) {
                
                        articleCount+=1;
                    }
                }
            }
        }
        
        var header = `
                <h4>by ${prevID[8]}</h4> &nbsp;
                <h5> | ${articleCount} Articles Published</h5>
                `;

        document.getElementById("descHeader").innerHTML = header;
    }
);


fetch("https://figureddit.com/store-z7g2sh9/author.json") //fetch all and post all author's details
.then(function(response){
return response.json();
})
.then(function(data){
        
        var author = document.getElementById("authorName").innerHTML;

        var max = Object.keys(data).length;
        
        for (var i = max; i >= 1; i-- ) {

            var prevID = data[i];
            
            if(prevID[4].toLowerCase() == author.toLowerCase()) {

                authLink = prevID[0];

                var descAbout = `
                <h4>${prevID[3].slice(0,166) + "..."}</h4><br>
                <h5>More from ${prevID[4]}..</h5>
                `;

                var profilePic = `<img src="${prevID[5]}" width="100px" height="100px">`;
            }
        }

        document.getElementById("divProfile").innerHTML = profilePic;
        document.getElementById("descAbout").innerHTML = descAbout;

        return authLink;
    }
);


// on click go to author's page

function goToAuthor() {

    location.href = authLink;
}

//---------GENERATE RANDOM RELATED ARTICLES----------

var randArray = [];

//generate random number
function genRandom(min, max) {

    var step1 = max-min+1;
    var step2 = Math.random() * step1;
    var result = Math.floor(step2) + min;

    return result;
}

fetch("https://figureddit.com/store-z7g2sh9/home.json")
.then(function(response){
return response.json();
})
.then(function(data){
        
        var append = "";
        var max = Object.keys(data).length;
        
        while(randArray.length < 4) {

            //generate number from 0-max JSON objects---
            var r = genRandom(1,max);

            //check if random number already exist in array---

            if(randArray.indexOf(r) === -1) {
                
                randArray.push(r);

                prevID = data[r];

                append += `
                <div class="nextArticle">
                <div class="nextThumbnail">
                    <img src ="${prevID[1]}">
                </div>
                <h3>${prevID[3]}</h3>
                </div>
            `;

            }
        }

        document.querySelector("#readNext").innerHTML = append;
        }

);
