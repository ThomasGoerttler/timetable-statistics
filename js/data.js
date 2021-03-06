var CURRENT_SEMESTER = "WS2016"
var defaultSavedSubjects = {
	"subjectsWS2015" : [
		"Econometric Methods", 
		"Multivariante Verfahren",
		"Multivariate Statistische Analyse I",
		"Microeconometrics (HU)",
		"Time Series Analysis",
		"Stichprobenberfahren",
		"Computergestützte Statistik mit SAS",
	],
	"subjectsSS2016" : [
		"Stochastik I",
		"Maßtheorie",
		"Fortgeschrittene Methoden der Quantitativen Finanzwirtschaft",
		"Datenanalyse I"
	], 	
	"subjectsWS2016" : [
		"Econometric Methods", 
		"Microeconometrics (HU)",
		"Time Series Analysis",
		"Multivariate Statistische Analyse I",
	],
}

var data = {  
	
	"breaks" : {
		"WS2015" : [
			"Survey Statistik",
			"Quantitative Methoden der Finanzmärkte"
		],
		"SS2016" : [
			"Statistische Inferenz",
			"Ökonometrie"
		],"WS2016" : [
			"Survey Statistik",
			"Quantitative Methoden der Finanzmärkte"
		]
	},
  "categories" : [
    {
      "main": "Methodische Grundlagen",
      "sub": [
        {
          "name": "Das lineare Modell",
          "sp_range": [10]
        },
        {
          "name": "Multivariate statistische Verfahren",
          "sp_range": [5,6]
        }
      ]
    },
    {
      "main": "Wahrscheinlichkeitstheorie"
    },
    {
      "main": "Fortgeschrittene Methoden der Statistik"
    },
    {
      "main": "Statistische Inferenz",
      "sub": [
        {
          "name": "Moderne Methoden der Statistik",
          "sp_range": [6,14]
        },
        {
          "name": "Angewandte Statistik",
          "sp_range": [5,12]
        },
        {
          "name": "Stichprobentheorie",
          "sp_range": [-1,-1]
        },
        {
          "name": "Aktuelle Forschungsfragen der Statistik",
          "sp_range": [5,10]
        },
        {
          "name": "Mathematische Statistik",
          "sp_range": [10]
        },
        {
          "name": "Nichtparametrische Statistik",
          "sp_range": [10]
        },
        {
          "name": "Statistik stochastischer Prozesse",
          "sp_range": [5]
        },
        {
          "name": "Zuverlässigkeitstheorie",
          "sp_range": [10]
        }
      ]
    },
    {
      "main": "Survey Statistik",
      "sub": [
        {
          "name": "Grundlagen der Stichprobentheorie",
          "sp_range": [6]
        },
        {
          "name": "Fortgeschrittene Methoden der Survey Statistik",
          "sp_range": [10]
        },
        {
          "name": "Nonresponse",
          "sp_range": [6,12]
        },
        {
          "name": "Simulation und Stichprobenziehung",
          "sp_range": [5,10]
        }
      ]
    },
    {
      "main": "Statistik in den Lebenswissenschaften",
    },
    {
      "main": "Ökonometrie",
      "sub": [
        {
          "name": "Mikroökonometrie",
          "sp_range": [5,12]
        },
        {
          "name": "Ökonometrische Analyse von Paneldaten",
          "sp_range": [6]
        },
        {
          "name": "Zeitreihenökonometrie",
          "sp_range": [5,11]
        },
        {
          "name": "Ökonometrische Analyse von Finanzmarktdaten",
          "sp_range": [6]
        },
        {
          "name": "Ökonometrische Analyse",
          "sp_range": [5]
        },
        {
          "name": "Projektseminar Ökonometrie",
          "sp_range": [6]
        },
        {
          "name": "Ausgewählte Themen der Ökonometrie",
          "sp_range": [6]
        }
      ],
    },
    {
      "main": "Quantitative Methoden der Finanzmärkte",
      "sub": [
        {
          "name": "Statistik und Finanzwirtschaft",
          "sp_range": [6,12]
        },
        {
          "name": "Statistik der Finanzmärkte",
          "sp_range": [6,9]
        },
        {
          "name": "Ökonometrische Analyse von Finanzmarktdaten",
          "sp_range": [6]
        },
        {
          "name": "Stochastik der Finanzmärkte",
          "sp_range": [10]
        }
      ]
    },
    {
      "main": "Wahlbereich",
    }
  ],  
	"subjectsWS2015":[
		{  
			"name":"Multivariante Verfahren",
			"university":"FU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Schlittgen",
      "sp": "5",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Multivariate statistische Verfahren",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 14,
          "duration": 2,
          "room": "HS 104a",
          "type": "VL" 
				},
				{
					"day":"Donnerstag",
					"startTime": 16,
          "duration": 2,
					"twoWeeksOnly": true,
          "room": "PCPool",
          "type": "ÜB" 
				}
			]
		},
    {  
			"name":"Einführung in Monte-Carlo-Methoden",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Münnich",
      "sp": "5",
      "category" : "Survey Statistik",
			"subcategory" : "Simulation und Stichprobenziehung",
			"annotation" : "Video-Übertragung von der Universität Bamberg Beginn: 26.10.14",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 14,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "VL"
				}
			]
		},
    {  
			"name":"Stichprobenberfahren",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Münnich",
      "sp": "6",
      "category" : "Survey Statistik",
      "subcategory" : "Grundlagen der Stichprobentheorie",
			"annotation" : "Video-Übertragung von der Universität Trier Beginn: 27.10.14",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "V/Ü"
				}
			]
		},  
    {  
			"name":"Behandlung Fehlender Daten in Erhebungen",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "S. Meinfelder",
      "sp": "6",
      "category" : "Survey Statistik",
			"subcategory" : "Nonresponse",
			"annotation" : "Video-Übertragung von der Universität Bamberg Beginn: 26.10.14",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "V/Ü"
				}
			]
		}, 
    {  
			"name":"Colloquium für Masterarbeitsstudenten und Doktoranden",
			"university":"FU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "U. Rendtel, T. Schmid",
      "sp": "0",
      "category" : "Wahlbereich",
			"annotation" : "Beginn: 30.10.14",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 15,
          "duration": 2,
          "room": "Raum 315",
          "type": "SE"
				}
			]
		}, 
    {  
			"name":"Computergestützte Statistik mit SAS",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "U. Rendtel",
      "sp": "5",
      "category" : "Survey Statistik",
			"subcategory" : "Simulation und Stichprobenziehung",
			"annotation" : "Beginn: 28.10.14",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 12,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "V/Ü"
				}
			]
		}, 
    
    {  
			"name":"Ökonometrische Analyse",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "D. Nautz",
      "sp": "5",
      "category" : "Ökonometrie",
      "subcategory" : "Ökonometrische Analyse",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 8,
          "duration": 2,
          "room": "HS 102",
          "type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 10,
          "duration": 2,
          "room": "HS 102",
          "type": "ÜB"
				}
			]
		}, 
		{  
			"name":"Angewandte Ökonometrie",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge, J. de Lazzer, M. Zimmermann",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "german",
			"annotation" : "Nur wählbar ohne Vertiefungsgebiet Ökonometrie. Freitagstermin abwechselnd Vorlesung/Übung",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 202",
          "type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 220/025",
          "type": "V/Ü"
				}
			]
		},
		
		
		{  
			"name":"Econometric Methods",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge, M. Furdas, K. Priesack",
      "sp": "10",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Das lineare Modell",
			"language" : "english",
			"annotation" : "Erster Montag nicht",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 202",
          "type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 201",
          "type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 202",
					"hasAlternative" : true,
          "type": "ÜB"
				},
				{
					"day":"Freitag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 202",
					"hasAlternative" : true,
          "type": "ÜB"
				}
			]
		},
		
		
		{  
			"name":"Doktoranden- und Studienabschlussseminar",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge, C. Breunig",
      "sp": "0",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 16,
          "duration": 2,
          "room": "Raum 112",
          "type": "SE"
				}
			]
		},
		{  
			"name":"Microeconometrics (HU)",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "C. Breunig",
      "sp": "6",
      "category" : "Ökonometrie",
      "subcategory" : "Mikroökonometrie",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 23",
          "type": "V/Ü"
				},
				{
					"day":"Dienstag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 23/PC Pool 026",
          "type": "V/Ü"
				}
			]
		},
		{  
			"name":"Ökonomisches Risiko",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle, C. Chen",
      "sp": "3",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik und Finanzwirtschaft",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 23",
          "type": "SE"
				}
			]
		},
		{  
			"name":"Multivariate Statistische Analyse I",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "L. Borke, M. Grith, P. Gschöpf, W, Wang",
      "sp": "6",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Multivariate statistische Verfahren",
			"language" : "english",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 8,
          "duration": 4,
          "room": "Raum 203",
          "type": "VL"
				}
			]
		},
		{  
			"name":"Datenanalyse II",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "S. Klinke",
      "sp": "6",
      "category" : "Statistische Inferenz",
      "subcategory" : "Angewandte Statistik",
			"language" : "german",
			"annotation" : "Wenn Computergestützte Statisitik (HU) bereits belegt wurde, kann die VL nicht nochmal",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
					"duration": 2,
					"room": "Raum 22",
					"type": "V/Ü"
				},
				{
					"day":"Montag",
					"startTime": 14,
					"duration": 2,
					"room": "Raum 025",
					"type": "V/Ü"
				},
				{
					"day":"Dienstag",
					"startTime": 12,
					"duration": 2,
					"room": "Raum 025",
					"type": "V/Ü"
				}
			]
		},
		{  
			"name":"Statistics of Financial Markets I",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle, C. Chen",
      "sp": "6",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik und Finanzwirtschaft",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 16,
					"duration": 4,
					"room": "Raum 23",
					"type": "VL"
				}
			]
		},
		{  
			"name":"Selected Topic in History of Statistics",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "A. Vogt",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 14,
					"duration": 2,
					"room": "Raum 21a",
					"type": "VL"
				}
			]
		},
		{  
			"name":"Mathematical Statistics",
			"university":"WIAS",
      "address" : "Mohrenstraße 39",
			"taken": true,
      "lecturer": "W. Härdle, V. Spokoiny",
      "sp": "3",
      "category" : "Statistische Inferenz",
      "subcategory" : "Moderne Methoden der Statistik",
			"language" : "english",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 10,
					"duration": 2,
					"room": "Ehrhard- Schmidt-Hörsaal",
					"type": "SE"
				}
			]
		},
		
		{  
			"name":"Einführung zu numerischen Verfahren",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "P. Burdejova, F. Schulz",
      "sp": "3",
      "category" : "Statistische Inferenz",
      "subcategory" : "Angewandte Statistik",
			"language" : "english",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 18,
					"duration": 2,
					"room": "Raum 21b",
					"type": "SE"
				}
			]
		},
		{  
			"name":"Statistical Tools in Finance and Insurance",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "L. Fang, S. Nasekin",
      "sp": "3",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik und Finanzwirtschaft",
			"language" : "english",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 10,
					"duration": 2,
					"room": "Raum 21a",
					"type": "SE"
				}
			]
		},
		{  
			"name":"Selected Topics of Mathematical Statistics",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle, C. Huang. X. XU",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 12,
					"duration": 2,
					"room": "Raum 21b",
					"type": "SE"
				}
			]
		},
		
		
		
		{  
			"name":"Stochastik II",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "D. Becherer",
      "sp": "10",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 0331",
					"type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 1034",
					"type": "ÜB"
				}
			]
		},
		
		{  
			"name":"Methoden der Statistik",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "M. Jirak",
      "sp": "10",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Das lineare Modell",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 15,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 1.115",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 3.007",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Modern Methods in Applied Stochastics and Nonprametric Statistics",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "V. Spokoiny",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 15,
					"duration": 2,
					"room": "Raum 3.011",
					"type": "SE"
				}
			]
		},
		{  
			"name":"Statistische Lerntheorie",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "A. Reiß, A. Carpentier",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1.114",
					"type": "VL"
				}
			]
		},
		{  
			"name":"Stochastische Finanzmathematik",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "U. Horst",
      "sp": "10",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Stochastik der Finanzmärkte",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 0311",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 3.006",
					"type": "ÜB"
				}
			]
		},
		
		{  
			"name":"Projektpraktikum II (Stochastik)",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "A. Bachouch",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 2.207",
					"type": "VL"
				}
			]
		},
		{  
			"name":"Methodenlehre I (Multivariante Verfahren in er Psychologie)",
			"university":"HU_Lebenswissenschaften",
      "address" : "Rudower Chaussee 25/26, Zum Großen Winkanal 2 (ZGW2)",
			"taken": true,
      "lecturer": "M. Voelkle, K Hardt, M. Hecht, N. Vogel",
      "sp": "5",
      "category" : "Statistik in den Lebenswissenschaften",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 0110",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 9,
					"duration": 2,
					"room": "Gebäude 305, Seminarraum",
					"hasAlternative": true,
					"type": "ÜB"
				},
				{
					"day":"Mittwoch",
					"startTime": 11,
					"duration": 2,
					"room": "Gebäude 305, Seminarraum",
					"hasAlternative": true,
					"type": "ÜB"
				},
				{
					"day":"Freitag",
					"startTime": 9,
					"duration": 2,
					"room": "Gebäude 305, Seminarraum",
					"hasAlternative": true,
					"type": "ÜB"
				},
			]
		},
		
		{  
			"name":"Engineering Statistics",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, F. Plitzko",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "english",
			"annotation" : "",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 12,
					"duration": 2,
					"room": "Raum H 2013",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 8,
					"duration": 2,
					"room": "Raum H 2038 oder TEL 206_rechts",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Microeconometrics (TU)",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, T. Repasky",
      "sp": "6",
      "category" : "Ökonometrie",
      "subcategory" : "Mikroökonometrie",
			"language" : "english",
			"annotation" : "",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
					"duration": 2,
					"room": "EW 201",
					"type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 16,
					"duration": 2,
					"room": "Raum H 0106",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Time Series Analysis",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, F. Plitzko",
      "sp": "6",
      "category" : "Ökonometrie",
      "subcategory" : "Zeitreihenökonometrie",
			"language" : "english",
			"annotation" : "",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 10,
					"duration": 2,
					"room": "Raum H 2032",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 8,
					"duration": 2,
					"room": "Raum 206_re",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Business Analytics and Data Science",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "S. Lessmann",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "english",
			"annotation" : "Übung ab zweiter Woche",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 12,
					"duration": 2,
					"room": "Raum 220",
					"type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 16,
					"duration": 2,
					"room": "Raum 025 PC-Pool",
					"type": "ÜB"
				},
				{
					"day":"Mittwoch",
					"startTime": 8,
					"duration": 2,
					"room": "Raum 025 PC-Pool",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Machine Learning I",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "K. Müller",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "english",
			"annotation" : "Übung ab erster Woche",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 10,
					"duration": 2,
					"room": "Raum H 0107",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 12,
					"duration": 2,
					"room": "Raum H 0107",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Machine Intelligence I",
			"university":"TU",
      "address" : "EB Straße des 17. Juni 145",
			"taken": true,
      "lecturer": "K. Obermayer",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 10,
					"duration": 2,
					"room": "EB 202",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 12,
					"duration": 2,
					"room": "MAR 0.003",
					"type": "ÜB"
				},
				{
					"day":"Mittwoch",
					"startTime": 14,
					"duration": 2,
					"room": "MAR 0.003",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Bayesian Learning",
			"university":"TU",
      "address" : "Marchstr. 23",
			"taken": true,
      "lecturer": "K. Müller",
      "sp": "2",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 14,
					"duration": 2,
					"room": "MAR 4.062",
					"type": "VL"
				}
			]
		},
		
	],

	"subjectsSS2016":[
    {  
			"name":"Statistik für Fortgeschrittene",
			"university":"FU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "U. Rendtel",
      "sp": "5",
      "category" : "Fortgeschrittene Methoden der Statistik",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 13,
          "duration": 3,
          "room": "Hs 104",
          "type": "V/Ü"
				}
			]
		},
    {  
			"name":"Varianzschätzverfahren",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "U. Rendtel",
      "sp": "5",
      "category" : "Survey Statistik",
			"subcategory" : "Fortgeschrittene Methoden der Survey Statistik",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 2,
          "room": "Konferenzraum I, Henry Ford Bau, 1. OG",
          "type": "VO"
				},

				{
					"day":"Dienstag",
					"startTime": 16,
          "duration": 2,
          "room": "Konferenzraum I, Henry Ford Bau, 1. OG",
          "type": "ÜB"
				}
			]
		},

    {  
			"name":"Panel Survey",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "U. Rendtel",
      "sp": "5",
      "category" : "Survey Statistik",
			"subcategory" : "Fortgeschrittene Methoden der Survey Statistik",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 12,
          "duration": 2,
          "room": "Konferenzraum I, Henry Ford Bau, 1. OG",
          "type": "VO"
				},

				{
					"day":"Mittwoch",
					"startTime": 14,
          "duration": 2,
          "room": "Konferenzraum I, Henry Ford Bau, 1. OG",
          "type": "ÜB"
				}
			]
		},
		/*
    {  
			"name":"Small Area Schätzverfahren",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Münnich",
      "sp": "5",
      "category" : "Survey Statistik",
			"subcategory" : "Fortgeschrittene Methoden der Survey Statistik",
			"annotation" : "Video-Übertragung von der Universität Trier Beginn: XXXXXX",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "V/Ü"
				}
			]
		}, */ 
		{  
			"name":"Angewandte Mikroökonometrie",
			"university":"FU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "V. Steiner, S. Schmitz",
      "sp": "5",
      "category" : "Ökonometrie",
      "subcategory" : "Mikroökonometrie",
			"language" : "english",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 2,
          "room": "Hörsaal 106",
          "type": "VO"
				},
				{
					"day":"Donnerstag",
					"startTime": 8,
          "duration": 2,
          "room": "K 006b PC-Pool 2",
          "type": "ÜB"
				}
			]
		},
    {  
			"name":"Computergestützte Statistik: Programmieren mit R",
			"university":"FU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "S. Warmhlz, S. Wagner",
      "sp": "5",
      "category" : "Statistische Inferenz",
			"subcategory" : "Angewandte Statistik",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 9,
          "duration": 3,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "S"
				}
			]
		}, 
    {  
			"name":"Einführung in die Bayes-Statistik",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "F. Meinfelder, J. Körber",
      "sp": "6",
      "category" : "Survey Statistik",
			"subcategory" : "Nonresponse",
			"annotation" : "Video-Übertragung von der Universität Bamberg Beginn: 25.04.16",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
          "duration": 2,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "V"
				},
				{
					"day":"Montag",
					"startTime": 12,
          "duration": 2,
					"twoWeeksOnly": true,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "Ü"
				}
			]
		}, /*
    {  
			"name":"Univariate Zeitreihenanalyse",
			"university":"FU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "C. Offermans",
      "sp": "5",
      "category" : "Ökonometrie",
			"subcategory" : "Zeitreihenökonometrie",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 10,
          "duration": 2,
          "room": "HS 106",
          "type": "VO"
				},
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 2,
          "room": "HS 104a",
          "type": "ÜB"
				}
			]
		}, */
    {  
			"name":"Multivariate Zeitreihenanalyse",
			"university":"FU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "H. Lütekepohl",
      "sp": "5",
      "category" : "Ökonometrie",
			"subcategory" : "Zeitreihenökonometrie",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 10,
          "duration": 2,
          "room": "HS 105",
          "type": "VO"
				},
				{
					"day":"Donnerstag",
					"startTime": 14,
          "duration": 2,
          "room": "HS 105",
          "type": "ÜB"
				}
			]
		}, 
		{  
			"name":"Fortgeschrittene Methoden der Ökonometrie",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Fitzenberger",
      "sp": "6",
      "category" : "Fortgeschrittene Methoden der Statistik",
			"language" : "english",
			"annotation" : "Starts at 8:30",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 8,
          "duration": 2,
          "room": "Raum 202",
          "type": "VO"
				},
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 203/PC Pool 025",
          "type": "V/Ü"
				}
			]
		},
		{  
			"name":"Analysis of Panel Data",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge",
      "sp": "6",
      "category" : "Ökonometrie",
      "subcategory" : "Ökonometrische Analyse von Paneldaten",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 23",
          "type": "V"
				},
				{
					"day":"Donnerstag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 23/PC Pool 025",
          "type": "V/Ü"
				}
			]
		},

		{  
			"name":"Time Series Analysis",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge",
      "sp": "6",
      "category" : "Ökonometrie",
      "subcategory" : "Zeitreihenökonometrie",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 22/PC Pool 025",
          "type": "V/Ü"
				},
				{
					"day":"Dienstag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 22",
          "type": "V"
				}
			]
		}, /*
		{  
			"name":"Seminar Econometric Projects",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Fitzenberger",
      "sp": "6",
      "category" : "Ökonometrie",
			"subcategory" : "Projektseminar Ökonometrie",
			"language" : "english",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 8,
          "duration": 2,
          "room": "Raum 112",
          "type": "SE"
				}
			]
		}, */
		{  
			"name":"Doktoranden- und Studienabschlussseminar",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "C. Breunig, B. Fitzenberger",
      "sp": "0",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 18,
          "duration": 2,
          "room": "Raum 112",
          "type": "SE"
				}
			]
		},
		{  
			"name":"Ausgewählte Themen der Ökonometrie",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "C. Breunig",
      "sp": "3",
      "category" : "Ökonometrie",
			"subcategory" : "Ausgewählte Themen der Ökonometrie",
			"language" : "english",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 16,
          "duration": 2,
          "room": "Raum 21b",
          "type": "SE"
				}
			]
		},
		{  
			"name":"Multivariate Statistische Analyse II",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "L. Borke, M. Grith, P. Gschöpf, W, Wang",
      "sp": "3",
      "category" : "Statistische Inferenz",
      "subcategory" : "Angewandte Statistik",
			"language" : "english",
			"annotation" : "Sometimes on Thursday, sometimes on Friday",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 8,
          "duration": 2,
          "room": "Raum 203",
					"hasAlternative": true,
          "type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 16,
          "duration": 2,
          "room": "Raum 25",
					"hasAlternative": true,
          "type": "VL"
				}
			]
		},

		{  
			"name":"Statistik der Finanzmärkte II",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle, S. Nasekin, S Trimborn",
      "sp": "3",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik der Finanzmärkte",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 16,
          "duration": 2,
          "room": "Raum 23",
          "type": "S"
				}
			]
		},
		

		{  
			"name":"Statistische Instrumente für die Finanz- und Versicherungswirtschaft",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "L. Borke, M. Grith, P. Gschöpf, W, Wang",
      "sp": "3",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik und Finanzwirtschaft",
			"language" : "english",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 23",
          "type": "S"
				}
			]
		},

		{  
			"name":"Fortgeschrittene Methoden der Quantitativen Finanzwirtschaft",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "C. Chen, X. Xu",
      "sp": "3",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik und Finanzwirtschaft",
			"language" : "english",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 21b",
          "type": "S"
				}
			]
		},
		
		{  
			"name":"Datenanalyse I",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "S. Klinke",
      "sp": "6",
      "category" : "Statistische Inferenz",
      "subcategory" : "Moderne Methoden der Statistik",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 220",
          "type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 25",
          "type": "ÜB"
				}
			]
		},
		

		{  
			"name":"Mathematical Statistic",
			"university":"WIAS",
      "address" : "Mohrenstraße 39",
			"taken": true,
      "lecturer": "W. Härdle, V. Spokoiny",
      "sp": "3",
      "category" : "Statistische Inferenz",
      "subcategory" : "Moderne Methoden der Statistik",
			"language" : "english",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 10,
					"duration": 2,
					"room": "Ehrhard- Schmidt-Hörsaal",
					"type": "SE"
				}
			]
		},
		

		{  
			"name":"Ökonomisches Risiko",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle, C. Chen",
      "sp": "3",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik und Finanzwirtschaft",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 23",
          "type": "SE"
				}
			]
		},
		
		{

			"name":"Non- and Semiparametric Modelling",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "M. Müller",
      "sp": "3",
      "category" : "Statistische Inferenz",
      "subcategory" : "Moderne Methoden der Statistik",
			"language" : "english",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 16,
          "duration": 2,
          "room": "Raum 21b",
          "type": "SE"
				}
			]
		},
		
		{

			"name":"What is statistics? - Historical perspectives and approaches",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "A.Vogt",
      "sp": "3",
      "category" : "Wahlbereich", 
			"language" : "english",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 16,
          "duration": 2,
          "room": "Raum 21b",
          "type": "SE"
				}
			]
		},
		
		{

			"name":"Privatissimum Statistik",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "C. Chen, W. Härdle",
      "sp": "3",
      "category" : "Wahlbereich", // REFAC
			"language" : "english",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 21b",
          "type": "SE"
				}
			]
		},
		
		{  
			"name":"Maßtheorie", // TO BE CORRECTED
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "M. Wahl",
      "sp": "5",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum  1.304",
					"type": "VL"
				},
				{
					"day":"Montag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum  1.011",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Stochastik I", 
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "A. Reiß",
      "sp": "10",
      "category" : "Wahrscheinlichkeitstheorie",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 0110",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 0310",
					"type": "VL"
				},
				{
					"day":"Montag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 3.007",
					"hasAlternative": true,
					"type": "ÜB"
				},
,
				{
					"day":"Freitag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 3.007",
					"hasAlternative": true,
					"type": "ÜB"
				}
			]
		}, 
		{  
			"name":"Mathematische Statistik",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "V. Spokoiny",
      "sp": "10",
      "category" : "Statistische Inferenz",
			"subcategory" : "Mathematische Statistik",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 3.011",
					"type": "ÜB"
				}
			]
		}, /*
		{  
			"name":"Multivariate Statistik", 
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "R. Bodnar",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum XX",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum XX",
					"type": "VL"
				}
			]
		}, */
		{  
			"name":"Stochastische Analyse", 
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "N. Perkowski, A. Bachouch",
      "sp": "10",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 0331",
					"type": "VL"
				},
				{
					"day":"Montag",
					"startTime": 15,
					"duration": 2,
					"room": "Raum 3.008",
					"hasAlternative": true,
					"type": "ÜB"
				}
			]
		}, 
		{  
			"name":"Zuverlässigkeitstheorie",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "B. Gerlach",
      "sp": "10",
      "category" : "Statistische Inferenz",
			"subcategory" : "Zuverlässigkeitstheorie",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 0310",
					"type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1013",
					"type": "VL"
				},
				{
				"day":"Dienstag",
				"startTime": 15,
				"duration": 2,
				"room": "Raum 1304",
				"type": "VL"
			}
			]
		}, /*
		{  
			"name":"Versicherungsmathematik I",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "B. Gerlach",
      "sp": "10",
      "category" : "Quantitative Methoden der Finanzmärkte",
			"subcategory" : "Stochastik der Finanzmärkte",
			"language" : "german",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum XX",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum XX",
					"type": "VL"
				},
				{
				"day":"Donnerstag",
				"startTime": 15,
				"duration": 2,
				"room": "Raum XX",
				"type": "VL"
			}
			]
		}, */
		{  
			"name":"Stochastische Finanzmathematik II",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "U. Horst",
      "sp": "10",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 0310",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1304",
					"type": "VL"
				}
			]
		},
		{  
			"name":"Stochastische Optimierung",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "T. Surowiec",
      "sp": "5",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Montag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1.013",
					"twoWeeksOnly": true,
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Bayessche Statistik",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "T. Bodnar",
      "sp": "5",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 0311",
					"type": "VL"
				},
				{
					"day":"Montag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 0311",
					"twoWeeksOnly": true,
					"type": "ÜB"
				}
			]
		},
		 /*
		{  
			"name":"Nichtparametrische Statistik",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "D. Becherer",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 15,
					"duration": 2,
					"room": "Raum XX",
					"type": "S"
				}
			]
		}, */
		{  
			"name":"Werkzeuge der empirischen Forschung",
			"university":"HU_Informatik",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "W. Kössler",
      "sp": "8",
      "category" : "Statistische Inferenz",
      "subcategory" : "Angewandte Statistik",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 3.101",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 3.101",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 15,
					"duration": 2,
					"room": "Raum XX",
					"type": "ÜB"
				},
				{
					"day":"Montag",
					"startTime": 15,
					"duration": 2,
					"room": "Raum 3.101",
					"hasAlternative": true,
					"type": "PR"
				},
				{
					"day":"Mittwoch",
					"startTime": 17,
					"duration": 2,
					"room": "Raum 3.101",
					"hasAlternative": true,
					"type": "PR"
				}
			]
		},
		{  
			"name":"Maschinelles Lernen I",
			"university":"HU_Informatik",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "M. Kloft",
      "sp": "5",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 1301",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 13,
					"duration": 1,
					"room": "Raum 1301",
					"type": "ÜB"
				}
			]
		}, /*
		{  
			"name":"Methodenlehre (Longitudinal Data Analysis)",
			"university":"HU_Lebenswissenschaften",
      "address" : "Rudower Chaussee 25/26, Zum Großen Winkanal 2 (ZGW2)",
			"taken": true,
      "lecturer": "M. Voelkle",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 0110",
					"type": "SE"
				}
			]
		}, */
		{  
			"name":"Aktuelle Trends in der psychologischen Methodenlehre",
			"university":"HU_Lebenswissenschaften",
      "address" : "Rudower Chaussee 25/26, Zum Großen Winkanal 2 (ZGW2)",
			"taken": true,
      "lecturer": "M. Voelkle, K Hardt, M. Hecht, N. Vogel",
      "sp": "3",
      "category" : "Statistik in den Lebenswissenschaften",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 1.0314",
					"type": "SE"
				}
			]
		},
		{  
			"name":"Einführung in die Finanzmarktökonometrie",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, F. Plitzko",
      "sp": "6",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Ökonometrische Analyse von Finanzmarktdaten",
			"language" : "english",
			"annotation" : "",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 10,
					"duration": 2,
					"room": "H 2ß13",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 8,
					"duration": 2,
					"room": "Tel 206re",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Empirische Kausalanalyse",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, T. Repasky",
      "sp": "6",
      "category" : "Ökonometrie",
      "subcategory" : "Mikroökonometrie",
			"language" : "english",
			"annotation" : "",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 10,
					"duration": 2,
					"room": "H0107",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 8,
					"duration": 2,
					"room": "TEL 206re",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Multivariate Analysis",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, F. Plitzko",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "english",
			"annotation" : "",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 10,
					"duration": 2,
					"room": "H 1058",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 8,
					"duration": 2,
					"room": "TEL 206re",
					"type": "ÜB"
				}
			]
		}
	],

	"subjectsWS2016":[
		{  
			
			"name":"Armutsindikatoren und ihre Schätzung (Neuere Statistische Methoden)",
			"university":"FU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "T. Schmid",
      "sp": "5",
      "category" : "Statistische Inferenz",
      "subcategory" : "Aktuelle Forschungsfragen der Statistik",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 8,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "VL" 
				}
			]
		},
    {  
			"name":"Einführung in Monte-Carlo-Methoden",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "J.P. Burgard",
      "sp": "5",
      "category" : "Survey Statistik",
			"subcategory" : "Simulation und Stichprobenziehung",
			"annotation" : "Video-Übertragung von der Universität Trier Beginn: 25.10.14",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "VL"
				}
			]
		}, 
    {  
			"name":"Stichprobenverfahren",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "S. Rässler",
      "sp": "6",
      "category" : "Survey Statistik",
      "subcategory" : "Grundlagen der Stichprobentheorie",
			"annotation" : "Video-Übertragung von der Universität Bamberg Beginn: 24.10.16",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 12,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "V/Ü"
				}
			]
		}, 
		
    {  
			"name":"Behandlung Fehlender Daten in Erhebungen",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "S. Meinfelder",
      "sp": "6",
      "category" : "Survey Statistik",
			"subcategory" : "Nonresponse",
			"annotation" : "Video-Übertragung von der Universität Bamberg Beginn: 25.10.14",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 10,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "V/Ü"
				}
			]
		}, 
    {  
			"name":"Colloquium für Masterarbeitsstudenten und Doktoranden",
			"university":"FU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "U. Rendtel, T. Schmid",
      "sp": "0",
      "category" : "Wahlbereich",
			"annotation" : "Beginn: 30.10.16",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 15,
          "duration": 2,
          "room": "Raum 315",
          "type": "SE"
				}
			]
		}, 
    {  
			"name":"Kalibrationsmethoden und Gewichtung",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "U. Rendtel",
      "sp": "5",
      "category" : "Survey Statistik",
			"subcategory" : "Simulation und Stichprobenziehung",
			"annotation" : "Beginn: 26.10.16 auch anrechenbar in Angewandte Statistik (Statistische Inferenz)",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 12,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "V/Ü"
				}
			]
		}, 
    {  
			"name":"Ökonometrische Analyse",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "D. Nautz",
      "sp": "5",
      "category" : "Ökonometrie",
      "subcategory" : "Ökonometrische Analyse",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 10,
          "duration": 2,
          "room": "HS 102",
          "type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 12,
          "duration": 2,
          "room": "HS 102",
          "type": "ÜB"
				}
			]
		}, 
    {  
			"name":" Statistische Beratung",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "U. Rendtel, C. Baldermann",
      "sp": "5",
      "category" : "Statistik in den Lebenswissenschaften",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 15,
          "duration": 2,
          "room": "Keine Ahnung",
          "type": "SE"
				}
			]
		}, 
		{  
			"name":"Angewandte Ökonometrie",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge, J. de Lazzer, M. Zimmermann",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "german",
			"annotation" : "Nur wählbar ohne Vertiefungsgebiet Ökonometrie.",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 202",
          "type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 220/025",
					"twoWeeks" : true,
          "type": "VL/ÜB"
				},
				{
					"day":"Mittwoch",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 220/025",
					"twoWeeks" : true,
          "type": "VL/ÜB"
				}
			]
		},
		
		
		{  
			"name":"Econometric Methods",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge, M. Furdas, J. Emmler",
      "sp": "10",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Das lineare Modell",
			"language" : "english",
			"annotation" : "Erster Montag nicht",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 202",
          "type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 201",
          "type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 202",
					"hasAlternative" : true,
          "type": "ÜB"
				},
				{
					"day":"Freitag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 202",
					"hasAlternative" : true,
          "type": "ÜB"
				}
			]
		},
		
		
		{  
			"name":"Doktoranden- und Studienabschlussseminar",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge, C. Breunig",
      "sp": "0",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 18,
          "duration": 2,
          "room": "Raum 21b",
          "type": "SE"
				}
			]
		},
		{  
			"name":"Microeconometrics (HU)",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "C. Breunig",
      "sp": "6",
      "category" : "Ökonometrie",
      "subcategory" : "Mikroökonometrie",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 23",
          "type": "V/Ü"
				},
				{
					"day":"Dienstag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 23/PC Pool 026",
          "type": "V/Ü"
				}
			]
		},
		{  
			"name":"Estimation of Treatment Effect",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Fitzenberger",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 8,
          "duration": 2,
          "room": "Raum 22",
          "type": "V/Ü"
				},
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 22",
          "type": "V/Ü"
				}
			]
		},/*
		{  
			"name":"Ökonomisches Risiko",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle, C. Chen",
      "sp": "3",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik und Finanzwirtschaft",
			"language" : "english",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 18,
          "duration": 2,
          "room": "Raum 23",
          "type": "SE"
				}
			]
		},*/
		{  
			"name":"Multivariate Statistische Analyse I",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "Burdejova, Schulz, Zbonakova",
      "sp": "6",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Multivariate statistische Verfahren",
			"language" : "english",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 8,
          "duration": 4,
          "room": "Raum 203",
          "type": "VL"
				}
			]
		},
		{  
			"name":"Datenanalyse II",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "S. Klinke",
      "sp": "6",
      "category" : "Statistische Inferenz",
      "subcategory" : "Angewandte Statistik",
			"language" : "german",
			"annotation" : "Wenn Computergestützte Statisitik (HU) bereits belegt wurde, kann die VL nicht nochmal",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
					"duration": 2,
					"room": "Raum 22",
					"type": "V/Ü"
				},
				{
					"day":"Dienstag",
					"startTime": 12,
					"duration": 2,
					"room": "Raum 025",
					"type": "V/Ü"
				}
			]
		},
		{  
			"name":"Statistics of Financial Markets I",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle",
      "sp": "6",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik und Finanzwirtschaft",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 16,
					"duration": 4,
					"room": "Raum 23",
					"type": "VL"
				}
			]
		}, /*
		{  
			"name":"Selected Topic in History of Statistics",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "A. Vogt",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 14,
					"duration": 2,
					"room": "Raum 21a",
					"type": "VL"
				}
			]
		}, */
		{  
			"name":"Mathematical Statistics",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle, V. Spokoiny",
      "sp": "6",
      "category" : "Statistische Inferenz",
      "subcategory" : "Moderne Methoden der Statistik",
			"annotation" : "Gab früher nur 3 LPs. Nachprüfen.",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 14,
					"duration": 2,
					"room": "Raum 23",
					"type": "SE"
				},
				{
					"day":"Mittwoch",
					"startTime": 10,
					"duration": 2,
					"room": "Ehrhard- Schmidt-Hörsaal",
					"type": "SE"
				}
			]
		},
		/*
		{  
			"name":"Einführung zu numerischen Verfahren",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "P. Burdejova, F. Schulz",
      "sp": "3",
      "category" : "Statistische Inferenz",
      "subcategory" : "Angewandte Statistik",
			"language" : "english",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 18,
					"duration": 2,
					"room": "Raum 21b",
					"type": "SE"
				}
			]
		}, */
		{  
			"name":"Statistical Tools in Finance and Insurance",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "L. Fang, S. Nasekin",
      "sp": "6",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik und Finanzwirtschaft",
			"language" : "english",
			"annotation" : "Gab früher nur 3 LPs. Nachprüfen.",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 12,
					"duration": 2,
					"room": "Raum 21b",
					"type": "SE"
				},
				{
					"day":"Dienstag",
					"startTime": 10,
					"duration": 2,
					"room": "Raum 21b",
					"type": "SE"
				}
			]
		},/*
		{  
			"name":"Selected Topics of Mathematical Statistics",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle, C. Huang. X. XU",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 12,
					"duration": 2,
					"room": "Raum 21b",
					"type": "SE"
				}
			]
		},
		
		*/
		
		
		
		
		
		
		{  
			"name":"Stochastik II",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "Reiß",
      "sp": "10",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 0331",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 1034",
					"type": "ÜB"
				}
			]
		},
		
		{  
			"name":"Methoden der Statistik",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "Bodnar",
      "sp": "10",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Das lineare Modell",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1.115",
					"type": "VL"
				},
				{
					"day":"Montag",
					"startTime": 15,
					"duration": 2,
					"room": "Raum 3.007",
					"type": "ÜB"
				}
			]
		},
		
		{  
			"name":"Modern Methods in Applied Stochastics and Nonprametric Statistics",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "V. Spokoiny",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 16,
					"duration": 2,
					"room": "Raum 3.011",
					"type": "SE"
				}
			]
		},
		{  
			"name":"Statistische Lerntheorie",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "A. Reiß, A. Carpentier",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1.114",
					"type": "VL"
				}
			]
		},
		{  
			"name":"Stochastische Finanzmathematik",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "Becherer",
      "sp": "10",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Stochastik der Finanzmärkte",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 0311",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 0311",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1.304",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Projektpraktikum II (Stochastik)",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "Randolf Altmeyer",
      "sp": "5",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 1.012",
					"type": "VL"
				}
			]
		},
		
		{  
			"name":"Methodenlehre I (Multivariante Verfahren in er Psychologie)",
			"university":"HU_Lebenswissenschaften",
      "address" : "Rudower Chaussee 25/26, Zum Großen Winkanal 2 (ZGW2)",
			"taken": true,
      "lecturer": "M. Voelkle, K Hardt, M. Hecht, N. Vogel",
      "sp": "5",
      "category" : "Statistik in den Lebenswissenschaften",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 0110",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 9,
					"duration": 2,
					"room": "Gebäude 305, Seminarraum",
					"hasAlternative": true,
					"type": "ÜB"
				},
				{
					"day":"Mittwoch",
					"startTime": 11,
					"duration": 2,
					"room": "Gebäude 305, Seminarraum",
					"hasAlternative": true,
					"type": "ÜB"
				},
				{
					"day":"Freitag",
					"startTime": 9,
					"duration": 2,
					"room": "Gebäude 305, Seminarraum",
					"hasAlternative": true,
					"type": "ÜB"
				},
			]
		},
		
		{  
			"name":"Engineering Statistics",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, F. Plitzko",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "english",
			"annotation" : "",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 10,
					"duration": 2,
					"room": "Raum H 2013",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 8,
					"duration": 2,
					"room": "Raum H 2038 oder TEL 206_rechts",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Microeconometrics (TU)",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, T. Repasky",
      "sp": "6",
      "category" : "Ökonometrie",
      "subcategory" : "Mikroökonometrie",
			"language" : "english",
			"annotation" : "",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 12,
					"duration": 2,
					"room": "EW 201",
					"type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 14,
					"duration": 2,
					"room": "Raum H 0106",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Time Series Analysis",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, F. Plitzko",
      "sp": "6",
      "category" : "Ökonometrie",
      "subcategory" : "Zeitreihenökonometrie",
			"language" : "english",
			"annotation" : "",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 14,
					"duration": 2,
					"room": "Raum H 2032",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 8,
					"duration": 2,
					"room": "Raum 206_re",
					"type": "ÜB"
				}
			]
		},
		
		
		{  
			"name":"Business Analytics and Data Science",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "S. Lessmann",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "english",
			"annotation" : "Übung ab zweiter Woche",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 10,
					"duration": 2,
					"room": "Raum 201",
					"type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 16,
					"duration": 2,
					"room": "Raum 025 PC-Pool",
					"type": "ÜB"
				},
				{
					"day":"Mittwoch",
					"startTime": 8,
					"duration": 2,
					"room": "Raum 025 PC-Pool",
					"type": "ÜB"
				}
			]
		},
		/*
		{  
			"name":"Machine Learning I",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "K. Müller",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "english",
			"annotation" : "Übung ab erster Woche",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 10,
					"duration": 2,
					"room": "Raum H 0107",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 12,
					"duration": 2,
					"room": "Raum H 0107",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Machine Intelligence I",
			"university":"TU",
      "address" : "EB Straße des 17. Juni 145",
			"taken": true,
      "lecturer": "K. Obermayer",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 10,
					"duration": 2,
					"room": "EB 202",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 12,
					"duration": 2,
					"room": "MAR 0.003",
					"type": "ÜB"
				},
				{
					"day":"Mittwoch",
					"startTime": 14,
					"duration": 2,
					"room": "MAR 0.003",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Bayesian Learning",
			"university":"TU",
      "address" : "Marchstr. 23",
			"taken": true,
      "lecturer": "K. Müller",
      "sp": "2",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 14,
					"duration": 2,
					"room": "MAR 4.062",
					"type": "VL"
				}
			]
		}, */
		
	],
}