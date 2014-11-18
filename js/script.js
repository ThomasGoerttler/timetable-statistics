

jQuery(document).ready(
function (){

	scores = data.scores;

	for(var i=0;i<scores.length;i++){
		var score = scores[i]
		document.getElementById("main").appendChild(createScore(score));
	 }

   
});


function createScore(score) {
	
	var element = createDiv("element", null)
	var image = createDiv("image", score.year)
	var text = createText(score)

	element.appendChild(image)
	element.appendChild(text)
	return element
}

function createDiv(cssClass, content) {
	var div = document.createElement("div");
	div.setAttribute("class", cssClass);
	if(content != null)
		div.appendChild(document.createTextNode(content));	
	return div;
}

function createText(score) {
	var text = createDiv("text", null)
	var titleDiv = createDiv("title", null)
	var link = document.createElement("a")
	link.setAttribute("href", score.pdf)
	link.setAttribute("target","_blank")
	
	link.appendChild(document.createTextNode(score.title))
	titleDiv.appendChild(link)
	text.appendChild(titleDiv)
	var info = createInformation(score)
	text.appendChild(createDiv("info", info))
	var parts = ""
	for (var i=0; i<score.parts.length; i++) {
		if (i>0)
			parts = parts + ", "
		parts = parts + score.parts[i]
	}
	text.appendChild(createDiv("parts", parts))
	return text
	
}

function createInformation(score) {
	var text = ""
	if(score.composer != null)
		text = text + "Komponist: " + score.composer + " | "
	if(score.melodie != null)
		text = text + "Meoldie: " + score.melodie + " | "
	if(score.text != null)
		text = text + "Text: " + score.text + " | "
	if(score.measures != null)
		text = text + score.measures + " Takte | "
	if(score.pages != null)
		text = text + score.pages + " Seiten "
	return text;
}