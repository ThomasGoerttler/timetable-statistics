var heightOfOneHour = 30;
var widthtOfOneHour = 150;
var space = 10;
var widthOfHourText = 50;
var subjects;
var alreadySomethingPlaced;

jQuery(document).ready(
function (){

	subjects = data.subjects;
	alreadySomethingPlaced = {};
	for(var i=8; i<=20; i++) {
		createHourDescription(i);
	}

	for(var i=0;i<subjects.length;i++){
		var subject = subjects[i];
		createSubject(subject, subjects);
	 }
   
});

function createHourDescription(i) {
	var div = document.createElement("div");
	div.style.height = heightOfOneHour + "px";
	div.style.width = widthOfHourText + "px";
	div.style.position ="absolute"

	div.style.top = (i-8) * (heightOfOneHour + space )  + "px"
	div.appendChild(document.createTextNode(i))  + "px"

	div.style.backgroundColor = "black"
	div.style.color = "white"
	
	document.getElementById("main").appendChild(div);

}


function createSubject(subject, subjects) {
	
	
	
	for(var i=0;i<subject.lectures.length;i++){
		
		checkSubject(subject.lectures[i]);

		var div = document.createElement("div");
		div.style.height = heightOfOneHour * 2 + space +"px";
		div.style.width = widthtOfOneHour/checkSubject(subject.lectures[i])+"px";
		div.style.position ="absolute"
		var extra = 0;
		
		if(alreadySomethingPlaced[subject.lectures[i].day+subject.lectures[i].time]==1)
			extra = widthtOfOneHour/checkSubject(subject.lectures[i]);
		
		div.style.left = extra + widthOfHourText + space + (subject.lectures[i].day-1) * (widthtOfOneHour+space) +  "px"; 
		div.style.top = ((subject.lectures[i].time-8)) * (heightOfOneHour+space) +  "px"; 
	
		if(!subject.place.localeCompare("HU_WiWi"))
			div.style.backgroundColor = "red";

		if(!subject.place.localeCompare("TU"))
			div.style.backgroundColor = "green";

		if(!subject.place.localeCompare("FU"))
			div.style.backgroundColor = "yellow";

		if(!subject.place.localeCompare("HU_Mathe"))
			div.style.backgroundColor = "blue";

	
		div.appendChild(document.createTextNode(subject.name))
	

		document.getElementById("main").appendChild(div);
		
		if(checkSubject(subject.lectures[i])> 1)
			alreadySomethingPlaced[subject.lectures[i].day+subject.lectures[i].time] = 1;
	}
}

// Checks how many other lectures are on t
function checkSubject (lecture) {
	var onTheSameTime = 0;
	for(var i=0;i<subjects.length;i++){
		for(var j=0;j<subjects[i].lectures.length;j++){
			if(lecture.day == subjects[i].lectures[j].day && Math.abs(lecture.time - subjects[i].lectures[j].time)<2) {
				onTheSameTime++;
				
			}
		
		}
	}
	return onTheSameTime
}

function createLecture(subject, iterator) {
	
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