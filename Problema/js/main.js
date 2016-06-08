/* enter */
document.getElementById("inputBox").addEventListener("keypress", getInputValue);
function getInputValue(){
	document.getElementById("inputBox");
	var inputBoxValue=getTextoValue();
	if(event.keyCode==13){
		doTweet(inputBoxValue);
		clean();
	}
}

/*escribir mensaje*/

function getTextoValue(){
	var inputBox = document.getElementById("inputBox");
	return inputBox.value;
}
function tweet(){
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		doTweet(inputBoxValue);
		clean();
		document.getElementById('tweets').i='#7D7FF5';
	}
}
function doTweet(tweetText) {
	var enviar = document.getElementById("tweets");
/*Hora*/

function doTweet(textHora) {
    var fecha= new Date()
    var hours= fecha.getHours();
    var min= fecha.getMinutes();
    var place = document.getElementById("place");
    var content = '<div id="tweets" type="checkbox" name="vehicle" value="tarea">' + '<p class="hora">' + textHora + '</p>' +'<p class="hora">'+hours+':'+min+'</p>'
    '</div>';
}

	//Creando un elemento
	var elemento = document.createElement("div");
	elemento.className = "enviar";
	elemento.innerHTML =tweetText;
	//Agregar elementos a tweets

	enviar.appendChild(elemento);

	var ex = tweets.lastChild;

}

	function clean() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}