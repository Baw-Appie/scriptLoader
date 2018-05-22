// Created by BawAppie@BawDevelopers
// http://baw-service.tistory.com

function loadScript(url){
	var script = document.createElement("script")
	script.src = url
	document.getElementsByTagName("head")[0].appendChild(script)
}
function loadScriptwithCallback(url, callback){
	var script = document.createElement("script")
	if (script.readyState){
		script.onreadystatechange = function(){
			if (script.readyState == "loaded" ||
				script.readyState == "complete"){
				script.onreadystatechange = null;
				callback();
			}
		}
	} else {
		script.onload = function(){
			callback()
		}
	}
	script.src = url
	document.getElementsByTagName("head")[0].appendChild(script)
}
