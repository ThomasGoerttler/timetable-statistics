var heightOfOneHour = 40
var heightOfWeekday = 70
var widthtOfOneHour = 250
var width = 1150 // 1200 - width of hour
var space = 1
var widthOfHourText = 50
var subjects

jQuery(document).ready(
	function() {
		refresh(true)
	});
	
function refresh(noCheckboxes) {


	$('#selectionarea').empty()
	$('#timetablewrapper').empty()
	subjects = data.subjects;
	var timetableModel = createNewTimetable(subjects)
	showSelectionArea()
	createVerticalLinesAndHourDescription();
	showTimetable(timetableModel)
	
}

function createVerticalLinesAndHourDescription() {
	for (var i = 0; i <= 12; i++) {
		
		//vertikal line
		var line = createDiv("line")
		line.style.height = space + "px"
		line.style.width = width + "px"
		line.style.top = heightOfWeekday + i * (heightOfOneHour) + (i-1) * space + "px"
		line.style.left = widthOfHourText + "px"
		document.getElementById("timetablewrapper").appendChild(line);

		// Hour description TODO can be refactored and made better
		var div = createDiv("hour")
		div.style.height = heightOfOneHour + "px";
		div.style.width = widthOfHourText -10 + "px";
		div.style.top = heightOfWeekday + (i -0.5) * (heightOfOneHour + space) + "px"

		var textDiv = document.createElement("div");
		textDiv.appendChild(document.createTextNode(i+8));
		textDiv.style.margin = "5px"
		div.appendChild(textDiv);

		document.getElementById("timetablewrapper").appendChild(div)
	}
}

/*
* Shows the timetable, after given it the timetable model.
*/
function showTimetable(timetable) {
	
	var containerDiv = document.getElementById("timetablewrapper")

	// First horizontal Line
	var horizontalLine = createDiv("line")
	horizontalLine.style.width = space + "px"
	horizontalLine.style.height = 12 * (heightOfOneHour + space) + "px"
	horizontalLine.style.top = heightOfWeekday + "px"
	horizontalLine.style.left = widthOfHourText + "px"
	containerDiv.appendChild(horizontalLine);
	
	var columnNumber = 0 // Iterator over the day columns.
	
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
					lecture.style.height = heightOfOneHour * 2 + space - 4 +"px" // - 4 for padding
					lecture.style.width = width/timetable.columns - space - 4 + "px" // 4 for padding
					lecture.style.left = widthOfHourText + space + columnNumber * (width/timetable.columns )+  "px"
					lecture.style.top = heightOfWeekday + (hour.lecture.startTime-8) * (heightOfOneHour+space) + "px"
					lecture.setAttribute("id", hour.subject.university)
					lecture.appendChild(document.createTextNode(hour.subject.name))
					containerDiv.appendChild(lecture);
				}
			})
			
			// Horizontal Line after Day Column
			var horizontalLine = createDiv("line")
			horizontalLine.style.width = space + "px"
			horizontalLine.style.height = 12 * (heightOfOneHour + space) + "px"
			horizontalLine.style.top = heightOfWeekday + "px"
			horizontalLine.style.left = widthOfHourText + (columnNumber + 1) * (width/timetable.columns )+ "px"
			containerDiv.appendChild(horizontalLine);
			
			columnNumber += 1
		})
	})
}

function createDiv(cssClass) {
	var div = document.createElement("div");
	div.setAttribute("class", cssClass);
	return div;
}


function showSelectionArea() {
	setSubjectsCheckbox()
}


function setSubjectsCheckbox() {
	subjects = data.subjects
	categories = data.categories

	console.log(categories)
	
	categories.forEach( function(category){
		var timetablewrapperCategoryArea = "";
		
		if(category.sub == undefined) {
		// No subcategories exist, so this is a own category
			subjects.forEach(function(subject) {
				if (category.timetablewrapper == subject.category)
					timetablewrapperCategoryArea += createCheckboxEntry(subject);
			});
		} else {
			category.sub.forEach(function(subcategory){
			// Go through all sub categories
        var appendix = ""
				console.log(category)
        subjects.forEach(function(subject) {
          if (category.main == subject.category && subcategory == subject.subcategory)
            appendix += createCheckboxEntry(subject)
        });
        if(appendix != "") {
          appendix = '<h5>' + subcategory + '</h5>' + appendix 
          timetablewrapperCategoryArea += appendix
        }
      });
    }
    console.log("cat area: " + timetablewrapperCategoryArea)
    if (timetablewrapperCategoryArea != "") {
      
      timetablewrapperCategoryArea = '<h3>' + category.timetablewrapper + '</h3>' + timetablewrapperCategoryArea
      $('#selectionarea').append(timetablewrapperCategoryArea)
			console.log(document.getElementById("timetablewrapper"))
	//		document.getElementById("timetablewrapper").appendChild(timetablewrapperCategoryArea)
    }
  })
  
  
  $(".subjectsCheckbox").change(function() {
    setTaken($(this).attr('id'), this.checked)
    refresh(false);
  });
}

function createCheckboxEntry(subject) {
	var string = '<input class="subjectsCheckbox" id="' + subject.name 
		+ '"type="checkbox" value=' + subject.taken + ' ' + checked(subject.taken) 
		+ '> ' + subject.name + " (" + subject.sp + "LP)" + '</input> </br>'

	return string;
}

function checked(bool) {
  if (bool)
    return "checked"
}

function setTaken(id, bool) {
  for (subject in subjects) {
    if (subjects[subject].name == id) {
      subjects[subject].taken = bool;
      console.log("Changed: " + subjects[subject].name)
    }
  }
}
