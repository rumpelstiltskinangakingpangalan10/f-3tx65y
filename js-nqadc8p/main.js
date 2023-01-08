

//------------------DATE FORMAT----------------
var postDate = "";
function formatDate(yyyy, mm, dd) {
	const month = ["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"];
	var published = month[Number(mm)-1] + " " + dd + " " + yyyy;
	postDate = "PUBLISHED " + published;
	
    return postDate;
}

// html no filter show all -----------------------------------------

	var id = sessionStorage.getItem("Category")

	// if session storage Category is not "Home" then filter---------------------

	if ((id !="Home") && (id != null) && (id != "")) {
		var targetID = document.getElementById(id);
		var targetClass = document.getElementsByClassName("btnMenu");

	//filter by category-------------------------------------------------

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

						if (prevID[2] === id) {

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
	}

	else {

		// if session storage Category is "Home" then show all preview---------------------------------

		var targetID = document.getElementById(id);
		var targetClass = document.getElementsByClassName("btnMenu");

		fetch("https://figureddit.com/store-z7g2sh9/home.json")
		.then(function(response){
			return response.json();
		})
		.then(function(data){
				
				
				var append = "";
				var max = Object.keys(data).length;
				
				for (var i = max; i >= 1; i-- ) {
					
					var prevID = data[i];
					
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

			document.querySelector("#articles").innerHTML = append;
		});
	}
	