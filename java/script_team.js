let switchMode = document.getElementById("switchMode");
var playlist = document.getElementById("video");
var source = document.getElementById("vid-src");

switchMode.onclick = function () {

 var filename = '';

	let theme = document.getElementById("team");

	if (theme.getAttribute("href") == "css/white_style.css") {
		theme.href = "css/dark_style.css";
		
		source.src = "video/AdobeStock_379469817.mov";

	} else {
		source.src = "video/AdobeStock_367159485.mov"
		theme.href = "css/white_style.css";
	}

    playlist.load();
    playlist.play();
}
