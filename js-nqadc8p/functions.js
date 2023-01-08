//------------------DATE FORMAT----------------
var postDate = "";
function formatDate(yyyy, mm, dd) {
	const month = ["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"];
	var published = month[Number(mm)-1] + " " + dd + " " + yyyy;
	postDate = "PUBLISHED " + published;
	
    return postDate;
}

//html mouseover buttons----------------------------------------------

function hoverCategory(id) {
	var target = document.getElementById(id);
	var cat = sessionStorage.getItem("Category");
	//if (cat != id) {
	target.firstElementChild.style.color = "#474747";
	target.style.backgroundColor = "lightgrey";
	//}
	//else {
		//target.style.backgroundColor = "white";
	//}
}

//html mouseout buttons-----------------------------------------------

function outCategory(id) {
	var target = document.getElementById(id);
	target.firstElementChild.style.color = "#474747";
	target.style.backgroundColor = "white";
}

// html filter by categories------------------------------------------

function filterCategory(id) {
	sessionStorage.setItem("Category", id);
	//change button colors upon clicking 
	window.location.href = "https://figureddit.com"
}


// html using search filter ----------------------------------------


function useSearch(val) {

	var listBox = document.getElementById("searchList");

	if ((val != null) && (val != "") && (val.length > 2)) {

		fetch("https://figureddit.com/store-z7g2sh9/home.json")
		.then(function(response){
		return response.json();
		})
			.then(function(data){
				
				
				var append = "";
				var countMatch = 0;
				var max = Object.keys(data).length;
				
				for (var i = max; i >= 1; i-- ) {
					var prevID = data[i];

					if (prevID[3].toLowerCase().includes(val.toLowerCase())) {

						countMatch += 1;
						

						if (countMatch > 0 ) {

							listBox.style.display = "block";

							append += `
								<div class="itemList" onclick="window.location='${prevID[0]}'"><h5>${prevID[3]}</h5></div>
								`;
						}

						else {
							listBox.style.display = "none";
								
						}
					}	
				}

				document.querySelector("#searchList").innerHTML = append;
		});
	}

	else {
		listBox.style.display = "none";
	}
}


// html show results upon enter--------------------------------------------

function enterSearch(event, val) {

	if ((event.key === "Enter") && (val!= "") && (val != null)) {

		fetch("https://figureddit.com/store-z7g2sh9/home.json")
		.then(function(response){
			return response.json();
		})
		.then(function(data) {
				
			var append = "";
			var countMatch = 0;
			var max = Object.keys(data).length;

			for (var i = max; i >= 1; i-- ) {

				var prevID = data[i];
					
					if (prevID[3].toLowerCase().match(val.toLowerCase())) {

						formatDate(prevID[7], prevID[5], prevID[6]);

						countMatch +=1;

						if (countMatch != 0) {

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

						else {
							window.location='404';
						}
						
					}
				
					else {
						window.location='404';
					}
				}

				document.querySelector("#articles").innerHTML = append;

		});
	}
}


// show submenu -----------------------------------------
var menuVisible = false;
var menu = document.getElementById("menu");
menu.style.left = "-300px"
function funcMenu()
{
	if (menuVisible == false) {
		menu.style.left = "0";
		document.getElementById("showMenu").style.backgroundColor = "rgba(255,255,255,.05)";
		document.body.style.overflowY = "hidden"
		menuVisible = true;
	}
	else {
		menu.style.left = "-300px"
		document.getElementById("showMenu").style.backgroundColor = "#474747";
		menuVisible = false;
		document.body.style.overflowY = "auto"	
	}

}


function bodyFocus() {
	menu.style.left = "-300px"
	document.getElementById("showMenu").style.backgroundColor = "#474747";
	menuVisible = false;
	document.body.style.overflowY = "auto"	
}

