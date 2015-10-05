var heightOfOneHour = 40
var heightOfWeekday = 70
var widthtOfOneHour = 250
var width = 1100 // 1200 - width of hour
var space = 1
var widthOfHourText = 50
var subjects

var start = true

jQuery(document).ready(
	function() {
		refresh()
		$( document ).tooltip();
	});
	
function refresh() {

	$('#selectionarea1').empty()
	$('#selectionarea2').empty()
	$('#selectionarea3').empty()
	$('#timetablewrapper').empty()
	subjects = data.subjects
	
	// Just for testing
	if (start) { 		
		for (var i = 0; i < subjects.length; i++) {
			if (Math.random() < 0.75) {
				subjects[i].taken = false
			}
		}
		start = false
	}
	
	var timetableModel = createNewTimetable(subjects)
	showSelectionArea()
	createHorizontalLinesAndHourDescription();
	showTimetable(timetableModel)
	
}

function createHorizontalLinesAndHourDescription() {
	for (var i = 0; i <= 12; i++) {
		
		//horizontal line
		var horizontalLine = createDiv("line")
		horizontalLine.style.height = space + "px"
		horizontalLine.style.width = width + "px"
		horizontalLine.style.top = heightOfWeekday + i * (heightOfOneHour) + (i-1) * space + "px"
		horizontalLine.style.left = widthOfHourText + "px"
		document.getElementById("timetablewrapper").appendChild(horizontalLine);

		// Maybe
		var time = i+8
		var timeString = ""
		if(time > 12)
			timeString = time - 12 + " pm"
		else
			timeString = time + " am"
				
		// Hour description TODO can be refactored and made better
		var hour = createDiv("hour")
		hour.style.height = heightOfOneHour + "px";
		hour.style.width = widthOfHourText + "px";
		hour.style.top = heightOfWeekday + (i -0.5) * (heightOfOneHour + space) + "px"
		hour.appendChild(document.createTextNode(time));
		document.getElementById("timetablewrapper").appendChild(hour)
		
		var hourEnd = createDiv("hour")
		hourEnd.style.height = heightOfOneHour + "px";
		hourEnd.style.width = widthOfHourText + "px";
		hourEnd.style.left = 50 + width + "px"
		hourEnd.style.top = heightOfWeekday + (i -0.5) * (heightOfOneHour + space) + "px"
		hourEnd.appendChild(document.createTextNode(time));
		document.getElementById("timetablewrapper").appendChild(hourEnd)
		
	}
}

/*
* Shows the timetable, after given it the timetable model.
*/
function showTimetable(timetable) {
	
	var containerDiv = document.getElementById("timetablewrapper")

	// First vertical Line
	var verticalLine = createDiv("line")
	verticalLine.style.width = space + "px"
	verticalLine.style.height = 12 * (heightOfOneHour + space) + "px"
	verticalLine.style.top = heightOfWeekday + "px"
	verticalLine.style.left = widthOfHourText + "px"
	containerDiv.appendChild(verticalLine);
	
	var columnNumber = 0 // Iterator over the day columns.
	
	var creditsSum = createDiv("creditsSum")
	creditsSum.appendChild(document.createTextNode(timetable.creditSum + " SP"))
	containerDiv.appendChild(creditsSum)
	
	timetable.weekdays.forEach(function(weekday) {
		
		var weekdayDiv = createDiv("weekday")
		weekdayDiv.style.width = width/timetable.columns * weekday.dayColumns.length  - space + "px"
		weekdayDiv.style.left = widthOfHourText + space + columnNumber * width/timetable.columns + "px"
		weekdayDiv.appendChild(document.createTextNode(weekday.name))
		containerDiv.appendChild(weekdayDiv);
		
		weekday.dayColumns.forEach(function(dayColumn) {
			
			// Each lecture in the day column
			dayColumn.forEach(function(hour) {
				if(hour != null && hour !== "notNull") {
					var lecture = createDiv("lecture")
					var lectureWidth = width/timetable.columns - space - 4
					lecture.title = "Name: " + hour.subject.name + "\n"
						+ "Uni: " + hour.subject.university + "\n"
						+ "Address: " + hour.subject.address + "\n"
						+ "Lecturer: " + hour.subject.lecturer + "\n"
						+ "category: " + hour.subject.category  + "\n"
					
						+ "Room: " + hour.lecture.room  + "\n"
						+ "SP: " + hour.subject.sp + "\n"
						+ "Type: " + hour.lecture.type + "\n"
						+ "annotation: " + hour.subject.annotation + "\n"
						+ "language: " + hour.subject.language + "\n"
						+ "has an alternative date: " + hour.subject.hasAlternative + "\n"
					
					lecture.style.height = heightOfOneHour * hour.lecture.duration + (hour.lecture.duration - 1) * space - 4 +"px" // - 4 for padding
					lecture.style.width = lectureWidth + "px" // 4 for padding
					lecture.style.left = widthOfHourText + space + columnNumber * (width/timetable.columns )+  "px"
					lecture.style.top = heightOfWeekday + (hour.lecture.startTime-8) * (heightOfOneHour+space) + "px"
					lecture.setAttribute("id", hour.subject.university)
					
					// Title
					var title = createDiv("title")
					title.appendChild(document.createTextNode( stringTillEnd(hour.subject.name, (lectureWidth-20)/6) ))

					if (hour.lecture.duration == "4")
						title.style.marginTop = "48px"
					lecture.appendChild(title)
					
					// Lecturer
					var lecturer = createDiv("lecturer")
					lecturer.appendChild(document.createTextNode( stringTillEnd(hour.subject.lecturer, (lectureWidth-20)/5) ))
					lecture.appendChild(lecturer)
					
					// Room number
					var room = createDiv("lecturer")
					room.appendChild(document.createTextNode( stringTillEnd(hour.lecture.room, (lectureWidth-20)/5) ))
					lecture.appendChild(room)
					
					if(lectureWidth > 85) {
						//Icon Container 
						var iconContainer = createDiv("iconContainer")
						
						if (hour.lecture.duration == "4")
							iconContainer.style.marginTop = "41px"
					
						//credits
						var credits = createDiv("credits")
						if(hour.subject.sp !== "-1")
							credits.appendChild(document.createTextNode(hour.subject.sp))
						else
							credits.appendChild(document.createTextNode("?"))
						iconContainer.appendChild(credits)
					
						//Type of the lecutre
						var type = createDiv("lectureType")
						type.appendChild(document.createTextNode(hour.lecture.type))
						iconContainer.appendChild(type)
					
						// maybe text
						var spacer = createDiv("spacer")
						spacer.style.width = lectureWidth - 4 * 20.5 + "px"
						if (hour.lecture.hasAlternative)
							spacer.appendChild(document.createTextNode("! "))
						iconContainer.appendChild(spacer)
					
						//weekly
						var weekly = createDiv("oneWeek")
						if (hour.subject.twoWeeks)
							weekly.className = "twoWeek"
						iconContainer.appendChild(weekly)
					
						// Language
						var language = createDiv("germanImage")
						if (hour.subject.language === "english")
							language.className = "englishImage"
						iconContainer.appendChild(language)
						
						lecture.appendChild(iconContainer)
					}
					
					// console.log(hour)
					containerDiv.appendChild(lecture);
				}
			})
			
			// Vertical Line after Day Column
			var verticalLine = createDiv("line")
			verticalLine.style.width = space + "px"
			verticalLine.style.height = 12 * (heightOfOneHour + space) + "px"
			verticalLine.style.top = heightOfWeekday + "px"
			verticalLine.style.left = widthOfHourText + (columnNumber + 1) * (width/timetable.columns )+ "px"
			containerDiv.appendChild(verticalLine);
			
			columnNumber += 1
		})
	})
}

function stringTillEnd(text, count) {
	if (text.length <= count)
		return text
	var newText = text.substr(0,count-3)
	newText += "..."
	return newText
}

function createDiv(cssClass) {
	var div = document.createElement("div");
	div.setAttribute("class", cssClass);
	return div;
}


function showSelectionArea() {
	createSelectionArea()
}

/*
* Creates the selection area.
*/
function createSelectionArea() {
	subjects = data.subjects
	categories = data.categories

	var columnNumber = 1
	categories.forEach( function(category){

		var timetablewrapperCategoryArea = "";
		
		if(category.sub == undefined) {
		// No subcategories exist, so this is a own category
			subjects.forEach(function(subject) {
				if (category.main == subject.category)
					timetablewrapperCategoryArea += createCheckboxEntry(subject);
			});
		} else {
			category.sub.forEach(function(subcategory){
			// Go through all sub categories
				var appendix = ""
				// console.log(category)
				subjects.forEach(function(subject) {
					if (category.main == subject.category && subcategory.name == subject.subcategory)
						appendix += createCheckboxEntry(subject)
				});
				if(appendix != "") {
					appendix = '<h5>' + createSubcategory(subcategory) + '</h5>' + appendix 
					timetablewrapperCategoryArea += appendix
				}
			});
		}
		// console.log("cat area: " + timetablewrapperCategoryArea)
		if (timetablewrapperCategoryArea != "") {
			timetablewrapperCategoryArea = '<h3>' + category.main + '</h3>' + timetablewrapperCategoryArea
			$('#selectionarea' + columnNumber).append(timetablewrapperCategoryArea)
			// console.log(document.getElementById("timetablewrapper"))
		}
		if (category.break)
			columnNumber++
	})
	
	$(".subjectsCheckbox").change(function() {
		console.log("Hallo 4")
		console.log($(this).attr('id'))
		console.log(this.checked)
		setTaken($(this).attr('id'), this.checked)
		refresh(false);
	});
}

/*
* Creates the string for a subcategory header
*/
function createSubcategory(subcategory) {
	var string = subcategory.name +  " ("
	if (subcategory.sp_range.length == 1) {
		string += subcategory.sp_range[0] + " SP" + ")"
	} else {
		string += subcategory.sp_range[0] + " SP - " + subcategory.sp_range[1] + " SP)"
	}
	return string
}

/*
* Creates the string for a checkbox entry
*/
function createCheckboxEntry(subject) {
	var string = ""
	var credits = "?"
	if (subject.sp != -1)
		credits = subject.sp
	string += '<label class="myCheckbox">'
		+'<input class="subjectsCheckbox" type="checkbox" name="test" id="' + subject.name 
		+ '" value=' + subject.taken + ' ' 
		+ checked(subject.taken) + '/> <span id="' + subject.university + '_Span" ></span></label><label for="test"> ' 
		+ subject.name 
		+ " (" + credits + " SP)" 
		+ '</label> </br>'
	return string;
}

/*
* Returns a checked string if checked is true, else empty String
*/
function checked(bool) {
	if (bool)
		return "checked"
	else
		return ""
}


function setTaken(subjectName, bool) {
	for (subject in subjects) {
		if (subjects[subject].name == subjectName) {
			subjects[subject].taken = bool;
			// console.log("Changed: " + subjects[subject].name)
		}
	}
}
