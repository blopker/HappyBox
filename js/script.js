/* Author:
 me
 */

var HappyBox = (function() {

	var colors = [];
	var seed = [0, 63, 127, 190, 255];

	var load = function(){
		updateSeed();
		makeColors();
		var change = makePixels();
		document.getElementById("main").onmousemove = (function(e){
			change(e.clientX,e.clientY);
			});
			
		document.addEventListener('touchmove', function(e) {
			event.preventDefault();
			var touch = event.touches[0];
			change(touch.pageX,touch.pageY);
		}, false);

		var previousOrientation = 0;
		function checkOrientation() {
			if(window.orientation !== previousOrientation) {
				previousOrientation = window.orientation;
				refresh();
			}
		}

		function refresh() {
			change = makePixels();
		}

		window.addEventListener("resize", refresh, false);
		window.addEventListener("orientationchange", checkOrientation, false);
		// setInterval(checkOrientation, 2000);
	};

	function updateSeed(){
		GET('/color', function (oEvent, oXHR) {
			if (oXHR.status === 200) {
				seed = eval("("+oXHR.responseText+")").colors;
				makeColors();
			} else {
				console.log("Error", oXHR.statusText);
			}
		});
	}

	function GET(path, callback){
		POST(path, null, callback);
	}

	function POST(path, data, callback){
		var method = 'POST';
		if(data === null){
			method = 'GET';
		}

		var oXHR = new XMLHttpRequest();
		oXHR.open(method, path, true);
		oXHR.onreadystatechange = function(event){
			if (oXHR.readyState === 4) {
				callback(event, oXHR);
			}
		};
		oXHR.send(data);
	}

	function makeColors(){
		var rnd = Math;
		var color;
		var len = seed.length;
		var tempColor = [];
		for (var r = len - 1; r >= 0; r--) {
			for (var b = len - 1; b >= 0; b--) {
				for (var g = len - 1; g >= 0; g--) {
					color = "rgb(";
					color += seed[r];
					color += ",";
					color += seed[b];
					color += ",";
					color += seed[g];
					color += ")";
					tempColor.push(color);
				}
			}
		}
		colors = tempColor;
	}

	function getColor(){
		var rnd = Math;
		var color = colors[rnd.floor(rnd.random() * colors.length)];
		return color;
	}

	function getURL(colorArray){
		var path = '/color/'+colorArray[0]+'/'+colorArray[1]+'/'+colorArray[2];
		GET(path, function(event, oXHR){
			if (oXHR.status === 200) {
				var URL = eval("("+oXHR.responseText+")").url;
				alert(URL);
			} else if(oXHR.status === 204){
				newColorFound(colorArray);
			} else {
				console.log("Error", oXHR.statusText);
			}
		});
	}

	function newColorFound(colorArray){
		
	}

	function rgbToArray(rgb){
		return rgb.slice(4,-1).split(', ');
	}

	var makePixels = function(){
		// The edge of the longest screen size has at most ONE_SIDE divs.
		var ONE_SIDE = 15;
		var winW = window.innerWidth,
		winH = window.innerHeight,
		main = document.getElementById("main"),
		parent = main.parentNode,
		next = main.nextSibling,
		lastX = 0,
		lastY = 0;

		parent.removeChild(main);
		while (main.hasChildNodes()){
			main.removeChild(main.lastChild);
		}

		var max = Math.max(winW,winH);
		var pixSide = Math.floor(max/ONE_SIDE);
		main.style.width = winW+pixSide+"px";
		var numPix = (ONE_SIDE+1)*Math.ceil((winH+pixSide)/pixSide);
		
		for (var i = 0; i < numPix; i++){
			var div = document.createElement("div");
			div.className = "pixel";
			var style = div.style;
			style.backgroundColor = getColor();
			style.width = pixSide+"px";
			style.height = pixSide+"px";
			main.appendChild(div);
			setDivListeners(div);
		}

		parent.insertBefore(main, next);
		var childList = main.childNodes;
		var len = childList.length;
		
		return function(x,y) {
			if(x === lastX && y === lastY){
				return;
			}
			lastX = x;
			lastY = y;
			for(var i = len - 1; i >= 0; i--) {
				childList[i].style.backgroundColor = getColor();
			}
		};
	};

	function setDivListeners(div){
		div.addEventListener('click', clickListener);
		div.addEventListener('mouseover', hoverListener);
		div.addEventListener('mouseout', outListener, false);
	}

	function clickListener(e){
		getURL(rgbToArray(this.style.backgroundColor));
	}

	function hoverListener(e){
		this.className = "pixel shadow";
	}

	function outListener(e){
		this.className = 'pixel';
	}

	return {
		load: load
	};

}());

if (window.addEventListener) { // Mozilla, Netscape, Firefox
	window.addEventListener('load', HappyBox.load(), false);
} else if (window.attachEvent) { // IE
	window.attachEvent('onload', HappyBox.load());
}

