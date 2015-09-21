( function() {
/*
var s0 = document.createElement('script');
s0.type = 'text/javascript';
s0.src = 'https://code.jquery.com/jquery-2.0.3.min.js';
document.head.appendChild(s0);

var s1 = document.createElement('script');
s1.type = 'text/javascript';
s1.src = safari.extension.baseURI + 'bridge.js';
document.head.appendChild(s1);

window.addEventListener('message', function (e) {
    if (e.origin != window.location.origin)
        return;
    console.log(e.data);
}, false);

window.postMessage('What jQuery version?', window.location.origin);
*/
/* var infoHTML = $("#info span.pl:contains(IMDb)").text(); */
/* alert(infoHTML); */
/* 	var infoElement = document.getElementById("info").innerHTML; */
/* 	alert(infoElement); */
/* 	alert(infoElement); */
/* 	alert(safari.application.activeBrowserWindow.tabs[0].url); */
	/*
console.log(safari.application.activeBrowserWindow.tabs[0].url);
	const myGlobal = safari.extension.globalPage.contentWindow;
*/

	var imdbElement = $("#info span.pl:contains(IMDb)").next();
	var imdbURL = "http://www.omdbapi.com/?i=" + imdbElement.text() + "&plot=short&r=json";
	var ratingUsersURL = "http://www.imdb.com/title/" +imdbElement.text() + "/ratings?ref_=tt_ov_rt";
	$.getJSON( imdbURL, function( data ) {
		var imdbRating = data.imdbRating;
		var imdbVotes = data.imdbVotes;
		
		var ratingElement = '<div class="star-box-details"> <span class="pl"> IMDb Ratings: </span> <span class="rating-score">' + imdbRating + '</span><span class="mellow">/<span>10</span></span> from <a href=' + ratingUsersURL + ' target="_blank"> <span>' + imdbVotes + '</span> users</a>&nbsp;<br></div>';
		
		var ratingElementForCh = '<div class="star-box-details"> <span class="pl"> IMDb评分: </span> <span class="rating-score">' + imdbRating + '</span><span class="mellow">/<span>10</span></span> 来自 <a href=' + ratingUsersURL + ' target="_blank"> <span>' + imdbVotes + '</span> 用户</a>&nbsp;<br></div>';
		imdbElement.after(ratingElementForCh);
/* 		imdbElement.after(ratingElementForCh); */
	});
	
}() );