//-------------GET AUTHOR'S STORED SESSION-----------

var authName = sessionStorage.getItem("AuthName");
var author = sessionStorage.getItem("Author");
var authLink = sessionStorage.getItem("AuthLink");

//push URL to change without reloading---------------

window.history.replaceState('new', 'title', authLink);
document.title = authName + " | Figureddit";

//-----------------COUNT ARTICLES-------------------

fetch("https://figureddit.com/store-z7g2sh9/home.json") //only fetch to count articles
.then(function(response){
return response.json();
})
.then(function(data){
        
        var articleCount = 0;
        var max = Object.keys(data).length;
        
        for (var i = max; i >= 1; i-- ) {

            var prevID = data[i];
                for (var i = max; i >= 1; i-- ) {

                    if (prevID[8].toLowerCase() == authName.toLowerCase()) {
                
                        articleCount+=1;
                    }
                }
        }

        document.getElementById("articleCount").innerHTML = "(" + articleCount + " Articles Published)";
    }
);


fetch("https://figureddit.com/store-z7g2sh9/author.json") //fetch all and post all author's details
.then(function(response){
return response.json();
})
.then(function(data){
        
        var max = Object.keys(data).length;
        
        for (var i = max; i >= 1; i-- ) {

            var prevID = data[i];
            
            if(prevID[1].toLowerCase() == author.toLowerCase()) {
                var descAbout = `
                    <h4>${prevID[3]}</h4><br>
                `;

                var profilePic = `<img src="${prevID[5]}" width="120px" height="120px">`;
            }
        }
        document.getElementById("divProfile").innerHTML = profilePic;
        document.getElementById("authorName").innerHTML = prevID[4];
        document.getElementById("descAbout").innerHTML = descAbout;

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

// html no filter show all -----------------------------------------


    var targetClass = document.getElementsByClassName("btnMenu");
		
	//filter by author-------------------------------------------------

	fetch("https://figureddit.com/store-z7g2sh9/home.json")
	.then(function(response){
	return response.json();
	})
	.then(function(data){

		var append = "";
		var max = Object.keys(data).length;

		for (var i = max; i >= 1; i-- ) {
		    var prevID = data[i];
					
			if (prevID != null) {

				if (prevID[8] === authName) {

					formatDate(prevID[7], prevID[5], prevID[6]);

						append += `
								<div class="preview" onclick="window.location='${prevID[0]}'">
									<div class="divThumbnail">
										<img class="thumbnail" src="${prevID[1]}"></img>
									</div>
									<div class="topic">
										<div class="category"><h4>${prevID[2]}</h4></div>
										<div class="title">${prevID[3]}</div>
										<div class="description">${prevID[4].slice(0,106) + "..."}
										</div>
										<p class="date" id="publishDate">BY ${prevID[8].toUpperCase()} &nbsp; ${postDate}</p>
									</div>
								</div>
								<div style="width: 80%; height: 2px; background-color: rgba(0,0,0,0.1); margin-left:auto; margin-right: auto;"></div>
							`;
						}
					}
				}

		document.querySelector("#articles").innerHTML = append;
	});
	
//-----------------REMOVE SESSION STORAGE-----------------

sessionStorage.setItem("AuthName", "");
sessionStorage.setItem("Author", "");
sessionStorage.setItem("AuthLink", "");