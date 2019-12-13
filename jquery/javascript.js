function chaos(){
		window.alert("Happy Tack-a-Thon!!!");
		playMusic();
		document.getElementById("dot").style.padding = "50px 25px 50px 25px";
		document.getElementById("dot").style.zIndex = "-100";
		document.getElementById("nav-menu-item-1").classList.add("blinking");
		document.getElementById("nav-menu-item-2").classList.add("blinking");
		document.getElementById("nav-menu-item-3").classList.add("blinking");
		document.getElementById("upload-form").classList.add("bounce");
		document.getElementById("photo-gallery").classList.add("orbit");
		document.getElementById("upload-form").style.position = "absolute";
		document.getElementById("wallpaper").classList.remove("wallpaper");
		document.getElementById("wallpaper").classList.add("backgroundFlicker");
		document.getElementById("inner-photo-gallery").classList.add('bounce');
		document.getElementById("spinning-header").style.display ='block';
		document.getElementById("big-red-button").classList.add("spin");
		setInterval(popupMadness, 100);
	}
function playMusic(){
	var x = document.getElementById("music-box-1");
	var y = document.getElementById("music-box-2");
	var z = document.getElementById("music-box-3");
	x.play();
	y.play();
	z.play();
}

function popupMadness(){
		var x = Math.ceil(Math.random()*1000);
		var y = Math.ceil(Math.random()*1000);
		if (x%2==1){
			window.open("https://jamosclaypool.github.io/popup.html","_blank","toolbar=yes, scrollsbars=yes, resizable=yes, top="+x+", left="+y+",width=200,height=200");
		}else {
			window.open("https://jamosclaypool.github.io/popup2.html","_blank","toolbar=yes, scrollsbars=yes, resizable=yes, top="+x+", left="+y+",width=200,height=200");
		}
}
function openCover(){
	document.getElementById('cover').classList.remove('liftLid');
	void document.getElementById('cover').offsetWidth;
	document.getElementById('cover').classList.add('liftLid');
}